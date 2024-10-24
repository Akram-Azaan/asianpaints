import _ from "lodash";
import { getStore } from "../redux/store";

export const setTitle = (title) => {
  if (title) {
    document.title = title + " - imagine.io";
  }
};

export const dispatcher = (a) => {
  return getStore().dispatch(a);
};

export const objectToFormData = (
  obj,
  { ignoreUndefined = false, separateArrayItems } = {}
) => {
  const formData = new FormData();
  Object.entries(obj).forEach(([key, value]) => {
    if (ignoreUndefined && typeof value === "undefined") return;
    if (value?.length && typeof value === "object") {
      if (separateArrayItems) {
        value.forEach((v) => formData.append(key, v));
        return;
      } else {
        value = `${value}`;
      }
    }

    if (value instanceof File) {
      formData.append(key, value, value?.name || undefined);
    } else {
      formData.append(key, value);
    }
  });
  return formData;
};

export const capitalize = (a) =>
  a ? a.toString().split("")[0].toUpperCase() + a.slice(1) : "";

export const getLocalStorage = (key = "", tryParseJson = false) => {
  let results;
  try {
    results =
      key && !_.isNil(window.localStorage.getItem(key))
        ? window.localStorage.getItem(key)
        : null;
    if (results && tryParseJson) {
      results = JSON.parse(results);
    }
  } catch (e) {
    console.log(`error getting ${key} from localStorage`, e);
  }
  return results;
};

export const setLocalStorage = (key = "", str = "") => {
  if (_.isObject(str)) {
    str = JSON.stringify(str);
  }
  return window.localStorage.setItem(key, str);
};

export const getQueryParams = () => {
  const params = {};
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  for (const [key, value] of urlParams.entries()) {
    params[key] = value;
  }
  return params;
};

export const satelliteCheck = function (_satellite) {
  return typeof _satellite !== "undefined" ? true : false;
};

export const trackSwatches = (value) => {
  const _satellite = window?._satellite || {};
  console.log("_satellite", _satellite);
  console.log("payload", {
    shadeTitle: value?.name || "",
    shadeCode: value?.code || "",
  });
  if (_satellite && Object.keys(_satellite)?.length) {
    if (satelliteCheck(_satellite)) {
      _satellite.track("shades_click", {
        shadeTitle: value?.name || "",
        shadeCode: value?.code || "",
      });
    }
  } else {
    const params = getQueryParams();
    if (params?.["envType"]) {
      console.error("check your tracking params, Satellite object not found");
    }
  }
};
export const trackDropdownAndRadioFilter = (value) => {
  const _satellite = window?._satellite || {};
  console.log("_satellite", _satellite);
  const { room, radioFinish, finishType } = value || {};
  const filterValue = `${room?.value}|${finishType?.value}|${capitalize(
    radioFinish
  )}`;
  console.log("filterValue", filterValue);
  if (_satellite && Object.keys(_satellite)?.length && filterValue) {
    if (satelliteCheck(_satellite)) {
      _satellite.track("filter_click", {
        filter: filterValue,
      });
    }
  } else {
    const params = getQueryParams();
    if (params?.["envType"]) {
      console.error("check your tracking params, Satellite object not found");
    }
  }
};

//Adobe Analytics for wardrobe configurator

const paramsCheck = () => {
  const params = getQueryParams();
  if (params?.["envType"]) {
    console.error("check your tracking params, Satellite object not found");
  }
};

export const adobeAnaSelectedTab = (data) => {
  const _satellite = window?._satellite || {};
  console.log("_satellite", _satellite);
  console.log("payload", {
    ctaText: data,
  });
  if (_satellite && Object.keys(_satellite)?.length) {
    if (satelliteCheck(_satellite)) {
      _satellite.track("select-tab", {
        ctaText: data || "",
        componentName: "wardrobe imagine io",
      });
    }
  } else {
    paramsCheck();
  }
};

