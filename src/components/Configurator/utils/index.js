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
  for (const val of labels) {
    const textures = await dispatcher(
      getOptionsDataInPrototype({
        token,
        optionId: val.id,
        storeId,
        isPublic: true,
      })
    );
    val.textures = textures.results;
  }
  return labels;
};
