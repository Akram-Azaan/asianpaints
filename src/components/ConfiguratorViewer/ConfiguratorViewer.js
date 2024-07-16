import React, { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import ImageViewer from "../../screens/ImageViewer";
import { getAllPublicData } from "../../api/configuratorApi";
import styles from "./ConfiguratorViewer.module.scss";

import {
  configuratorData1,
  layoutData1,
  profileData1,
  sceneData1,
  hobspotLabel1,
  colorOptionList1,
  imageHubspotPosition1,
} from "../../helpers/configuratorInfo1";
import {
  configuratorData2,
  layoutData2,
  profileData2,
  sceneData2,
  hobspotLabel2,
  colorOptionList2,
  imageHubspotPosition2,
} from "../../helpers/configuratorInfo2";
import {
  configuratorData3,
  layoutData3,
  profileData3,
  sceneData3,
  hobspotLabel3,
  colorOptionList3,
  imageHubspotPosition3,
} from "../../helpers/configuratorInfo3";
import {
  configuratorData4,
  layoutData4,
  profileData4,
  sceneData4,
  hobspotLabel4,
  colorOptionList4,
  imageHubspotPosition4,
} from "../../helpers/configuratorInfo4";
import {
  BEDROOM_ROOM,
  DINNING_ROOM,
  FINISH_TYPE_LIST,
  GLOSS_FINISH,
  KITCHEN_ROOM,
  LIVING_ROOM,
  NEUTRAL,
  ROOM_LIST,
} from "../../constants/constants";

const ConfiguratorViewer = () => {
  const [loader, setLoader] = useState(false);
  const [allStoreList, setAllStoreList] = useState([]);
  const [currentSelectedStore, setCurrentSelectedStore] = useState({});
  const [token, setToken] = useState(null);
  const [isRender, setIsRender] = useState(false);
  const [localConfiguratorData, setLocalConfiguratorData] = useState();
  const [localLayoutData, setLocalLayoutData] = useState();
  const [localProfileData, setLocalProfileData] = useState();
  const [localSceneData, setLocalSceneData] = useState();
  const [localImageData, setLocalImageData] = useState();
  const [hobspotLabel, setHobspotLabel] = useState();
  const [localColorOptionList, setLocalColorOptionList] = useState();
  const [dropdownOptions, setDropdownOptions] = useState({
    room: ROOM_LIST?.[0],
    finishType: FINISH_TYPE_LIST?.[1],
  });
  const [selectedHubspot, setSelectedHubspot] = useState();
  const [appliedHubSpot, setAppliedHubSpot] = useState({});
  const [hubspotImagePosition, setHubspotImagePosition] = useState([]);

  useEffect(() => {
    setDropdownOptions({
      ...dropdownOptions,
      finishType: FINISH_TYPE_LIST?.[1],
    });
    updateDataForModelIdLocal(dropdownOptions?.room?.value);
  }, [dropdownOptions?.room?.value]);

  useEffect(() => {
    if (hobspotLabel?.length) {
      let defaultSelect = {};
      hobspotLabel?.map((list) => {
        defaultSelect[list?.id] =
          localColorOptionList?.find(
            ({ hubspotLabelId, finishColorType, finishType, shadeType }) =>
              finishColorType === dropdownOptions?.finishType?.value &&
              hubspotLabelId === list?.id &&
              finishType === GLOSS_FINISH &&
              shadeType === NEUTRAL
          ) || {};
      });
      setAppliedHubSpot(defaultSelect);
    } else {
      setAppliedHubSpot({});
    }
  }, [hobspotLabel, localColorOptionList]);

  useEffect(() => {
    if (localConfiguratorData?.tokenUrl) {
      setIsRender(checkIfShowRenderData());
      getAllDataFromModelId(checkIfShowRenderData());
    }
  }, [localConfiguratorData]);

  const updateDataForModelIdLocal = (modelId) => {
    switch (modelId) {
      case DINNING_ROOM: {
        setLocalConfiguratorData(configuratorData1);
        setLocalLayoutData(layoutData1);
        setLocalProfileData(profileData1);
        setLocalSceneData(sceneData1);
        setLocalColorOptionList(colorOptionList1);
        setHobspotLabel(hobspotLabel1);
        setSelectedHubspot(hobspotLabel1?.[0]);
        setHubspotImagePosition(imageHubspotPosition1);
        break;
      }
      case KITCHEN_ROOM: {
        setLocalConfiguratorData(configuratorData2);
        setLocalLayoutData(layoutData2);
        setLocalProfileData(profileData2);
        setLocalSceneData(sceneData2);
        setLocalColorOptionList(colorOptionList2);
        setHobspotLabel(hobspotLabel2);
        setSelectedHubspot(hobspotLabel2?.[0]);
        setHubspotImagePosition(imageHubspotPosition2);
        break;
      }
      case LIVING_ROOM: {
        setLocalConfiguratorData(configuratorData3);
        setLocalLayoutData(layoutData3);
        setLocalProfileData(profileData3);
        setLocalSceneData(sceneData3);
        setLocalColorOptionList(colorOptionList3);
        setHobspotLabel(hobspotLabel3);
        setSelectedHubspot(hobspotLabel3?.[2] || hobspotLabel3?.[0]);
        setHubspotImagePosition(imageHubspotPosition3);
        break;
      }
      case BEDROOM_ROOM: {
        setLocalConfiguratorData(configuratorData4);
        setLocalLayoutData(layoutData4);
        setLocalProfileData(profileData4);
        setLocalSceneData(sceneData4);
        setLocalColorOptionList(colorOptionList4);
        setHobspotLabel(hobspotLabel4);
        setSelectedHubspot(hobspotLabel4?.[0]);
        setHubspotImagePosition(imageHubspotPosition4);
        break;
      }
      default: {
        setLocalConfiguratorData(configuratorData1);
        setLocalLayoutData(layoutData1);
        setLocalProfileData(profileData1);
        setLocalSceneData(sceneData1);
        setLocalColorOptionList(colorOptionList1);
        setHobspotLabel(hobspotLabel1);
        setSelectedHubspot(hobspotLabel1?.[0]);
        setHubspotImagePosition(imageHubspotPosition1);
      }
    }
  };

  const checkIfShowRenderData = () => {
    return true;
  };

  const getAllDataFromModelId = async (isRender) => {
    setLoader(true);
    let allData = await getAllPublicData({
      newModelIds: localConfiguratorData?.tokenUrl,
      isRender,
      isOpenedFromAdminPanel: false,
    });
    const rawData = JSON.parse(JSON.stringify(allData));
    if (allData?.results?.length) {
      setAllStoreList(allData?.results);
      setToken(rawData?.results?.[0]?.configurator?.token);
      setCurrentSelectedStore(allData?.results[0]);
    }
    setLoader(false);
  };

  return (
    <div className="h-100 w-100">
      <div
        className={`${styles.topDiv} ${false ? styles.calcHeight : "h-100"}`}
      >
        <div className="w-100 h-100">
          {!loader && (
            <ImageViewer
              isImageViewer={
                currentSelectedStore?.configurator?.config_type === "1"
              }
              dropdownOptions={dropdownOptions}
              setDropdownOptions={setDropdownOptions}
              selectedStoreLocal={currentSelectedStore}
              allStoreList={allStoreList}
              modelId={token}
              isRender={isRender}
              localLayoutData={localLayoutData}
              localImageData={localImageData}
              localProfileData={localProfileData}
              localSceneData={localSceneData}
              localColorOptionList={localColorOptionList}
              selectedHubspot={selectedHubspot}
              setSelectedHubspot={setSelectedHubspot}
              hobspotLabel={hobspotLabel}
              appliedHubSpot={appliedHubSpot}
              setAppliedHubSpot={setAppliedHubSpot}
              hubspotImagePosition={hubspotImagePosition}
            />
          )}
        </div>
      </div>
      {loader && (
        <Loader
          zIndex={1000}
          loading={true}
          className="bg-white"
          position="fixed"
        />
      )}
    </div>
  );
};

export default ConfiguratorViewer;
