import axios from "axios";
import { isEqual } from "lodash";
import React, { useEffect, useRef, useState } from "react";
import { Col, Overlay, Row, Tooltip } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import {
  getScenesInPrototypeForPublic,
  getSceneViewBackgroundInfoPublic,
} from "../api/configuratorApi";
import { ReactComponent as Close } from "../assets/images/close.svg";
import { ReactComponent as FullScreenIcon } from "../assets/images/fullScreen.svg";
import { ReactComponent as RightIcon } from "../assets/images/NextIcon.svg";
import { ReactComponent as LeftIcon } from "../assets/images/PrevIcon.svg";
import { ReactComponent as Visibility } from "../assets/images/Visibility.svg";
import { ReactComponent as VisibilityOff } from "../assets/images/VisibilityOff.svg";
import { BigButton } from "../common";
import Dropdown from "../common/Dropdown";
import Radio from "../common/Radio";
import { getSceneLabelOptions } from "../components/Configurator/utils";
import Help from "../components/Help";
import Loader from "../components/Loader/Loader";
import { API_ROOT_URL } from "../constants/apiConstant";
import {
  COLOURED_FINISH,
  FINISH_COLOR_SHADE_OPTION,
  FINISH_TYPE_LIST,
  FINISH_TYPE_OPTION,
  GLOSS_FINISH,
  HOTSPOT_TOOLTIP_KEY,
  NATURAL_FINISH,
  ROOM_LIST,
  VIEW_TOOLTIP_KEY,
} from "../constants/constants";
import { MAX_CAMERA_ANGLES } from "../constants/productConfiguratorConstants";
import {
  capitalize,
  getLocalStorage,
  objectToFormData,
  setLocalStorage,
  trackDropdownAndRadioFilter,
  trackSwatches,
} from "../helpers/jsHelper";
import { errorToastV2 } from "../helpers/toastHelper";
import { usePageTitle } from "../hooks/usePageTitle";
import "./ImageViewer.scss";
let APIData = [];
const ImageViewer = ({
  isImageViewer = true,
  selectedStoreLocal,
  allStoreList,
  modelId,
  isRender,
  localLayoutData,
  localProfileData,
  localSceneData,
  dropdownOptions,
  setDropdownOptions,
  localColorOptionList,
  selectedHubspot,
  setSelectedHubspot,
  hobspotLabel,
  appliedHubSpot,
  setAppliedHubSpot,
  hubspotImagePosition,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [allImages, setAllImages] = useState([]);
  const [label, setLabel] = useState([]);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);
  const [zoom, setZoom] = useState(false);
  const [singleMergeData, setSingleMergeData] = useState({});
  const [selectedTextureMergeId, setSelectedTextureMergeId] = useState(null);
  const [selectedTextures, setSelectedTextures] = useState([]);
  const [highResImageWidth, setHighResImageWidth] = useState(1);
  const [highResImageHeight, setHighResImageHeight] = useState(1);
  const [threeSixtyImages, setThreeSixtyImages] = useState([]);
  const [outerLoader, setOuterLoader] = useState(true);
  const [selectedStore, setSelectedStore] = useState();
  const [selectedScene, setSelectedScene] = useState({});
  const [filteredStoreList, setFilteredStoreList] = useState([]);
  const [isFinalise, setIsFinalise] = useState(false);
  const [imageDimensions, setImageDimensions] = useState(null);
  const outerContainerRef = useRef(null);
  const [allScenes, setAllScenes] = useState([]);
  const isMobile = window.innerWidth < 576;
  const [selectedLayoutData, setSelectedLayoutData] = useState();
  const [selectedProfileData, setSelectedProfileData] = useState();
  const [layoutData, setLayoutData] = useState([]);
  const [sceneBackgroundInfoData, setSceneBackgroundInfoData] = useState([]);
  const [visible, setVisible] = useState(true);
  const [showTooltips, setShowTooltips] = useState({
    viewTooltip: false,
    hotspotTooltip: false,
  });
  const [finishType, setFinishType] = useState(GLOSS_FINISH);
  const [finishShadeType, setFinishShadeType] = useState(null);
  const [showDetails, setShowDetails] = useState(null);
  const hotspotTooltipTarget = useRef(null);
  const viewTooltipTarget = useRef(null);
  const hideShadeType = dropdownOptions?.finishType?.value === NATURAL_FINISH;
  const reverse =
    searchParams.get("reverse") === "true" ||
    searchParams.get("reverse") === true;
  const isTestConfig = window?.location?.pathname === "/test";

  usePageTitle("Asian Paints Configurator");

  useEffect(() => {
    if (finishType && selectedHubspot && Object.keys(appliedHubSpot)?.length) {
      const currentType = appliedHubSpot[selectedHubspot?.id]?.finishType;
      if (finishType !== currentType) {
        if (hobspotLabel?.length) {
          let defaultSelect = {};
          hobspotLabel?.map((list) => {
            const data =
              localColorOptionList?.find(
                ({ hubspotLabelId, name, ...rest }) =>
                  hubspotLabelId === list?.id &&
                  finishType === rest?.finishType &&
                  name === appliedHubSpot[list?.id]?.name
              ) || null;
            if (data) {
              defaultSelect[list?.id] = data;
            }
          });
          window.$mergeAPI = true;
          setAppliedHubSpot(defaultSelect);
        }
      }
    }
  }, [finishType]);

  useEffect(() => {
    finishType !== GLOSS_FINISH && setFinishType(GLOSS_FINISH);
    finishShadeType && setFinishShadeType(null);
    showDetails && setShowDetails(null);
    !visible && setVisible(true);
  }, [dropdownOptions?.room?.value]);

  useEffect(() => {
    if (dropdownOptions?.finishType?.value === COLOURED_FINISH) {
      setFinishShadeType(FINISH_COLOR_SHADE_OPTION[0]);
    } else {
      finishShadeType && setFinishShadeType(null);
    }
  }, [dropdownOptions?.finishType?.value]);

  useEffect(() => {
    if (window.$mergeAPI) {
      window.$mergeAPI = false;
      getDefaultTextures({
        labelId: selectedHubspot?.id,
        textureId: appliedHubSpot?.[selectedHubspot?.id],
        isDisabled: appliedHubSpot?.[selectedHubspot?.id]?.is_disabled,
      });
    }
  }, [appliedHubSpot]);

  const downloadCurrentImage = (payload) => {
    if (payload?.data?.downloadCurrentImg) {
      const imageURL =
        allImages[currentFrame]?.image || allImages[currentFrame]?.image_low;
      const sectionList = Object.keys(appliedHubSpot)?.map((list) => {
        return {
          area: hobspotLabel?.find(({ id }) => +id === +list)?.name,
          shade: appliedHubSpot[list]?.name
            ?.replace(appliedHubSpot[list]?.code, "")
            ?.trim(),
          SKUCode: appliedHubSpot[list]?.code || "-",
          shadeType: capitalize(appliedHubSpot[list]?.shadeType) || "-",
          hexCode: appliedHubSpot[list]?.colorCode || "-",
          naturalThumbImage: appliedHubSpot[list]?.thumb || "-",
          description: `${
            appliedHubSpot[list]?.finishColorType
          } Wood Finish-${capitalize(appliedHubSpot[list]?.finishType)}`,
        };
      });
      const jsonData = {
        roomName: dropdownOptions?.room?.label,
        sections: sectionList || [],
      };
      const payload = {
        imageURL: imageURL,
        jsonData: jsonData,
      };

      console.log("payload", payload);
      window?.parent?.postMessage(
        { type: "childIframeData", data: payload },
        "*"
      );
    }
  };

  useEffect(() => {
    window.addEventListener("message", downloadCurrentImage);
    return () => {
      window.removeEventListener("message", downloadCurrentImage);
    };
  }, [allImages, currentFrame]);

  const filterColorOption = () => {
    let filterRecord = [];
    filterRecord = localColorOptionList?.filter(
      ({ hubspotLabelId, finishColorType, ...data }) =>
        hubspotLabelId === selectedHubspot?.id &&
        finishColorType === dropdownOptions?.finishType?.value &&
        data?.finishType === finishType &&
        (!finishShadeType?.value
          ? 1
          : data?.shadeType === finishShadeType?.value)
    );
    return filterRecord;
  };

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        handleShowInfoTooltip();
      }, 2000);
    }
  }, [isLoading, visible, fullScreen, allImages]);

  const handleFilterAllImage = () => {
    return allImages || [];
  };

  const handleShowInfoTooltip = () => {
    const viewTooltipValue = getLocalStorage(VIEW_TOOLTIP_KEY);
    const hotspotTooltipValue = getLocalStorage(HOTSPOT_TOOLTIP_KEY);
    setShowTooltips({
      ...showTooltips,
      viewTooltip:
        viewTooltipValue === false || viewTooltipValue === "false"
          ? false
          : true,
      hotspotTooltip:
        hotspotTooltipValue === false || hotspotTooltipValue === "false"
          ? false
          : true,
    });
  };

  useEffect(() => {
    if (localLayoutData?.length && localProfileData?.length) {
      if (
        selectedProfileData?.name === "Rectangle" &&
        selectedProfileData?.hide
      ) {
        const filterLayout = localLayoutData?.filter(({ hide }) => !hide);
        setLayoutData(filterLayout);
        if (
          !filterLayout?.some(({ name }) => name === selectedLayoutData?.name)
        ) {
          setSelectedLayoutData(filterLayout?.[0]);
        }
      } else {
        if (
          !localLayoutData?.some(
            ({ name }) => name === selectedLayoutData?.name
          )
        ) {
          setSelectedLayoutData(localLayoutData[0]);
        }
        setLayoutData(localLayoutData);
      }
    }
  }, [selectedProfileData]);

  useEffect(() => {
    if (
      selectedLayoutData?.id &&
      selectedProfileData?.id &&
      localSceneData?.length
    ) {
      let locScene = null;
      locScene = localSceneData.find(
        (ld) =>
          ld.layoutId === selectedLayoutData?.id &&
          ld.profileId === selectedProfileData?.id
      );
      let sceneToSelect;
      for (let i = 0; i < allStoreList.length; i++) {
        if (allStoreList[i].scene?.id === locScene?.id) {
          sceneToSelect = allStoreList[i].scene;
          break;
        }
      }
      setSelectedScene(sceneToSelect);
    }
  }, [selectedLayoutData, selectedProfileData, selectedStore]);

  useEffect(() => {
    if (localLayoutData?.length && localProfileData?.length) {
      setSelectedLayoutData(localLayoutData[0]);
      setSelectedProfileData(localProfileData[0]);
    }
  }, [localLayoutData, localProfileData]);

  useEffect(() => {
    async function loadAndCheckStoreData() {
      if (allStoreList?.length) {
        setOuterLoader(true);
        const scenes = await getScenesInPrototypeForPublic({
          token: modelId,
          is_render: isRender,
        });
        setAllScenes([...scenes]);
        if (scenes?.length) {
          const sceneId = scenes[0]?.id;
          let filteredData = allStoreList?.filter(
            (val) => parseInt(val?.scene?.id) === parseInt(sceneId)
          );
          if (!filteredData?.length && selectedStoreLocal) {
            filteredData = [selectedStoreLocal];
          }
          const sortedData = filteredData.sort(
            (a, b) => new Date(b?.updated_at) - new Date(a?.updated_at)
          );
          sortedData?.length && setSelectedStore(sortedData[0]);
        }
      }
    }
    loadAndCheckStoreData();
  }, [selectedStoreLocal, allStoreList]);

  useEffect(() => {
    if (selectedScene?.id) {
      let filteredStore;
      if (allStoreList?.length > 1) {
        filteredStore = getFilterStore(allStoreList, selectedScene);
      } else {
        filteredStore = JSON.parse(JSON.stringify(allStoreList));
      }
      setFilteredStoreList([...filteredStore]);
    }
  }, [selectedScene]);

  useEffect(() => {
    if (filteredStoreList?.length) {
      getStoreData();
    }
  }, [filteredStoreList]);

  const getFilterStore = (storeList, currentScene) => {
    if (currentScene?.id) {
      return storeList.filter((store) => store.scene.id === currentScene.id);
    }
  };

  const getStoreData = () => {
    try {
      if (allStoreList?.length) {
        let selectedStoreToPass;
        for (let i = 0; i < allStoreList.length; i++) {
          if (allStoreList[i].scene.id === selectedScene.id) {
            selectedStoreToPass = allStoreList[i];
            break;
          }
        }
        initializeData(selectedStoreToPass);
      }
    } catch (err) {
      errorToastV2("Something went wrong. Please try again.");
    }
  };

  const sceneBackgroundInfo = async (paylaod) => {
    const res = await getSceneViewBackgroundInfoPublic(paylaod);
    setSceneBackgroundInfoData(res);
    return res;
  };

  const initializeData = async (data) => {
    const allData = data;
    if (allData) {
      const configuratorData = allData.configurator;
      const showDownloadBtn = configuratorData.is_download_enabled;
      const highResImageWidth = allData?.scene?.render_reso_x;
      const highResImageHeight = allData?.scene?.render_reso_y;
      const defaultTextures = [];
      Object?.keys(appliedHubSpot).map((value) => {
        defaultTextures.push({
          id: +appliedHubSpot[value]?.id,
          renderId: +appliedHubSpot[value]?.render_id,
          sceneTextureId: +appliedHubSpot[value]?.scenetexturerender_id,
        });
      });
      let labelData = [];
      if (allData?.labels?.length) {
        labelData = allData?.labels;
      } else {
        labelData = await getSceneLabelOptions({
          sceneId: allData?.scene?.id,
          token: modelId,
          storeId: allData?.id,
        });
      }
      const sceneBackround = sceneBackgroundInfoData?.length
        ? sceneBackgroundInfoData
        : await sceneBackgroundInfo({
            storeId: allData?.id,
            token: modelId,
            scene: allData?.scene?.id,
          });
      if (labelData?.length) {
        let labels = labelData.map((element, index) => {
          element["start_image"] = 0;
          element["end_image"] = MAX_CAMERA_ANGLES - 1;
          element["amount"] = element.textures.length;
          element["page_id"] = 1;
          element["show"] = index === 0;
          element["sceneId"] = allData?.scene?.id;
          element["token"] = modelId;
          element["storeId"] = allData?.id;
          if (element.name !== "default_label") {
            element?.textures?.map((texture, index) => {
              const textureCopy = JSON.parse(JSON.stringify(texture));
              textureCopy["active"] = true;
              return textureCopy;
            });
            return element;
          }
        });
        labels = labels.filter((label) => label?.id);
        setLabel(labels);
        const renderIds = getRenderIdsFromTextureIds(defaultTextures);
        const mergeData = {
          scene: allData.scene.id,
          textures: defaultTextures,
          is_render: true,
          ext: "png",
          store: allData?.id,
          renders: renderIds,
        };
        setSingleMergeData(mergeData);
        setSelectedTextures(defaultTextures);
        setHighResImageWidth(highResImageWidth);
        setHighResImageHeight(highResImageHeight);
        APIData = [];
        try {
          for (const [index, list] of sceneBackround.entries()) {
            const res = await getAllMergeData({
              mergeData,
              textureIds: defaultTextures,
              resetFrame: false,
              sceneView: list?.id,
              count: index + 1,
              total: sceneBackround?.length,
            });
          }
        } catch (error) {
          console.error("Error occurred while uploading image:", error);
        }
        setIsFinalise(configuratorData?.is_finalize);
      }
    }
  };

  const getRenderIdsFromTextureIds = (defaultTextures) => {
    const renderIds = [];
    const renderStatus = selectedStore?.render_status || [];
    renderStatus?.map((val) => {
      if (defaultTextures.indexOf(val.scene_texture__id) !== -1) {
        renderIds.push(val.renders__id);
      }
      return null;
    });
    return renderIds;
  };

  const getDefaultTextures = async ({ labelId, textureId, isDisabled }) => {
    if (isDisabled) {
      errorToastV2(
        "This texture preview is still in progress. Please try again after some time."
      );
      return;
    }
    if (isLoading || outerLoader) {
      return;
    }
    const labels = [...label];
    const defaultTextures = [];
    const sceneBackround = sceneBackgroundInfoData?.length
      ? sceneBackgroundInfoData
      : await sceneBackgroundInfo({
          storeId: selectedStoreLocal?.id,
          token: modelId,
          scene: localSceneData?.id,
        });
    Object?.keys(appliedHubSpot).map((value) => {
      defaultTextures.push({
        id: +appliedHubSpot[value]?.id,
        renderId: +appliedHubSpot[value]?.render_id,
        sceneTextureId: +appliedHubSpot[value]?.scenetexturerender_id,
      });
    });
    if (
      isEqual(label, labels) &&
      isEqual(selectedTextures.sort(), defaultTextures.sort())
    ) {
      return;
    }
    setLabel(labels);
    setSelectedTextures(defaultTextures);
    APIData = [];
    try {
      for (const [index, list] of sceneBackround.entries()) {
        const res = await getAllMergeData({
          mergeData: singleMergeData,
          textureIds: defaultTextures,
          sceneView: list?.id,
          count: index + 1,
          total: sceneBackround?.length,
        });
      }
    } catch (error) {
      console.error("Error occurred while uploading image:", error);
    }
  };

  function removeDuplicateImage(list) {
    const uniqueSeqNos = {};
    const uniqueArray = [];
    list?.forEach((item) => {
      if (!uniqueSeqNos[item?.seq_no]) {
        uniqueSeqNos[item?.seq_no] = true;
        uniqueArray.push(item);
      }
    });
    return uniqueArray;
  }

  const getAllMergeData = async ({
    mergeData,
    textureIds,
    resetFrame,
    sceneView,
    count,
    total,
  }) => {
    const lastCall = +total === +count;
    const allTextures = textureIds || selectedTextures;
    const textures = allTextures?.map((val) => val?.id);
    const renders = allTextures?.map((val) => val?.renderId);
    const sceneTextureRender = allTextures?.map((val) => val?.sceneTextureId);
    const data = {
      textures: textures,
      renders: renders,
      is_render: true,
      scenetexture_render: sceneTextureRender,
      scene_view: sceneView,
      scene: mergeData?.scene,
      store: mergeData?.store,
      ext: "png",
    };
    const formData = objectToFormData(data, { separateArrayItems: true });
    if (!outerLoader) {
      showLoader();
    }
    try {
      let url =
        API_ROOT_URL + "/configurator/api/v2/merge/v2/?token=" + modelId;
      const response = await axios.post(url, formData);
      const data = response?.data?.data;
      APIData = [...APIData, ...removeDuplicateImage(data?.images)];
      if (data && APIData.length > 0 && lastCall) {
        let imagesToSet = JSON.parse(JSON.stringify(APIData));
        setAllImages(imagesToSet);
        if (!isImageViewer) {
          const images = [];
          APIData.forEach((image) => {
            images.push(image.image || image.image_low);
          });
          setThreeSixtyImages(images);
          if (!data?.images?.length) {
            loadedImage();
          }
        } else {
          loadedImage();
        }
        if (+currentFrame >= imagesToSet?.length || resetFrame) {
          setCurrentFrame(0);
        }
      }
      return response;
    } catch (err) {
      errorToastV2("Something went wrong. Please try again.");
      loadedImage();
    }
  };

  const showLoader = () => {
    setIsLoading(true);
  };

  const hideLoader = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 700);
  };

  const switchToFullScreen = (flag) => {
    setFullScreen(flag);
  };

  const changeImage = (type) => {
    if (isLoading || outerLoader) {
      return;
    }
    let count = currentFrame;
    if (type === "prev") {
      if (count < 0) {
        count = 0;
      } else {
        count = count === 0 ? handleFilterAllImage().length - 1 : count - 1;
      }
    } else {
      if (count > handleFilterAllImage().length - 1) {
        count = handleFilterAllImage().length - 1;
      } else {
        count = count === handleFilterAllImage().length - 1 ? 0 : count + 1;
      }
    }
    setCurrentFrame(count);
  };

  const VisibleToggleIcon = () => {
    return (
      <div
        className="position-absolute visible-icon"
        onClick={() => setVisible(!visible)}
      >
        {visible ? <VisibilityOff /> : <Visibility />}
      </div>
    );
  };
  const fullScreenIcon = () => {
    return (
      <div
        className="position-absolute fullscreen-icon"
        onClick={() => {
          if (isLoading || outerLoader) {
            return;
          }
          switchToFullScreen(!fullScreen);
          setZoom(false);
        }}
      >
        <FullScreenIcon className="unselectable" />
      </div>
    );
  };

  const leftRightIcon = () => {
    const prevDisabled = +currentFrame === 0;
    const nextDisabled = +currentFrame + 1 === handleFilterAllImage().length;
    return (
      <>
        {visible && (
          <Overlay
            target={viewTooltipTarget?.current}
            show={showTooltips.viewTooltip}
            placement="top"
          >
            {(props) => (
              <Tooltip {...props}>
                View different views of the room.
                <BigButton
                  variant="link"
                  className="ms-auto"
                  onClick={() => {
                    setShowTooltips({
                      ...showTooltips,
                      viewTooltip: false,
                    });
                    setLocalStorage(VIEW_TOOLTIP_KEY, false);
                  }}
                >
                  Got it
                </BigButton>
              </Tooltip>
            )}
          </Overlay>
        )}
        <div className="image-action-area" ref={viewTooltipTarget}>
          <div
            className={`left-nav nav-buttons ${
              prevDisabled ? "icon-disabled" : ""
            }`}
          >
            <LeftIcon onClick={() => !prevDisabled && changeImage("prev")} />
          </div>
          <div className="image-count">
            {currentFrame + 1} / {handleFilterAllImage().length}
          </div>
          <div
            className={`right-nav nav-buttons ${
              nextDisabled ? "icon-disabled" : ""
            }`}
          >
            <RightIcon onClick={() => !nextDisabled && changeImage("next")} />
          </div>
        </div>
      </>
    );
  };

  // function  handleImagineClick (){
  //   window.open("https://imagine.io", "_blank");
  // }

  const PoweredByIcon = () => {
    return (
      <>
        <div className="powered-by">
          {/* onClick={handleImagineClick}> */}
          <>
            <div>powered by&nbsp;</div>
            <img
              src="favicon.png"
              alt="imagine.io"
              className="imagine_logo"
            ></img>
            <div className="imagine_text">imagine.io</div>
          </>
        </div>
      </>
    );
  };

  const loadedImage = (e) => {
    hideLoader();
    setOuterLoader(false);
  };

  const hotspot = () => {
    return (
      <div className="hotspot-dot">
        {hobspotLabel?.length > 0 &&
          hobspotLabel?.map((label, index) => {
            return (
              <React.Fragment key={index}>
                <span
                  {...(index === 0 && { ref: hotspotTooltipTarget })}
                  className={`${reverse ? "reverse-color" : ""} ${
                    selectedHubspot?.id === label?.id ? "active" : ""
                  }`}
                  style={hubspotImagePosition?.[currentFrame]?.style?.[index]}
                  onMouseEnter={() => setShowDetails(label)}
                  onMouseLeave={() =>
                    selectedHubspot?.id !== label?.id && setShowDetails(null)
                  }
                  onClick={() => setSelectedHubspot(label)}
                  onTouchStart={() => setSelectedHubspot(label)}
                >
                  {(showDetails === label ||
                    selectedHubspot?.id === label?.id) && (
                    <span
                      onMouseEnter={() => setShowDetails(label)}
                      onMouseLeave={() =>
                        selectedHubspot?.id !== label?.id &&
                        setShowDetails(null)
                      }
                      onClick={() => setSelectedHubspot(label)}
                      className={`applyed ${
                        +hubspotImagePosition?.[currentFrame]?.style?.[
                          index
                        ]?.left.replace("%", "") > 70
                          ? "position-left"
                          : ""
                      }`}
                    >
                      <span
                        style={{
                          backgroundColor:
                            appliedHubSpot?.[label?.id]?.colorCode || "#ddd",
                          backgroundImage: `url(${
                            appliedHubSpot?.[label?.id]?.thumb
                          })`,
                        }}
                        className="pickColor"
                      />
                      <span>
                        {" "}
                        {appliedHubSpot?.[label?.id]?.name?.replace(
                          appliedHubSpot?.[label?.id]?.code,
                          ""
                        )}{" "}
                        <span> {appliedHubSpot?.[label?.id]?.code}</span>
                      </span>
                    </span>
                  )}
                </span>

                {index === 0 && (
                  <Overlay
                    target={hotspotTooltipTarget?.current}
                    show={showTooltips.hotspotTooltip}
                    placement="right"
                    key="overlay"
                  >
                    {(props) => (
                      <Tooltip {...props}>
                        Tap on a hotspot to apply selected wood-finish.
                        <BigButton
                          variant="link"
                          className="ms-auto"
                          onClick={() => {
                            setShowTooltips({
                              ...showTooltips,
                              hotspotTooltip: false,
                            });
                            setLocalStorage(HOTSPOT_TOOLTIP_KEY, false);
                          }}
                        >
                          Got it
                        </BigButton>
                      </Tooltip>
                    )}
                  </Overlay>
                )}
              </React.Fragment>
            );
          })}
      </div>
    );
  };

  const getRelativeComponents = () => {
    return (
      <>
        {fullScreen ? (
          <div
            onClick={() => setFullScreen(!fullScreen)}
            className="close-full-screen"
          >
            <Close />
          </div>
        ) : (
          <>
            {!zoom && isImageViewer && leftRightIcon()}
            {/* {PoweredByIcon()} */}
            {VisibleToggleIcon()}
            {fullScreenIcon()}
            {visible && hotspot()}
          </>
        )}
      </>
    );
  };

  const getLeftSideContentImageConf = (isFullScreen = false) => {
    return (
      <>
        {!!handleFilterAllImage()?.length && (
          <div
            className={`image-view ${fullScreen ? "fullScreenImage" : ""} ${
              isLoading ? "blur-img" : ""
            } `}
          >
            <img src={handleFilterAllImage()[currentFrame]?.image_low} />
            {!outerLoader && getRelativeComponents()}
            {isLoading && (
              <div className="w-100 h-100 d-flex position-absolute justify-content-center align-items-center loader-parent">
                <Loader loading={true} text="Applying Selection" color="#fff" />
              </div>
            )}
          </div>
        )}
      </>
    );
  };

  const handleSelectShadeType = (data) => {
    if (data?.value === finishShadeType?.value) {
      setFinishShadeType(null);
    } else {
      setFinishShadeType(data);
    }
  };

  const getThemeOtherThemes = (str, isUnityRight = false) => {
    return (
      <Row
        className={`h-100 justify-content-center ${
          fullScreen ? "full-screen-view" : ""
        }`}
      >
        <Col
          xxl={isFinalise ? 12 : 9}
          lg={8}
          sm={7}
          xs={12}
          className={`flex-fill d-flex align-items-center h-100 image-container-wrapper ${
            !isFinalise && "image-container"
          } ${
            isFinalise
              ? "justify-content-center"
              : str === "default"
              ? "justify-content-end"
              : isUnityRight
              ? "justify-content-start"
              : "justify-content-end"
          }`}
          ref={outerContainerRef}
        >
          <div className={`w-100 h-100 d-flex flex-column`}>
            {!fullScreen && (
              <div className="d-flex justify-content-between align-items-start mb-3">
                <h6 className="fw-bold d-flex justify-content-center flex-column h-100">
                  Wood-Finish Visualizer
                </h6>
                {/* // for testing purpose */}
                <button
                  className="d-none"
                  onClick={() =>
                    downloadCurrentImage({ data: { downloadCurrentImg: true } })
                  }
                >
                  Download
                </button>
                <Dropdown
                  label="Select Room"
                  options={ROOM_LIST}
                  placeHolder="Select Room"
                  value={dropdownOptions?.room}
                  getSelectedValue={(e,isSelect) => {
                    setDropdownOptions({
                      ...dropdownOptions,
                      room: e,
                    });
                    if(isSelect){
                      trackDropdownAndRadioFilter({
                        ...dropdownOptions,
                        room: e,
                        finishType: FINISH_TYPE_LIST[1],
                        radioFinish: GLOSS_FINISH,
                      });
                    }
                  }}
                />
              </div>
            )}
            {getLeftSideContentImageConf()}
          </div>
        </Col>
        <Col
          xxl={3}
          lg={4}
          sm={5}
          xs={12}
          className={`right-content-height mt-4 mt-sm-0`}
        >
          <div className="w-100 left-side-menu">
            <div className="color-filter mb-3">
              <Dropdown
                label="Select Finish Type"
                options={FINISH_TYPE_LIST}
                placeHolder="Select Finish"
                value={dropdownOptions?.finishType}
                getSelectedValue={(e,isSelect) => {
                  setDropdownOptions({
                    ...dropdownOptions,
                    finishType: e,
                  });
                  if(isSelect){
                      trackDropdownAndRadioFilter({
                      ...dropdownOptions,
                      finishType: e,
                      radioFinish: finishType,
                    });
                  }
                }}
              />
              <div className="radio-group d-flex">
                {FINISH_TYPE_OPTION.map((data, i) => {
                  return (
                    <Radio
                      checked={finishType === data?.value ? finishType : ""}
                      label={data?.label}
                      key={i}
                      name="group1"
                      id={data?.value}
                      onClick={() => {
                        if (!isLoading) {
                          setFinishType(data?.value);
                          trackDropdownAndRadioFilter({
                            ...dropdownOptions,
                            radioFinish: data?.value,
                          });
                        }
                      }}
                      onChange={() => {}}
                    />
                  );
                })}
              </div>
            </div>
            <div className="color-container">
              {!hideShadeType && (
                <>
                  <div className="color-shade-type">
                    <ul>
                      {FINISH_COLOR_SHADE_OPTION.map((shade, i) => {
                        return (
                          <li
                            className="cursor-pointer"
                            key={i}
                            onClick={() => handleSelectShadeType(shade)}
                          >
                            <div
                              className={`color-box ${
                                finishShadeType?.value === shade?.value
                                  ? "active"
                                  : ""
                              }`}
                              style={{ backgroundColor: shade?.color }}
                            />
                            {shade?.label}
                          </li>
                        );
                      })}
                    </ul>
                    <Help />
                  </div>
                </>
              )}
              <div
                className={`color-option-list ${hideShadeType ? "ps-0" : ""} ${
                  isTestConfig ? "removeMaxHeight" : ""
                }`}
              >
                <ul>
                  {filterColorOption()?.map((color, i) => {
                    return (
                      <li
                        key={i}
                        onClick={() => {
                          if (!isLoading) {
                            window.$mergeAPI = true;
                            trackSwatches(color);
                            setAppliedHubSpot({
                              ...appliedHubSpot,
                              [selectedHubspot?.id]: color,
                            });
                          }
                        }}
                      >
                        <div
                          className={`color-box ${
                            appliedHubSpot[color?.hubspotLabelId]?.id ===
                            color?.id
                              ? "selected"
                              : ""
                          }`}
                          style={{
                            backgroundColor: color?.colorCode,
                            backgroundImage: `url(${color?.thumb})`,
                          }}
                        >
                          <div className="color-info">
                            <p title={color?.name}>
                              {color?.name}{" "}
                              {color?.code && <p>{color?.code}</p>}
                            </p>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                {hideShadeType && <Help className="mt-2 text-start" />}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    );
  };

  const getYourTheme = () => {
    return getThemeOtherThemes("default");
  };

  return (
    <>
      <div className={`config-viewer bg-white w-100 h-100 p-3`}>
        {getYourTheme()}
      </div>
      {outerLoader && (
        <Loader
          className="bg-white"
          zIndex={1000}
          position="fixed"
          loading={true}
        />
      )}
    </>
  );
};

export default ImageViewer;
