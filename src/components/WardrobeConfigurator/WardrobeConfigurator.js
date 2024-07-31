import React, { useEffect, useState } from "react";
import WardrobeImageViewer from "./WardrobeImageViewer";
import {
  DOOR_LIST,
  HINGED_DOOR,
  SLIDING_DOOR,
  WARDROBE_TYPE_WITH_DIMENSIONS,
} from "../../constants/wardrobeConstants";
import { slidingConfiguratorData } from "../../helpers/slidingConfiguratorInfo";
import { hingedConfiguratorData } from "../../helpers/hingedConfiguratorInfo";
import { getAllPublicData } from "../../api/configuratorApi";
import Loader from "../../common/Loader";

const WardrobeConfigurator = () => {
  const [loader, setLoader] = useState(false);
  const [allStoreList, setAllStoreList] = useState([]);
  const [currentSelectedStore, setCurrentSelectedStore] = useState({});
  const [token, setToken] = useState(null);
  const [isRender, setIsRender] = useState(false);
  const [localConfiguratorData, setLocalConfiguratorData] = useState();
  const [doorPanelOptions, setDoorPanelOptions] = useState({
    door: DOOR_LIST?.[0].label,
    dimension: WARDROBE_TYPE_WITH_DIMENSIONS[0].dimensions[0].label,
  });

  useEffect(() => {
    setDoorPanelOptions({
      ...doorPanelOptions,
      dimension: WARDROBE_TYPE_WITH_DIMENSIONS[0].dimensions[0].label,
    });
    updateDataForModelIdLocal(doorPanelOptions?.door);
  }, [doorPanelOptions?.door]);

  useEffect(() => {
    if (localConfiguratorData?.tokenUrl) {
      setIsRender(checkIfShowRenderData());
      getAllDataFromModelId(checkIfShowRenderData());
    }
  }, [localConfiguratorData]);

  const updateDataForModelIdLocal = (modelId) => {
    switch (modelId) {
      case SLIDING_DOOR: {
        setLocalConfiguratorData(slidingConfiguratorData);
        break;
      }
      case HINGED_DOOR: {
        setLocalConfiguratorData(hingedConfiguratorData);
        break;
      }
      default: {
        setLocalConfiguratorData(slidingConfiguratorData);
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
    console.log(allData, "allData");
    if (allData?.results?.length) {
      // setAllStoreList(allData?.results);
      // setToken(rawData?.results?.[0]?.configurator?.token);
      // setCurrentSelectedStore(allData?.results[0]);
    }
    setLoader(false);
  };

  // console.log(localConfiguratorData, doorPanelOptions, "localConfiguratorData");

  return (
    <>
      {!loader && (
        <WardrobeImageViewer
          doorPanelOptions={doorPanelOptions}
          setDoorPanelOptions={setDoorPanelOptions}
        />
      )}
      {loader && (
        <Loader
          zIndex={1000}
          loading={true}
          className="bg-white"
          position="fixed"
        />
      )}
    </>
  );
};

export default WardrobeConfigurator;
