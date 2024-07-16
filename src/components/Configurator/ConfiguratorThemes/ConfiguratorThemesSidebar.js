import cx from "classnames";
import styles from "./ConfiguratorThemes.module.scss";
import doubleHem from "../../../assets/images/kegworkDrinkRail/DoubleHem.JPG";
import rectangle from "../../../assets/images/kegworkDrinkRail/Rectangle.JPG";
import scupper from "../../../assets/images/kegworkDrinkRail/Scupper.JPG";
import sloped from "../../../assets/images/kegworkDrinkRail/Sloped.JPG";
import squire from "../../../assets/images/kegworkDrinkRail/Square.JPG";
import standard from "../../../assets/images/kegworkDrinkRail/standardTray.png";
import noTray from "../../../assets/images/kegworkDrinkRail/noTray.png";
import circleOneAndHalfInch from "../../../assets/images/KegworkFootRail/profile_1_5inch_OD.jpg";
import circleTwoInch from "../../../assets/images/KegworkFootRail/profile_2_inch_OD.jpg";
import squareOneAndHalfInch from "../../../assets/images/KegworkFootRail/profile_1_5_Square.jpg";
import NoImage from "../../../assets/images/NoImage.png";
import { useState, useEffect } from "react";
import { ConfiguratorThemeOptions } from "./ConfiguratorThemeOptions";
import { profileData } from "../../../helpers/viewerHelper";
import { Accordion } from "react-bootstrap";
import { redirectURL1 } from "../../../helpers/configuratorInfo1";
export const ConfiguratorThemesSidebar = ({
  scenePassed,
  allLabels,
  passDataToViewer,
  setNewScene,
  allScenes,
  setLabel,
  localLayoutData,
  localProfileData,
  localSceneData,
  selectedLayoutData,
  selectedProfileData,
  selectedDripTrayStyle,
  openendLabel,
  selectProfile,
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
  const [showScreen, setShowScreen] = useState("list");
  const [selectedList, setSelectedList] = useState();
  const [listLabels, setListLabels] = useState([]);

  useEffect(() => {
    if (allScenes?.length && allLabels?.length) {
      let allListLabels = ["layout", "profile"];
      allLabels.map((lb) => allListLabels.push(lb.name));
      allListLabels = allListLabels.filter(function (item, pos) {
        return allListLabels.indexOf(item) == pos;
      });
      setListLabels(allListLabels);
    }
  }, [allScenes, allLabels]);

  const selectListOption = (str, id) => {
    setSelectedList(str);
    setShowScreen("optionsList");
    openendLabel(id);
  };

  const pressedBack = () => {
    setSelectedList(null);
    setShowScreen("list");
    openendLabel(null);
  };
  const getOptionImageAndText = (str, label) => {
    let option = {};
    if (allLabels?.length) {
      let currentLabel = allLabels.find(
        (previewLabel) => previewLabel.id === label.id
      );
      if (currentLabel.selectedTexture) {
        option = currentLabel.selectedTexture;
      } else if (currentLabel?.textures?.length) {
        option = currentLabel?.textures[0];
      }
    }
    if (str === "img") {
      return (
        <>
          {!option?.thumb && option?.color_code ? (
            <div className={styles.imgContainer}>
              <div style={{ background: option.color_code, padding: 35 }}></div>
            </div>
          ) : (
            <div className={styles.imgContainer}>
              <img
                src={option?.thumb}
                height={70}
                width={70}
                alt="dummy"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = NoImage;
                }}
              />
            </div>
          )}
        </>
      );
    } else {
      return (
        <div
          className={styles.subHead}
          style={{ fontSize: 12, textAlign: "left" }}
        >
          {option?.display_name}
        </div>
      );
    }
  };

  const handleImageShow = (key, data) => {
    const { thumb } = data || {};
    switch (key) {
      case "Rectangle":
        return rectangle;
      case "Square":
        return squire;
      case "Double Hem":
        return doubleHem;
      case "Sloped":
        return sloped;
      case "Scupper":
        return scupper;
      case "Standard":
        return standard;
      case "No Drip Trays":
        return noTray;
      case `Circle 1.5" OD`:
        return circleOneAndHalfInch;
      case `Circle 2" OD`:
        return circleTwoInch;
      case `Square 1.5"`:
        return squareOneAndHalfInch;
      default:
        return thumb || NoImage;
    }
  };

  const openNewPage = () => {
    const finishLabel = allLabels?.find(
      ({ name }) => name?.toLowerCase() === "finish"
    );
    if (!allLabels?.length || !finishLabel) {
      return null;
    }
    const currentLabel = allLabels.find(
      (previewLabel) => previewLabel?.id === finishLabel?.id
    );
    const option =
      currentLabel?.selectedTexture ||
      (currentLabel?.textures?.length && currentLabel.textures[0]) ||
      {};
    const selectedURL = redirectURL1?.find(
      ({ name }) => name === option?.display_name
    )?.url;
    return selectedURL || null;
  };

  return (
    <aside className={cx(styles.root, styles.previewContainer)}>
      <div className={cx("hidden-scroll")}>
        {/* <div className={styles.headSubHead}>
                    <div style={{ display: 'block !important' }}>
                        <div className={styles.heading}>
                            CUSTOMISE YOUR BAR RAIL
                        </div>
                        <div className={styles.subHead}>
                            Choose from the range of options
                        </div>
                    </div>
                </div> */}
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header onClick={() => selectListOption("layout")}>
              <div className={styles.labelOption}>
                <div className={styles.imgContainer}>
                  <img
                    src={selectedLayoutData?.thumb}
                    height={70}
                    width={70}
                    alt="dummy"
                  />
                </div>
                <div className={styles.textContainer}>
                  <div style={{ display: "block !important" }}>
                    <div
                      className={styles.heading}
                      style={{ fontSize: 11, textAlign: "left" }}
                    >
                      Layout
                    </div>
                    <div className={styles.subHead} style={{ fontSize: 12 }}>
                      {selectedLayoutData?.name}
                    </div>
                  </div>
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <div className={cx("hidden-scroll")}>
                <ConfiguratorThemeOptions
                  selectedList={selectedList}
                  allLabels={allLabels}
                  allScenes={allScenes}
                  scenePassed={scenePassed}
                  pressedBackBtn={() => pressedBack()}
                  profileData={profileData}
                  selectedProfile={selectedProfileData}
                  setNewScene={(data) => setNewScene(data)}
                  setNewLabels={(data) => passDataToViewer(data)}
                  listLabels={listLabels}
                  setNewList={(data) => setSelectedList(data)}
                  setLabel={setLabel}
                  localLayoutData={localLayoutData}
                  localProfileData={localProfileData}
                  selectedLayoutData={selectedLayoutData}
                  selectedProfileData={selectedProfileData}
                  selectedDripTrayStyle={selectedDripTrayStyle}
                  selectProfile={selectProfile}
                  selectDripTrayStyle={selectDripTrayStyle}
                  localBracketData={localBracketData}
                  localEndCapData={localEndCapData}
                  localElbowData={localElbowData}
                  selectedBracketData={selectedBracketData}
                  selectedEndcapData={selectedEndcapData}
                  selectedElbowData={selectedElbowData}
                  selectBracket={selectBracket}
                  selectEndcap={selectEndcap}
                  selectElbow={selectElbow}
                />
              </div>
            </Accordion.Body>
          </Accordion.Item>
          {localProfileData?.length > 1 && (
            <Accordion.Item
              eventKey="1"
              onClick={() => selectListOption("profile")}
            >
              <Accordion.Header>
                {localProfileData?.length > 1 && (
                  <div className={styles.labelOption}>
                    <div className={styles.imgContainer}>
                      <img
                        src={handleImageShow(selectedProfileData?.name)}
                        height={70}
                        width={70}
                        alt="dummy"
                      />
                    </div>
                    <div className={styles.textContainer}>
                      <div style={{ display: "block !important" }}>
                        <div
                          className={styles.heading}
                          style={{ fontSize: 11, textAlign: "left" }}
                        >
                          Profile
                        </div>
                        <div
                          className={styles.subHead}
                          style={{ fontSize: 12 }}
                        >
                          {selectedProfileData?.name}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Accordion.Header>
              <Accordion.Body>
                <div className={cx("hidden-scroll")}>
                  <ConfiguratorThemeOptions
                    selectedList={selectedList}
                    allLabels={allLabels}
                    allScenes={allScenes}
                    scenePassed={scenePassed}
                    pressedBackBtn={() => pressedBack()}
                    profileData={profileData}
                    selectedProfile={selectedProfileData}
                    setNewScene={(data) => setNewScene(data)}
                    setNewLabels={(data) => passDataToViewer(data)}
                    listLabels={listLabels}
                    setNewList={(data) => setSelectedList(data)}
                    setLabel={setLabel}
                    localLayoutData={localLayoutData}
                    localProfileData={localProfileData}
                    selectedLayoutData={selectedLayoutData}
                    selectedProfileData={selectedProfileData}
                    selectedDripTrayStyle={selectedDripTrayStyle}
                    selectProfile={selectProfile}
                    selectDripTrayStyle={selectDripTrayStyle}
                    localBracketData={localBracketData}
                    localEndCapData={localEndCapData}
                    localElbowData={localElbowData}
                    selectedBracketData={selectedBracketData}
                    selectedEndcapData={selectedEndcapData}
                    selectedElbowData={selectedElbowData}
                    selectBracket={selectBracket}
                    selectEndcap={selectEndcap}
                    selectElbow={selectElbow}
                  />
                </div>
              </Accordion.Body>
            </Accordion.Item>
          )}

          {localBracketData?.length > 0 && (
            <Accordion.Item
              eventKey="bracket"
              onClick={() => selectListOption("bracket")}
            >
              <Accordion.Header>
                {localBracketData?.length > 0 && (
                  <div className={styles.labelOption}>
                    <div className={styles.imgContainer}>
                      <img
                        src={handleImageShow(
                          selectedBracketData?.name,
                          selectedBracketData
                        )}
                        height={70}
                        width={70}
                        alt="dummy"
                      />
                    </div>
                    <div className={styles.textContainer}>
                      <div style={{ display: "block !important" }}>
                        <div
                          className={styles.heading}
                          style={{ fontSize: 11, textAlign: "left" }}
                        >
                          Bracket
                        </div>
                        <div
                          className={styles.subHead}
                          style={{ fontSize: 12 }}
                        >
                          {selectedBracketData?.name}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Accordion.Header>
              <Accordion.Body>
                <div className={cx("hidden-scroll")}>
                  <ConfiguratorThemeOptions
                    selectedList={selectedList}
                    allLabels={allLabels}
                    allScenes={allScenes}
                    scenePassed={scenePassed}
                    pressedBackBtn={() => pressedBack()}
                    profileData={profileData}
                    selectedProfile={selectedProfileData}
                    setNewScene={(data) => setNewScene(data)}
                    setNewLabels={(data) => passDataToViewer(data)}
                    listLabels={listLabels}
                    setNewList={(data) => setSelectedList(data)}
                    setLabel={setLabel}
                    localLayoutData={localLayoutData}
                    localProfileData={localProfileData}
                    selectedLayoutData={selectedLayoutData}
                    selectedProfileData={selectedProfileData}
                    selectedDripTrayStyle={selectedDripTrayStyle}
                    selectProfile={selectProfile}
                    selectDripTrayStyle={selectDripTrayStyle}
                    localBracketData={localBracketData}
                    localEndCapData={localEndCapData}
                    localElbowData={localElbowData}
                    selectedBracketData={selectedBracketData}
                    selectedEndcapData={selectedEndcapData}
                    selectedElbowData={selectedElbowData}
                    selectBracket={selectBracket}
                    selectEndcap={selectEndcap}
                    selectElbow={selectElbow}
                  />
                </div>
              </Accordion.Body>
            </Accordion.Item>
          )}

          {localEndCapData?.length > 0 && (
            <Accordion.Item
              eventKey="endcap"
              onClick={() => selectListOption("endcap")}
            >
              <Accordion.Header>
                {localEndCapData?.length > 0 && (
                  <div className={styles.labelOption}>
                    <div className={styles.imgContainer}>
                      <img
                        src={handleImageShow(
                          selectedEndcapData?.name,
                          selectedEndcapData
                        )}
                        height={70}
                        width={70}
                        alt="dummy"
                      />
                    </div>
                    <div className={styles.textContainer}>
                      <div style={{ display: "block !important" }}>
                        <div
                          className={styles.heading}
                          style={{ fontSize: 11, textAlign: "left" }}
                        >
                          Endcap
                        </div>
                        <div
                          className={styles.subHead}
                          style={{ fontSize: 12 }}
                        >
                          {selectedEndcapData?.name}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Accordion.Header>
              <Accordion.Body>
                <div className={cx("hidden-scroll")}>
                  <ConfiguratorThemeOptions
                    selectedList={selectedList}
                    allLabels={allLabels}
                    allScenes={allScenes}
                    scenePassed={scenePassed}
                    pressedBackBtn={() => pressedBack()}
                    profileData={profileData}
                    selectedProfile={selectedProfileData}
                    setNewScene={(data) => setNewScene(data)}
                    setNewLabels={(data) => passDataToViewer(data)}
                    listLabels={listLabels}
                    setNewList={(data) => setSelectedList(data)}
                    setLabel={setLabel}
                    localLayoutData={localLayoutData}
                    localProfileData={localProfileData}
                    selectedLayoutData={selectedLayoutData}
                    selectedProfileData={selectedProfileData}
                    selectedDripTrayStyle={selectedDripTrayStyle}
                    selectProfile={selectProfile}
                    selectDripTrayStyle={selectDripTrayStyle}
                    localBracketData={localBracketData}
                    localEndCapData={localEndCapData}
                    localElbowData={localElbowData}
                    selectedBracketData={selectedBracketData}
                    selectedEndcapData={selectedEndcapData}
                    selectedElbowData={selectedElbowData}
                    selectBracket={selectBracket}
                    selectEndcap={selectEndcap}
                    selectElbow={selectElbow}
                  />
                </div>
              </Accordion.Body>
            </Accordion.Item>
          )}

          {localElbowData?.length > 0 && (
            <Accordion.Item
              eventKey="elbow"
              onClick={() => selectListOption("elbow")}
            >
              <Accordion.Header>
                {localProfileData?.length > 0 && (
                  <div className={styles.labelOption}>
                    <div className={styles.imgContainer}>
                      <img
                        src={handleImageShow(
                          selectedElbowData?.name,
                          selectedElbowData
                        )}
                        height={70}
                        width={70}
                        alt="dummy"
                      />
                    </div>
                    <div className={styles.textContainer}>
                      <div style={{ display: "block !important" }}>
                        <div
                          className={styles.heading}
                          style={{ fontSize: 11, textAlign: "left" }}
                        >
                          Elbow
                        </div>
                        <div
                          className={styles.subHead}
                          style={{ fontSize: 12 }}
                        >
                          {selectedElbowData?.name}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Accordion.Header>
              <Accordion.Body>
                <div className={cx("hidden-scroll")}>
                  <ConfiguratorThemeOptions
                    selectedList={selectedList}
                    allLabels={allLabels}
                    allScenes={allScenes}
                    scenePassed={scenePassed}
                    pressedBackBtn={() => pressedBack()}
                    profileData={profileData}
                    selectedProfile={selectedProfileData}
                    setNewScene={(data) => setNewScene(data)}
                    setNewLabels={(data) => passDataToViewer(data)}
                    listLabels={listLabels}
                    setNewList={(data) => setSelectedList(data)}
                    setLabel={setLabel}
                    localLayoutData={localLayoutData}
                    localProfileData={localProfileData}
                    selectedLayoutData={selectedLayoutData}
                    selectedProfileData={selectedProfileData}
                    selectedDripTrayStyle={selectedDripTrayStyle}
                    selectProfile={selectProfile}
                    selectDripTrayStyle={selectDripTrayStyle}
                    localBracketData={localBracketData}
                    localEndCapData={localEndCapData}
                    localElbowData={localElbowData}
                    selectedBracketData={selectedBracketData}
                    selectedEndcapData={selectedEndcapData}
                    selectedElbowData={selectedElbowData}
                    selectBracket={selectBracket}
                    selectEndcap={selectEndcap}
                    selectElbow={selectElbow}
                  />
                </div>
              </Accordion.Body>
            </Accordion.Item>
          )}

          {localDipTrayStyle?.length > 0 && (
            <Accordion.Item
              eventKey="trayStyle"
              onClick={() => selectListOption("dripStyle")}
            >
              <Accordion.Header>
                {localDipTrayStyle?.length > 0 && (
                  <div className={styles.labelOption}>
                    <div className={styles.imgContainer}>
                      <img
                        src={handleImageShow(selectedDripTrayStyle?.name)}
                        height={70}
                        width={70}
                        alt="dummy"
                      />
                    </div>
                    <div className={styles.textContainer}>
                      <div style={{ display: "block !important" }}>
                        <div
                          className={styles.heading}
                          style={{ fontSize: 11, textAlign: "left" }}
                        >
                          Drip Tray Style
                        </div>
                        <div
                          className={styles.subHead}
                          style={{ fontSize: 12 }}
                        >
                          {selectedDripTrayStyle?.name}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Accordion.Header>
              <Accordion.Body>
                <div className={cx("hidden-scroll")}>
                  <ConfiguratorThemeOptions
                    selectedList={selectedList}
                    allLabels={allLabels}
                    allScenes={allScenes}
                    scenePassed={scenePassed}
                    pressedBackBtn={() => pressedBack()}
                    profileData={profileData}
                    selectedProfile={selectedProfileData}
                    setNewScene={(data) => setNewScene(data)}
                    setNewLabels={(data) => passDataToViewer(data)}
                    listLabels={listLabels}
                    setNewList={(data) => setSelectedList(data)}
                    setLabel={setLabel}
                    localLayoutData={localLayoutData}
                    localProfileData={localProfileData}
                    selectedLayoutData={selectedLayoutData}
                    selectedProfileData={selectedProfileData}
                    selectedDripTrayStyle={selectedDripTrayStyle}
                    selectProfile={selectProfile}
                    localDipTrayStyle={localDipTrayStyle}
                    selectDripTrayStyle={selectDripTrayStyle}
                    localBracketData={localBracketData}
                    localEndCapData={localEndCapData}
                    localElbowData={localElbowData}
                    selectedBracketData={selectedBracketData}
                    selectedEndcapData={selectedEndcapData}
                    selectedElbowData={selectedElbowData}
                    selectBracket={selectBracket}
                    selectEndcap={selectEndcap}
                    selectElbow={selectElbow}
                  />
                </div>
              </Accordion.Body>
            </Accordion.Item>
          )}
          {!!allLabels?.length &&
            allLabels.map((label, index) => {
              return (
                <Accordion.Item eventKey={index + 3}>
                  <Accordion.Header
                    onClick={() => selectListOption(label.name, label.id)}
                  >
                    <div className={styles.labelOption} key={index}>
                      {getOptionImageAndText("img", label)}
                      <div className={styles.textContainer}>
                        <div style={{ display: "block !important" }}>
                          <div
                            className={styles.heading}
                            style={{
                              fontSize: 11,
                              textAlign: "left",
                              textWrap: "wrap",
                            }}
                          >
                            {label.name}
                          </div>
                          {getOptionImageAndText("text", label)}
                        </div>
                      </div>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className={cx("hidden-scroll")}>
                      <ConfiguratorThemeOptions
                        selectedList={selectedList}
                        allLabels={allLabels}
                        allScenes={allScenes}
                        scenePassed={scenePassed}
                        pressedBackBtn={() => pressedBack()}
                        profileData={profileData}
                        selectedProfile={selectedProfileData}
                        setNewScene={(data) => setNewScene(data)}
                        setNewLabels={(data) => passDataToViewer(data)}
                        listLabels={listLabels}
                        setNewList={(data) => setSelectedList(data)}
                        setLabel={setLabel}
                        localLayoutData={localLayoutData}
                        localProfileData={localProfileData}
                        selectedLayoutData={selectedLayoutData}
                        selectedProfileData={selectedProfileData}
                        selectedDripTrayStyle={selectedDripTrayStyle}
                        selectProfile={selectProfile}
                        selectDripTrayStyle={selectDripTrayStyle}
                        localBracketData={localBracketData}
                        localEndCapData={localEndCapData}
                        localElbowData={localElbowData}
                        selectedBracketData={selectedBracketData}
                        selectedEndcapData={selectedEndcapData}
                        selectedElbowData={selectedElbowData}
                        selectBracket={selectBracket}
                        selectEndcap={selectEndcap}
                        selectElbow={selectElbow}
                      />
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
        </Accordion>
      </div>
      {openNewPage() && (
        <div className={styles.shopBtn}>
          <button>
            <a href={openNewPage()} target="_blank">
              SHOP THIS FINISH
            </a>
          </button>
        </div>
      )}
    </aside>
  );
};
