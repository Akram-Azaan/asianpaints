import {
  getLabelsDataInPrototype,
  getOptionsDataInPrototype,
} from '../../../api/configuratorApi';
import { dispatcher } from '../../../helpers/jsHelper';

export const getSceneLabelOptions = async ({ token, sceneId, storeId, page = 1 }) => {
  let labels = await getLabelsDataInPrototype({
    token,
    sceneId,
    storeId,
    isPublic: true,
    page
  });
  labels = labels?.filter((val) => val.name !== 'default_label');
  const texturesArray = await Promise.all(
    labels.map((val) =>
      dispatcher(
        getOptionsDataInPrototype({
          token,
          optionId: val.id,
          storeId,
          isPublic: true,
        })
      )
    )
  );
  labels.forEach((val, index) => {
    val.textures = texturesArray[index].results;
  });
  return labels;
};