export const adobeAnaSelectedDoorPanel = (data) => {
  const _satellite = window?._satellite || {};
  console.log("_satellite", _satellite);
  console.log("payload", {
    selectedPanel: data || "",
  });
  if (_satellite && Object.keys(_satellite)?.length) {
    if (satelliteCheck(_satellite)) {
      _satellite.track("select-door-pannel-next", {
        ctaTitle: "select a door panel",
        selectedPanel: data || "",
        componentName: "wardrobe imagine io",
      });
    }
  } else {
    paramsCheck();
  }
};

export const adobeAnaDimensionBack = () => {
  console.log("adobeAnaDimensionBack");
  const _satellite = window?._satellite || {};
  if (_satellite && Object.keys(_satellite)?.length) {
    if (satelliteCheck(_satellite)) {
      _satellite.track("back-button-click", {
        ctaTitle: "select wardrobe dimension",
        selectedPanel: "step 2",
        componentName: "wardrobe imagine io",
      });
    }
  } else {
    paramsCheck();
  }
};

export const adobeAnaDimensionNext = (data) => {
  console.log(data);
  const _satellite = window?._satellite || {};
  if (_satellite && Object.keys(_satellite)?.length) {
    if (satelliteCheck(_satellite)) {
      _satellite.track("select-dimension-next", {
        ctaTitle: "select wardrobe dimension",
        selectedDimension: data,
        componentName: "wardrobe imagine io",
      });
    }
  } else {
    paramsCheck();
  }
};

export const adobeAnaSelectedWoodFinish = (data) => {
  const _satellite = window?._satellite || {};
  console.log("_satellite", _satellite);
  console.log("payload", {
    selectedPanel: data || "",
  });
  if (_satellite && Object.keys(_satellite)?.length) {
    if (satelliteCheck(_satellite)) {
      _satellite.track("select-wood-finish-next", {
        ctaTitle: "select a wood finish",
        selectedPanel: data || "",
        componentName: "wardrobe imagine io",
      });
    }
  } else {
    paramsCheck();
  }
};

export const adobeAnaLeadFormSubmition = (pincode, leadId, apiStatus) => {
  const _satellite = window?._satellite || {};
  console.log("_satellite", _satellite);
  console.log("payload", {
    pinCode: pincode || "",
    leadId: leadId || "",
    apiStatus: apiStatus || "",
  });
  if (_satellite && Object.keys(_satellite)?.length) {
    if (satelliteCheck(_satellite)) {
      _satellite.track("lead-form-submit", {
        ctaTitle: "your free quote is just a few details away!",
        pinCode: pincode || "",
        leadId: leadId || "",
        apiStatus: apiStatus || "",
        componentName: "wardrobe imagine io",
      });
    }
  } else {
    paramsCheck();
  }
};

export const adobeAnaWardrobeAction = (text, value) => {
  const _satellite = window?._satellite || {};
  console.log("_satellite", _satellite);
  console.log("payload", {
    ctaText: text || "",
    ctaTitle: value || "",
  });
  if (_satellite && Object.keys(_satellite)?.length) {
    if (satelliteCheck(_satellite)) {
      _satellite.track("wardrobe-cta-Interaction", {
        ctaText: text || "",
        ctaTitle: value || "",
        componentName: "wardrobe imagine io",
      });
    }
  } else {
    paramsCheck();
  }
};

export const adobeAnaSelectedShades = (woodfinish, shade) => {
  const _satellite = window?._satellite || {};
  console.log("_satellite", _satellite);
  console.log("payload", {
    ctaText: `Available top ${woodfinish} shades` || "",
    ctaTitle: shade || "",
  });
  if (_satellite && Object.keys(_satellite)?.length) {
    if (satelliteCheck(_satellite)) {
      _satellite.track("select-shade", {
        ctaText: `Available top ${woodfinish} shades` || "",
        ctaTitle: shade || "",
        componentName: "wardrobe imagine io",
      });
    }
  } else {
    paramsCheck();
  }
};

export const getFirstNameAndLastName = (value) => {
  if (value) {
    const nameArray = value?.split(' ');
    const firstName = nameArray?.[0] || '';
    const lastName = nameArray?.slice?.(1).join?.(' ') || '';
    return { firstName, lastName };
  }
  return { firstName: '', lastName: '' };
};
