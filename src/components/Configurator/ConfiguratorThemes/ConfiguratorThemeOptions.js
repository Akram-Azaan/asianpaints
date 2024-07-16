import { useEffect, useState } from "react";
import cx from "classnames";
import styles from "./ConfiguratorThemeOptions.module.scss";
// import Left from "../../../assets/images/Left.svg";
// import Right from "../../../assets/images/Right.svg";
import NoImage from "../../../assets/images/NoImage.png";
import { fetchMoreOptions } from "../../../helpers/viewerHelper";
import InfiniteScroll from "../../InfiniteScroll/InfiniteScroll";
import { useDispatch } from "react-redux";
// import {
//   getNextLabelPage,
//   selectSortedLabelOptions,
// } from "../../../redux/slicers/viewer.slicers";
// import { getAppState } from "../../../redux/store";

export const ConfiguratorThemeOptions = ({
  selectedList,
  allLabels,
  allScenes,
  scenePassed,
  pressedBackBtn,
  profileData,
  selectedProfile,
  selectProfile,
  setNewScene,
  setNewLabels,
  listLabels,
  setNewList,
  setLabel,
  localLayoutData,
  localProfileData,
  selectedLayoutData,
  selectedProfileData,
  selectedDripTrayStyle,
  localDipTrayStyle,
  selectDripTrayStyle,
  localBracketData,
  localEndCapData,
  localElbowData,
  selectedBracketData,
  selectedEndcapData,
  selectedElbowData,
  selectBracket,
  selectEndcap,
  selectElbow,
}) => {
  const [optionsToShow, setOptionsToShow] = useState([]);
  const [selectedOption, setSelectedOption] = useState();
  const [labelNextPage, setLabelNextPage] = useState();

  // let options = useSelector(selectSortedLabelOptions(label.id, { is_enable: true }));
  // const _labelNextPage = useSelector(getNextLabelPage(label.id));
  const dispatch = useDispatch();
  let apiUsed = null;
  let options;

  useEffect(() => {
    let currentLabelData = null;
    if (selectedList === "layout") {
      setOptionsToShow(localLayoutData);
      if (scenePassed?.id) {
        const opSelected = localLayoutData.find(
          (sc) => sc.id === selectedLayoutData.id
        );
        if (opSelected?.id) {
          setSelectedOption(opSelected);
        }
      }
    } else if (selectedList === "profile") {
      setOptionsToShow(localProfileData);
      setSelectedOption(selectedProfileData);
    } else if (selectedList === "dripStyle") {
      setOptionsToShow(localDipTrayStyle);
      setSelectedOption(selectedDripTrayStyle);
    } else if (selectedList === "bracket") {
      setOptionsToShow(localBracketData);
      setSelectedOption(selectedBracketData);
    } else if (selectedList === "endcap") {
      setOptionsToShow(localEndCapData);
      setSelectedOption(selectedEndcapData);
    } else if (selectedList === "elbow") {
      setOptionsToShow(localElbowData);
      setSelectedOption(selectedElbowData);
    } else {
      for (let i = 0; i < allLabels?.length; i++) {
        if (allLabels?.[i]?.name === selectedList) {
          currentLabelData = allLabels[i];
          setOptionsToShow(allLabels[i].textures);
          checkForSelectedOptionInLabel(allLabels[i]);
          break;
        }
      }
    }
  }, [
    selectedList,
    allLabels,
    allScenes,
    scenePassed,
    pressedBackBtn,
    profileData,
    selectedProfile,
    selectedDripTrayStyle,
    localBracketData,
    localEndCapData,
    localElbowData,
    selectedBracketData,
    selectedEndcapData,
    selectedElbowData,
  ]);

  const checkForSelectedOptionInLabel = (labelData) => {
    let currentLabel = labelData;
    if (currentLabel.selectedTexture) {
      setSelectedOption(currentLabel.selectedTexture);
    } else if (currentLabel?.textures?.length) {
      setSelectedOption(currentLabel?.textures[0]);
    }
  };

  //   const goBackScreen = () => {
  //     setOptionsToShow([]);
  //     setSelectedOption(null);
  //     pressedBackBtn();
  //   };

  const selectCurrentOption = (data) => {
    if (selectedList === "layout") {
      setNewScene(data);
    } else if (selectedList === "profile") {
      selectProfile(data);
    } else if (selectedList === "dripStyle") {
      selectDripTrayStyle(data);
    } else if (selectedList === "bracket") {
      selectBracket(data);
    } else if (selectedList === "endcap") {
      selectEndcap(data);
    } else if (selectedList === "elbow") {
      selectElbow(data);
    } else {
      let labelData;
      for (let i = 0; i < allLabels?.length; i++) {
        if (selectedList === allLabels[i].name) {
          labelData = allLabels[i];
          break;
        }
      }
      setNewLabels({ option: data, label: labelData?.id });
    }
  };

  const checkIfSelected = (data) => {
    const flag = selectedOption?.id === data?.id;
    return flag;
  };

  //   const goBack = () => {
  //     const index = listLabels.indexOf(selectedList);
  //     if (index > 0) {
  //       setNewList(listLabels[index - 1]);
  //     }
  //   };

  //   const goForward = () => {
  //     const index = listLabels.indexOf(selectedList);
  //     if (index < listLabels?.length - 1) {
  //       setNewList(listLabels[index + 1]);
  //     }
  //   };

  //   const getIndex = (data) => {
  //     return listLabels.indexOf(data) + 1;
  //   };

  const getOptionImage = (opData) => {
    return (
      <>
        {!opData?.thumb && opData?.color_code ? (
          <div className={styles.imgContainer}>
            <div
              style={{
                background: opData.color_code,
                padding: 30,
                borderRadius: 4,
              }}
            ></div>
          </div>
        ) : (
          <img
            src={opData.thumb}
            className={styles.opImg}
            alt="img"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = NoImage;
            }}
          />
        )}
      </>
    );
  };

  const fetchMoreData = () => {
    let labelData = allLabels.find((lb) => selectedList === lb.name);
    fetchMoreOptions(
      labelNextPage,
      dispatch,
      labelData,
      allLabels,
      setLabel,
      options,
      null,
      apiUsed,
      true
    );
  };

  return (
    <div>
      {/* <div className={styles.headSubHead}> */}
      {/* <div className={styles.imgContainer} onClick={() => goBackScreen()}>
                    <img src={Left} height={35} width={35} alt="left" />
                </div> */}
      {/* <div className={styles.imgContainer} onClick={() => goBack()}>
                    <img src={Left} height={35} width={35} alt="left" />
                </div> */}
      {/* <div className={styles.subHead} onClick={() => goBackScreen()}>
                    <div style={{ display: 'block' }}>
                        <div>{selectedList}</div>
                        <div style={{ color: '#9C9C9C' }}>{getIndex(selectedList)}/{listLabels?.length}</div>
                    </div>
                </div> */}
      {/* <div className={styles.imgContainer} onClick={() => goForward()}>
                    <img src={Right} height={35} width={35} alt="left" />
                </div> */}
      {/* </div> */}
      <InfiniteScroll
        dataLength={optionsToShow?.length}
        next={() => fetchMoreData()}
        hasMore={labelNextPage}
        loading={false}
        containerClassName="configurator-infinte-scroll-min-height-auto"
        hasChildren={true}
        loadingType={null}
        scrollableTarget="infinteScroll-previewpage-side-label-options"
      >
        <div className={styles.optionList}>
          {!!optionsToShow?.length &&
            optionsToShow.map((opData, index) => {
              return (
                <div
                  className={cx(
                    styles.labelOption,
                    checkIfSelected(opData) && styles.selected
                  )}
                  key={index}
                  onClick={() => selectCurrentOption(opData)}
                >
                  {getOptionImage(opData)}
                  <div
                    className={styles.textContainer}
                    title={opData.name || opData.display_name}
                  >
                    <div className={styles.tileName}>
                      {opData.name || opData.display_name}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </InfiniteScroll>
    </div>
  );
};
