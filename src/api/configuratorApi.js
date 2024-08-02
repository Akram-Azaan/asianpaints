import {
  CONFIG_PUBLIC_DATA,
  GET_PROTOTYPE_PREVIEWS_API,
  GET_LABEL_OPTIONS_PUBLIC_API,
  GET_SCENE_LABEL_PUBLIC_API,
  API_ROOT_URL,
  GET_LABEL_OPTIONS_API,
  GET_SCENE_PUBLIC_DATA,
  GET_SCENE_VIEW_BG_INFO_PUBLIC_API,
} from "../constants/apiConstant";
import axios from "axios";
import { viewerActions } from "../redux/slicers/viewer.slicers";
import {
  SALESFORCE_CLIENT_ID,
  SALESFORCE_CLIENT_SECRET,
  SALESFORCE_PASSWORD,
  SALESFORCE_USERNAME,
  SALESFORCE_LEAD_URL,
  SALESFORCE_TOKEN_URL,
} from "../constants/wardrobeConstants";

export async function getAllPublicData({
  newModelIds,
  isOpenedFromAdminPanel,
  isRender = false,
}) {
  const result = await fetchAllPages(async (page) => {
    let url = API_ROOT_URL + "/" + CONFIG_PUBLIC_DATA + "?token=" + newModelIds;
    if (isOpenedFromAdminPanel) {
      url += `&is_render=${isRender}`;
    }
    const paginatedUrl = `${url}&page=${page}`;
    const result = await axios.get(`${paginatedUrl}`);
    return result;
  });
  return result?.data || result || [];
}

export async function getAllPublicDataPrototype({ configuratorId, isRender }) {
  const url = `${API_ROOT_URL}/${CONFIG_PUBLIC_DATA}${configuratorId}/?is_render=${isRender}`;
  const result = await axios.get(`${url}`);
  return result.data;
}

export async function getLabelsDataInPrototype({
  token,
  storeId,
  sceneId,
  isPublic = false,
  page = 1,
}) {
  const url = `${API_ROOT_URL}${GET_SCENE_LABEL_PUBLIC_API}?token=${token}&store_id=${storeId}&scene_id=${sceneId}&is_public=${isPublic}&page=${page}`;
  const result = await axios.get(`${url}`);
  return result?.data?.results || [];
}

export const getOptionsDataInPrototype =
  ({ token, storeId, optionId, isPublic = false, page = 1 }) =>
  async (dispatch) => {
    const url = `${API_ROOT_URL}${GET_LABEL_OPTIONS_PUBLIC_API}?token=${token}&store_id=${storeId}&sceneoption_id=${optionId}&is_public=${isPublic}&page=${page}`;
    const result = await axios.get(`${url}`);
    dispatch(
      viewerActions.addOptionsToLabel({
        labelId: optionId,
        options: result?.data?.results || [],
      })
    );
    if (result?.data?.next_link)
      dispatch(
        viewerActions.setLabelNextPage({ labelId: optionId, nextPage: 2 })
      );
    return result?.data || [];
  };

export async function getTexturePreviewInPrototype({ storeId, textureId }) {
  const url = `${API_ROOT_URL}/${GET_PROTOTYPE_PREVIEWS_API}?store=${storeId}&texture=${textureId}`;
  const result = await axios.get(`${url}`);
  return result?.results || [];
}

export async function getSceneViewBackgroundInfoPublic({
  storeId,
  token,
  scene,
}) {
  const url = `${API_ROOT_URL}${GET_SCENE_VIEW_BG_INFO_PUBLIC_API}?store=${storeId}&token=${token}&scene=${scene}`;
  const result = await axios.get(`${url}`);
  return result?.results || result?.data?.results || [];
}

export async function updateTexturePreviewInPrototype({ id, payload }) {
  const url = `${API_ROOT_URL}/${GET_PROTOTYPE_PREVIEWS_API}${id}/`;
  const result = await axios.patch(`${url}`, payload);
  return result || {};
}

export async function getLabelOptionsData(labelId, page = 1) {
  let url = `${API_ROOT_URL}${GET_LABEL_OPTIONS_API}?sceneoption=${labelId}&page=${page}`;
  const result = await axios.get(`${url}`);

  return result;
}

export async function getScenesInPrototypeForPublic({
  token,
  is_render = false,
}) {
  const result = await fetchAllPages(async (page) => {
    const url = `${API_ROOT_URL}${GET_SCENE_PUBLIC_DATA}?token=${token}&is_render=${is_render}`;
    const paginatedUrl = `${url}&page=${page}`;
    const result = await axios.get(`${paginatedUrl}`);
    return result;
  });
  return result?.data?.results || result?.results || [];
}

export const fetchAllPages = async (api, callToPage = null) => {
  const data = await api(1);
  if (!data) {
    return null;
  }
  if (data?.data?.total_pages === 1) {
    return data;
  }
  const pages = Array.from(
    { length: (callToPage || data?.data.total_pages) - 1 },
    (_, i) => i + 2
  );
  const list = await Promise.all(
    pages.map(async (page) => {
      const result = await api(page);
      return result?.data?.results;
    })
  );
  const reducedList = list.reduce((acc, items) => [...acc, ...items], []);
  return {
    ...data?.data,
    results: [...(data?.data?.results || []), ...(reducedList || [])],
  };
};

export const getSalesforceToken = async () => {
  const url = SALESFORCE_TOKEN_URL;
  const params = new URLSearchParams({
    grant_type: "password",
    client_id: "3MVG9qT0j3YAi4EtQRW.9zA7hFGh51dU_zuCdAG3AQnalqJ7tGNr.c.I4VHyK3oFV7P10WhMAfJheHnaVlv6X",
    client_secret: "FB30856C7551F376125B80CDB6FB4032975349921153F8F65FFF5E1A42D5D593",
    username: "integration.user@ap.prod.devnew",
    password: "apDevNew@123hdrODuruBtvmdRn7JRomtrgj",
  }).toString();

  try {
    const response = await axios.post(url, params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return response.data.access_token;
  } catch (error) {
    console.error("Error obtaining Salesforce token", error);
    throw error;
  }
};

export const createLeadInSalesforce = async (leadData,estimatedPrice) => {
  try {
    const token = await getSalesforceToken();

    const url = SALESFORCE_LEAD_URL;

    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    const body = {
      req: {
        C_Pincode: leadData.pincode,
        C_Mobile: leadData.mobile,
        C_FirstName: leadData.firstname,
        C_LastName: leadData.lastname,
        C_Email: leadData.email,
        C_EstimatedValue: estimatedPrice,
        C_CampaignId: "WARDROBE_DECORE_IMAGINE",
        C_IntegrationSource: "Wardrobe_Calculator_Imagine",
      },
    };

    const response = await axios.post(url, body, { headers });
    console.log(response, "response");
    return response.data;
  } catch (error) {
    console.error("Error creating lead in Salesforce", error);
    throw error;
  }
};
