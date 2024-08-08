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
    dimension: WARDROBE_TYPE_WITH_DIMENSIONS[0].dimensions[0].size,
  });

  const getTokenUrl = (door, dimension) => {
    const doorType = WARDROBE_TYPE_WITH_DIMENSIONS.find(d => d.id === door);
    if (doorType) {
      const dimensionObj = doorType.dimensions.find(dim => dim.size === dimension);
      if (dimensionObj) {
        return dimensionObj;
      }
    }
    return null;
  };

  useEffect(() => {
    setDoorPanelOptions({
      ...doorPanelOptions,
      // dimension: WARDROBE_TYPE_WITH_DIMENSIONS[0].dimensions[0].size,
    });
    const tokenUrlObject = getTokenUrl(doorPanelOptions.door, doorPanelOptions.dimension);
    // const tokenUrl = tokenUrlObject?.tokenUrl;
    // updateDataForModelIdLocal(tokenUrlObject);
    setLocalConfiguratorData(tokenUrlObject);
  }, [doorPanelOptions?.door,doorPanelOptions?.dimension]);

  useEffect(() => {
    if (localConfiguratorData?.tokenUrl) {
      setIsRender(checkIfShowRenderData());
      getAllDataFromModelId(checkIfShowRenderData());
    }
  }, [localConfiguratorData]);

  const checkIfShowRenderData = () => {
    return true;
  };

  const getAllDataFromModelId = async (isRender) => {
    console.log(localConfiguratorData,isRender,"localConfiguratorData")
    setLoader(true);
    // let allData = await getAllPublicData({
    //   newModelIds: localConfiguratorData?.tokenUrl,
    //   isRender,
    //   isOpenedFromAdminPanel: false,
    // });
    // const rawData = JSON.parse(JSON.stringify(allData));
    // console.log(allData, "allData");
    // if (allData?.results?.length) {
    //   setAllStoreList(allData?.results);
    //   setToken(rawData?.results?.[0]?.configurator?.token);
    //   setCurrentSelectedStore(allData?.results[0]);
    // }
    setLoader(false);
  };
  // const updateDataForModelIdLocal = (tokenUrlObject) => {
  //   console.log("tokenUrlObject", tokenUrlObject);
  //   setLocalConfiguratorData(tokenUrlObject);
  // };

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
