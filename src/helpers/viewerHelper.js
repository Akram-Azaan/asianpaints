import { getLabelOptionsData, getOptionsDataInPrototype } from "../api/configuratorApi"
import { viewerActions, selectLabelOptionsLoading } from "../redux/slicers/viewer.slicers"
import { getAppState } from "../redux/store"
import { getSceneLabelOptions } from '../components/Configurator/utils';
import dummy from '../assets/images/dummy.svg';


export const fetchMoreOptions = async (_labelNextPage, dispatch, labelInfo, labels = null, setLabels = null, options = [], setOptions = null, apiUsed = null, checkForLoading = false) => {
  const labelId = labelInfo?.id;
  const isLoading = selectLabelOptionsLoading(labelId)(getAppState())

  dispatch(viewerActions.setLabelOptionsLoading({ labelId, value: true }))

  if (isLoading) return;

  if (_labelNextPage) {
    const _response = await dispatch(getOptionsDataInPrototype({
      optionId: labelId,
      token: labelInfo?.token,
      storeId: labelInfo?.storeId,
      page: _labelNextPage,
    }))

    if (_response?.results?.length) {

      if (options.length && setOptions) {
        const newOptions = labels.map(_item => {
          if (_item.id === labelId) {
            return { ..._item, textures: [..._item.textures, ..._response.results.map(_item => ({ ..._item, active: false, selected: false }))] }
          }
          return _item
        })
        setOptions(newOptions)
        dispatch(viewerActions.setLabelNextPage({ labelId, nextPage: _response?.next_link ? _labelNextPage + 1 : null }))

      }
      else {

        if (setLabels && labels) {
          const newLabel = labels.map(_item => {
            if (_item.id === labelId) {
              if (_item?.items?.length) {
                return { ..._item, items: [..._item.items, ..._response?.results] }
              } else {
                return { ..._item, items: [..._response?.results] }
              }
              
            }
            return _item
          })

          setLabels(newLabel)
        }

        dispatch(
          viewerActions.addOptionsToLabelObject({
            labelId,
            options: _response?.results,
            nextPage: _labelNextPage + 1,
            hasMorePages: !!_response?.next_link
          }))

      }
    }

  }
  dispatch(viewerActions.setLabelOptionsLoading({ labelId, value: false }))
}

export const profileData = [
  {
    name: '2 inch round',
    id: 1,
    thumb: dummy,
    selected: false
  },
  {
    name: '1.5 inch round',
    id: 2,
    thumb: dummy,
    selected: false
  },
  {
    name: '1.5 inch square',
    id: 3,
    thumb: dummy,
    selected: false
  }
]

export const mergeSceneData = [
  {
    minValue: 0,
    maxValue: 1,
    name: 'sofa',
    id: '11'
  },
  {
    minValue: 2,
    maxValue: 3,
    name: 'bed',
    id: '22'
  }
]

export const getYourStoreId = (sceneId, allStoreList) => {
  let allStores = allStoreList;
  let checkVal = allStores.find((st) => st.scene.id === sceneId)
  return checkVal?.id
}

export const getAllDataForLabels = async (slicedArray, allStoreList, token) => {
  const promisesArr = [];
  for (let i = 0; i < slicedArray?.length; i++) {
    let storeId = getYourStoreId(slicedArray[i]?.id, allStoreList)
    promisesArr.push(
      getSceneLabelOptions({
        sceneId: slicedArray[i]?.id,
        token: token,
        storeId,
      })
    )
  }
  let allMergedLabels = [];
  await Promise.allSettled(promisesArr).then((results) => {
    results.forEach((result) => {
      if (result?.status === 'fulfilled' && result?.value?.length) {
        allMergedLabels.push(...result.value);
      }
    })
  });
  return allMergedLabels;
}

export const mergeSameLabels = (labels) => {
  let obj = {};
  for (let i = 0; i < labels.length; i++) {
    if (obj[labels[i].id]) {
      obj[labels[i].id].textures = [...obj[labels[i].id].textures, ...labels[i].textures]
    } else {
      obj[labels[i].id] = labels[i];
    }
  }
  let resultArr = [];
  for (let val in obj) {
    resultArr.push(obj[val]);
  }
  return resultArr;
}