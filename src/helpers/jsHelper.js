// import { NO_BRAND_TAG_ORG, TITLE_PREFIX } from '../constants/projectConstants';
// import moment from 'moment';
// import fileDownload from 'downloadjs';
// import { isDev } from './projectHelper.js';
import _ from "lodash";
// import setWith from 'lodash/setWith';
// import clone from 'lodash/clone';
// import { FILTER_TYPES, RENDER_STATUS } from '../constants/constants';
// import { apiErrorHandler } from './axiosHelper';
// import { DEFAULT_DPI } from '../constants/textureConstants';
// import { LOGIN_HOME, SIGNUP_ROUTE } from '../constants/routePathConstants';
// import { CM_IN_ONE_INCHES } from '../config/constant/unityConstants';
// import { NAME_EXCLUDED_SPECIAL_CHARS_GLOBAL } from '../constants/validationConstants';

import { getStore } from "../redux/store";

export const setTitle = (title) => {
  if (title) {
    document.title = title + " - imagine.io";
  }
};

export const dispatcher = (a) => {
  return getStore().dispatch(a);
};
// export const arrayRemoveIndex = (arr, ind) => arr.filter((_, index) => index !== ind);
// export const arrayRemove = (arr, key, val) => arr.filter((a) => a[key] !== val);
// export const duplicateArrayRemove = (arr) => arr.filter((a, i) => arr.indexOf(a) === i);
// export const checkValueExists = (a = {}) => Object.entries(a).some(([k, v]) => !!v);

// export const reload = () => window.location.reload();

// export const parseFloatNaN = (a) => (isNaN(a) || a === '' ? 0 : parseFloat(a));

// export const spaceReduce = (a) => (a ? a.split(' ').join('_') : '');
// export const spaceReverse = (a) => (a ? a.split('_').join(' ') : '');

// export function array_move(arr, old_index, new_index) {
//   if (new_index >= arr.length) {
//     var k = new_index - arr.length + 1;
//     while (k--) {
//       arr.push(undefined);
//     }
//   }
//   arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
//   return arr; // for testing
// }

// export const objectFind = (a, key, select) => {
//   const res = a.find((i) => i[key] === select);
//   if (res) {
//     return Object.assign({}, res);
//   }
//   return {};
// };

// export const objectGetValue = (a, key, select, value) => {
//   const res = a.find((i) => i[key] === select);
//   if (res) {
//     return res?.[value] ?? null;
//   }
//   return null;
// };

// export const objectRemoveUndefined = (obj) =>
//   Object.keys(obj).reduce((acc, key) => {
//     if (obj[key] !== undefined) {
//       acc[key] = obj[key];
//     }

//     return acc;
//   }, {});

// export const objectFindCheck = (a, key, select) => a.findIndex((i) => i[key] === select) > -1;

// export const objectFindUpdate = (a = null, key, select, res) => {
//   if (!a) {
//     return null;
//   }
//   let arr = [...a];
//   let ind = arr.findIndex((i) => i[key] == select);
//   console.log(ind, select, key);
//   arr[ind] = { ...arr[ind], ...res };
//   return [...arr];
// };

// export const objectToSearchParams = (obj) => {
//   if (obj) {
//     const searchParams = new URLSearchParams(objectRemoveUndefined(obj));
//     return searchParams;
//   }
//   return '';
// };

// export const searchStrToObj = (str) => {
//   const s = new URLSearchParams(str);
//   return Object.fromEntries(s);
// };

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

// export const uniqueId = () => `${Date.now()}${Math.random()}`;

// export const arrayUpsert = (data = [], key, value, obj) => {
//   let newData = data;
//   if (objectFindCheck(data, key, value)) {
//     newData = objectFindUpdate(data, key, value, obj);
//   } else {
//     newData.unshift(obj);
//   }
//   return newData;
// };
// export const lookupArray = (array) =>
//   Object.assign({}, ...array.map((i) => ({ [i.value]: i.text })));
// export const arrayMapKeyValue = (arr, key, value) => arr.map((i) => ({ [key]: i[value] }));
// export const optionArray = (array, val, text) =>
//   array.map((i) => ({ value: i[val], text: i[text], ...i }));
// export const optionAutoComplete = (array = [], label) =>
//   array.map((i) => ({ label: i[label] ?? null })).filter((i) => i.label);
// export const arrayAutoComplete = (array = []) => array.map((i) => ({ label: i }));

// export const arrayToOption = (arr = []) =>
//   arr.flatMap((val, ind) => (val ? { text: val, value: ind } : []));

// export const timeRender = (a = null) => (a ? moment(a).format('DD-MMM-YYYY hh:mm A') : null);

export const capitalize = (a) =>
  a ? a.toString().split("")[0].toUpperCase() + a.slice(1) : "";

// export const ToAge = (a) => Math.round(moment.duration(a).asYears());
// export const dateRender = (a) => moment(a).format('DD-MM-YYYY');

// export const ToYear = (a) => moment(a).format('YYYY');
// export const createdTime = (a) => moment(a).format('MMM DD, YYYY ');
// export const ToDate = (a) => {
//   if (a === undefined || a === null) return null;
//   return moment(a).format('YYYY-MM-DD');
// };

// export const updateToArrayLoop = (a = [], obj) => a.map((i) => Object.assign(i, obj));
// export const freezeClone = (a = {}) => JSON.parse(JSON.stringify(a));
// export const sum = (a, key) =>
//   a
//     .reduce((acc, b) => {
//       if (b[key]) {
//         acc = acc + parseFloatNaN(b[key]);
//       }
//       return acc;
//     }, 0)
//     .toFixed(2);

// export const windowOpen = (link, target = '_self') => {
//   window.open(link, target);
// };
// export const hashOpen = (link = null) => {
//   window.open(`#${link}`);
// };

// export const scrollToBottom = (elem) => {
//   if (elem?.scrollHeight) {
//     elem.scrollTop = elem.scrollHeight;
//   }
// };

// export const isFalsyExcept0 = (val) => !val && val !== 0;

// export const duplicateRemove = (arr, key) => {
//   return arr
//     .map((a) => a[key])
//     .filter((a, ind, ar) => ind === ar.indexOf(a))
//     .reduce((acc, curr) => (acc.push({ [key]: curr }), acc), []);
// };

// export const NumGen = (length) => Array.from(Array(length), (_, ind) => ind);

// export const timeRandomName = (a = 'upload') => {
//   const suf =
//     moment().format('DD_MM_YYYY_HH_mm') + Math.round(Math.random() * 100000000).toString();
//   return a + '_' + suf;
// };

// export const strReduce = (str, length = 30) => {
//   return str.substr(0, length);
// };

// export const yearToMilliseconds = (a) => parseInt(moment(a).format('x'));

// export const timeRenderStrToDate = (a = null) => (a ? moment(a, 'x').format('DD-MMM-YYYY') : null);
// export const timeRenderStrToTime = (a = null) => (a ? moment(a, 'x').format('hh:mm A') : null);

// export const dateToMilli = (a) => {
//   const ts = moment(a).unix();
//   const s = moment.unix(ts);
//   return s;
// };

// export const hourString = (a) => {
//   if (a.toString().includes('.')) {
//     const s = a.toString().split('.');
//     return s[0] + ' Hour' + ' ' + s[1] + ' Min';
//   } else {
//     return a + ' Hour';
//   }
// };
// export const duplicateRemoveArrayObj = (ar, key) => {
//   const res = [];
//   ar?.forEach((a, i) => {
//     const ind = ar.findIndex((k) => k[key] === a[key]);
//     if (ind === i) {
//       if (Object.keys(a).length > 0) {
//         res.push(a);
//       }
//     }
//   });
//   return res;
// };

// export const toFixed = (a = '0') => {
//   return +Number(a).toFixed(2);
// };

// export const parseHTML = (html) => {
//   const str = new DOMParser().parseFromString(html, 'text/html');
//   return str.body.textContent;
// };

// export const sliceString = (data) => {
//   if (data.length > 100) {
//     return data.slice(0, 100) + '...';
//   }
//   return data;
// };

// export const perfectNumber = (a = '') => {
//   return a ? (isNaN(Number(a)) ? 0 : Number(a)) : 0;
// };

// export const currencyConvert = (num = null) => {
//   return Number(num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));
// };

// export const devConsoleLog = (...a) => {
//   if (a) {
//     if (isDev()) {
//       console.log(...a);
//     }
//   }
// };

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

// export const removeLocalStorage = (key = '') => {
//   return window.localStorage.removeItem(key);
// };

// export const clearLocalStorage = () => {
//   return window.localStorage.clear();
// };

// export const checkJson = (str) => {
//   try {
//     var o = JSON.parse(str);
//     if (o && typeof o === 'object') {
//       return o;
//     }
//   } catch (e) {
//     console.log('Json error');
//   }
//   return false;
// };

// export const getCommonMetadata = (list, pageNumber, totalPages) => {
//   return {
//     total: list && list.length,
//     hasData: list && list.length > 0,
//     anySelected: _.some(list, (item) => item.selected),
//     allSelected: list.length > 0 && _.every(list, (item) => item.selected),
//     selectedList: _.filter(list, (item) => item.selected),
//     hasMore: pageNumber < totalPages,
//   };
// };

// export const isValidNumber = (num) => {
//   return typeof num === 'number' && !Number.isNaN(num);
// };

// export const stripTags = (str) => {
//   return str.replace(/<(?:.|\n)*?>/gm, '');
// };

// export const stripNonNumbersFullRange = (str) => {
//   return str.replace(/[^0123456789\-\.]/g, '');
// };

// export const stripNonIntegerFullRange = (str) => {
//   return str.replace(/[^0123456789\-]/g, '');
// };

// export const stripNonNumbers = (str) => {
//   return str.replace(/[^0123456789\.]/g, '');
// };

// export const stripNonInteger = (str) => {
//   return str.replace(/[^0123456789]/g, '');
// };

// export const decimals = (num, count) => {
//   const m = Math.pow(10, count);
//   return Math.round(num * m) / m;
// };

// export const countDecimals = function (value) {
//   if (Math.floor(value) === value) return 0;
//   return value.toString().split('.')[1].length || 0;
// };

// export const calculateProgress = (loaded, total) => {
//   return Math.min(Math.floor((loaded / total) * 100), 100);
// };

// function addQueryParams(queryString, value, label) {
//   if (value && !_.includes(['', null, undefined], value)) {
//     let addAmpersand = queryString === '' ? '' : '&';
//     return `${queryString}${addAmpersand}${label}=${value}`;
//   }
//   return '';
// }

// export const constructQueryParams = (
//   sortField,
//   filters,
//   pageNumber,
//   globalFilters,
//   teamMembers
// ) => {
//   let params = '';
//   if (sortField) {
//     // value may be a selected object from <Select>
//     // so will use the value of that object if possible
//     if (sortField?.value) {
//       sortField = sortField.value;
//     }
//     params = `sort=${sortField}`;
//   }
//   if (globalFilters) {
//     _.mapKeys(globalFilters, (filterItem, key) => {
//       if (key === FILTER_TYPES.FAVOURITE) {
//         if (filterItem === true) {
//           params = addQueryParams(params, true, FILTER_TYPES.FAVOURITE);
//         }
//       } else if (key === FILTER_TYPES.ORDERED_FILTERS) {
//         // orderedFilters are an array of filters
//         _.forEach(filterItem, (filter) => {
//           if (filter) {
//             let { filter_label_id, list } = filter;
//             if (_.isArray(list) && list.length > 0) {
//               const idArray = [];
//               _.map(list, (item) => {
//                 if (item.selected) {
//                   idArray.push(item.id);
//                 }
//               });
//               if (idArray.length > 0) {
//                 // fl_label is only for filteroptions and is shaped like this fl_18 or fl_14
//                 // for the id of the filter label
//                 // but the field here is the text visible to the user
//                 // so the actual name of the filter label
//                 // need first item on filter
//                 params = addQueryParams(
//                   params,
//                   _.join(idArray, ','),
//                   filter_label_id ? `fl_${filter_label_id}` : filter.key
//                 );
//               } else {
//                 // console.log('unknown query param key', filter.key)
//               }
//             } else {
//               // if you've gotten here it's because one of the filtering scenarios has not been accounted for above
//               // console.log('unknown query param key', key)
//               // _.mapKeys(filter, (list, type) => {
//               //   console.log(`filter${type}`, list);
//               // });
//             }
//           }
//         });
//       }
//     });
//   }
//   if (teamMembers && teamMembers.length) {
//     let members = [];
//     _.map(teamMembers, (member) => {
//       if (member.selected) {
//         members.push(member.id);
//       }
//     });
//     if (members && members.length > 0) {
//       params = addQueryParams(params, members.join(','), FILTER_TYPES.CREATED_BY);
//     }
//   }

//   const paramsArr = params.split('&');
//   // console.log("before params split: ", paramsArr)
//   const tempPop = paramsArr.shift();
//   paramsArr.push(tempPop);
//   // console.log("after params split: ", paramsArr)

//   params = paramsArr.join('&');
//   // console.log("params: ", params)

//   if (filters && filters.length) {
//     _.map(filters, (filter) => {
//       let { label, value } = filter;
//       // value may be a selected object from <Select>
//       // so will use the value of that object if possible
//       if (value?.value) {
//         value = value.value;
//       }
//       if (_.isObject(value)) {
//         value = value.value;
//       }
//       if (value) {
//         params = addQueryParams(params, value, label);
//       }
//     });
//   }
//   if (pageNumber) {
//     params = addQueryParams(params, pageNumber, FILTER_TYPES.PAGE);
//   }

//   return params;
// };

// export const addValueLabelToList = (list) => {
//   return _.map(list, (item) => {
//     item.value = item.id;
//     item.label = item.name;
//     return item;
//   });
// };

// export const updateByPath = (obj, path, value) => {
//   return setWith(clone(obj), path, value, clone);
// };

// export const reversKeyValue = (obj) => {
//   return Object.entries(obj).reduce((acc, [key, value]) => {
//     acc[value] = key;
//     return acc;
//   }, {});
// };

// export const emailIsValid = (email) => {
//   var emailRegex =
//     /^(([^<>()[\]\\.,;:+\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return emailRegex.test(email);
// };

// export const passwordIsValid = (password) => {
//   var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@[-`{-~]).{8,64}$/;
//   return passwordRegex.test(password);
// };

// export const pwdMatchCheck = (a, b) => {
//   return a === b;
// };

// export const wait = async (durationMs = 0) => {
//   return new Promise((resolve) => setTimeout(resolve, durationMs));
// };

// export const waitRandom = async (minMs = 0, maxMs = 1000) => {
//   const durationMs = parseInt(Math.random() * (maxMs - minMs) + minMs);
//   return new Promise((resolve) => setTimeout(resolve, durationMs));
// };

// export const base64ToBlob = ({ imageString, mimeType = 'image/jpeg' }) => {
//   const byteCharacters = window.atob(imageString);
//   const byteNumbers = new Array(byteCharacters.length);
//   for (let i = 0; i < byteCharacters.length; i++) {
//     byteNumbers[i] = byteCharacters.charCodeAt(i);
//   }
//   const byteArray = new Uint8Array(byteNumbers);
//   const blob = new Blob([byteArray], { type: mimeType });
//   return blob;
// };

// export const cmToInches = (cm) => {
//   if (!cm) return cm;
//   return Number(cm) / CM_IN_ONE_INCHES;
// };
// export const inchesToMeters = (inches) => inches * 0.0254;
// export const metersToinches = (meters) => meters / 0.0254;
// export const feetToMeters = (feet) => feet * 0.3048;
// export const metersToFeet = (meters) => meters / 0.3048;
// export const cmToMeters = (cm) => cm / 100;
// export const metersToCm = (meters) => meters * 100;
// export const metersToMeters = (meters) => meters;
// export const convertToMeters = (value, unitsName) => {
//   const map = {
//     cm: cmToMeters,
//     feet: feetToMeters,
//     inches: inchesToMeters,
//     meter: metersToMeters,
//   };

//   const u = unitsName.toLowerCase();
//   return map[u](value);
// };

// export const inchesToFeet = (inches) => inches / 12;
// export const inchesToCentimeter = (inches) => {
//   let convertTONumber = Number(inches);
//   if (convertTONumber === 0 || isNaN(convertTONumber)) {
//     return 0;
//   }
//   return inches * CM_IN_ONE_INCHES;
// };

// export const convertMetersToUnits = (value, unitsName) => {
//   const map = {
//     cm: metersToCm,
//     feet: metersToFeet,
//     inches: metersToinches,
//     meter: metersToMeters,
//   };

//   const u = unitsName.toLowerCase();
//   return map[u](value);
// };

// export const changeFilter = (filters, field, selection) => {
//   let index = _.findIndex(filters, (filter) => {
//     return filter.label === field;
//   });
//   let changeItem = index > 0 ? Object.assign({}, filters[index]) : {};
//   changeItem.label = field;
//   changeItem.value = selection;
//   let newList = Object.assign([], filters);
//   if (index >= 0) {
//     newList[index] = changeItem;
//   } else {
//     newList.push(changeItem);
//   }
//   return newList;
// };

// export const keyFromLocationState = (location, key) => {
//   return location && location.state && location.state[key];
// };

// export const findCommonElements = (arr1, arr2) => {
//   return arr1.filter((i1) => arr2.some((i2) => i1.id === i2.id));
// };

// export const createUniqueArray = (arr1, arr2 = []) => {
//   return [...new Set([...arr1, ...arr2])];
// };

// export const calcTextureAspectRatio = (width, height) => {
//   let nWidth = 1;
//   let nHeight = 1;

//   if (width > height) nHeight = (height / width).toFixed(2);
//   if (height > width) nWidth = (width / height).toFixed(2);

//   return [nWidth, nHeight];
// };

// export const roundToTwo = (num) => {
//   return +(Math.round(num + 'e+2') + 'e-2');
// };

// export const isTransparentImage = (imageUrl) => {
//   if (!imageUrl || typeof imageUrl !== 'string') return false;

//   const url = new URL(imageUrl);
//   return url.pathname.endsWith('.png');
// };

// export const getImageDetails = (src) => {
//   let isBlob = src instanceof Blob;
//   if (isBlob) {
//     src = URL.createObjectURL(src);
//   }

//   return new Promise((resolve, reject) => {
//     const dpi = DEFAULT_DPI; //Static dpi for now, need to find a method to get dpi form image uploaded
//     const img = new Image();
//     img.onload = () => {
//       if (isBlob) URL.revokeObjectURL(src);

//       resolve({
//         width: img.width,
//         height: img.height,
//         dpi: dpi,
//         widthInches: img.width / dpi,
//         heightInches: img.height / dpi,
//       });
//     };
//     img.onerror = (error, source) => {
//       console.error(error, source);
//       if (isBlob) URL.revokeObjectURL(src);
//       reject(error);
//     };

//     img.src = src;
//   });
// };

// export const loadImage = ({ src }) => {
//   return new Promise((resolve) => {
//     const img = new Image();
//     img.onload = () => resolve();
//     img.onerror = () => resolve();
//     img.src = src;
//   });
// };

// export const getPerPageCount = () => {
//   const height = window.innerHeight;
//   const width = window.innerWidth;
//   const count = (width / 300) * (height / 300);
//   const finalCount = count > 20 ? count : 20;
//   return Math.round(finalCount);
// };

// export const generateUUID = () => {
//   var dt = new Date().getTime();
//   var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
//     var r = (dt + Math.random() * 16) % 16 | 0;
//     dt = Math.floor(dt / 16);
//     return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
//   });
//   return uuid;
// };

// export const validateDate = (date) => {
//   if (date === null) return false;

//   let d1 = new Date(date);
//   let d2 = new Date();

//   return d1 > d2;
// };

// export const checkImageTypes = (images, types, errorMsg) => {
//   if (images.some((item) => !types.includes(item.type))) {
//     apiErrorHandler({ message: errorMsg });
//     return false;
//   }
//   return true;
// };

// export const getRenderStatusToHighlight = (status) => {
//   let res = '';
//   switch (status) {
//     case RENDER_STATUS.STATUS_FAILED:
//       res = 'error';
//       break;
//     case RENDER_STATUS.STATUS_DONE:
//       res = 'success';
//       break;

//     default:
//   }
//   return res;
// };

// export const checkFileSize = (fileSize, requiredSize) => {
//   return (fileSize || 0) / (1024 * 1024) <= requiredSize;
// };

// export const scaleResolution = ({ x, y, max }) => {
//   if (x > y) {
//     if (x > max) {
//       const delta = x / max;
//       return { x: max, y: y / delta };
//     }
//   } else {
//     if (y > max) {
//       const delta = y / max;
//       return { x: x / delta, y: max };
//     }
//   }

//   return { x, y };
// };

// export const getSortedDataByKey = (source, key) => {
//   if (!source.length) return;
//   if (!key) return;

//   return source.sort((a, b) => {
//     // converting to uppercase to have case-insensitive comparison
//     const name1 = a[key].toUpperCase();
//     const name2 = b[key].toUpperCase();

//     let comparison = 0;

//     if (name1 > name2) {
//       comparison = 1;
//     } else if (name1 < name2) {
//       comparison = -1;
//     }
//     return comparison;
//   });
// };

// export const getBrandName = (orgDetails) => {
//   const brandName = orgDetails?.name;
//   return brandName && NO_BRAND_TAG_ORG.includes(brandName) ? null : brandName;
// };

// export const getDraggableStyle = (style, snapshot) => {
//   // use it when you want to prevent reordering inside of draggable https://github.com/atlassian/react-beautiful-dnd/issues/374
//   if (!snapshot.isDragging) return {};
//   if (!snapshot.isDropAnimating) {
//     return style;
//   }

//   return {
//     ...style,
//     // cannot be 0, but make it super tiny
//     transitionDuration: `0.001s`
//   };
// }

// export const reorderDraggableItems = ({ items, draggableId, destination, tiny, orderKey = 'order' }) => {
//   const destinationItem = items[destination.index];
//   const sourceItem = items.find((item) => item.id == draggableId);

//   const destinationOrder = destinationItem[orderKey];
//   const sourceOrder = sourceItem[orderKey];
//   const min = Math.min(destinationOrder, sourceOrder);
//   const max = Math.max(destinationOrder, sourceOrder);

//   const reorderedBefore = destinationOrder < sourceOrder;

//   let reorderedList = items.map((item) => {
//     if (item[orderKey] < min || item[orderKey] > max) return item;

//     if (item.id == draggableId) return { ...item, [orderKey]: destinationOrder };

//     if (reorderedBefore) {
//       return { ...item, [orderKey]: item[orderKey] + 1 };
//     } else {
//       return { ...item, [orderKey]: item[orderKey] - 1 };
//     }
//   });

//   if (tiny) {
//     reorderedList = reorderedList.map(item => ({
//       id: item.id,
//       [orderKey]: item[orderKey],
//     }))
//   }

//   return reorderedList;
// }

// export const generateNewName = ({ items, baseName, nameKey = 'name'}) => {
//   const isUniqueName = (name) => {
//     return !items.find((item) => item[nameKey].toLowerCase() === name.toLowerCase());
//   };

//   let name = baseName;
//   let counter = 1;
//   while (!isUniqueName(name)) {
//     name = `${baseName} ${counter}`;
//     counter++;
//   }

//   return name;
// }

// export const sendDataToSubDomain = (pathname, currentUser) => {
//   // send message to https://imagine.io/ domain
//   const postCrossDomainMessage = (data) => {
//     const win = document.getElementById('website-iframe')?.contentWindow;
//     win?.postMessage(data, 'https://imagine.io/user-update-test');
//   };
//   const clearStorage = pathname === LOGIN_HOME || pathname === SIGNUP_ROUTE;
//   let localStorageData = JSON.parse(JSON.stringify(localStorage));
//   if (currentUser && !localStorageData.current_user) {
//     localStorageData.current_user = JSON.stringify(currentUser);
//   }
//   postCrossDomainMessage({
//     sendDataToCrossDomain: true,
//     clearStorage: clearStorage,
//     localStorageData: localStorageData,
//   });
// };

// export const youtubeParser = (url) => {
//   var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
//   var match = url.match(regExp);
//   return match && match[7].length == 11 ? match[7] : false;
// };

// export const removeExtension = (f) => {
//   if (!f) return f;
//   const dotLastIndex = f.lastIndexOf('.');
//   return f.substring(0, dotLastIndex);
// };

// export const removeSpecialCharacters = (name) => {
//   if (!name) return name;
//   return name.replace(/\.[^/.]+$/, '').replaceAll(NAME_EXCLUDED_SPECIAL_CHARS_GLOBAL, '_');
// };

// export const getFirstNameAndLastName = (value) => {
//   if (value) {
//     const nameArray = value?.split(' ');
//     const firstName = nameArray?.[0] || "";
//     const lastName = nameArray?.slice?.(1).join?.(" ") || "";
//     return {firstName , lastName}
//   }
//   return {firstName:"" , lastName:""};
// };

// // this function used for download image from URL
// export const handleDownloadImage = async (value) => {
//   if (value) {
//     const image = await fetch(value);
//     const nameSplit = value?.split('/');
//     const duplicateName = nameSplit.pop();
//     const imageBlog = await image.blob();
//     fileDownload(imageBlog, duplicateName?.split('?')[0], imageBlog?.type);
//   }
// };

// // sort array data
// export const SortArrayBySeq = (value, key) => {
//   if (value && value?.length) {
//     const data = value.sort((a, b) => +a[key] - +b[key]) || [];
//     return data;
//   } else {
//     return [];
//   }
// };

// // any type of file url to file object conversion
// export const urltoFile = (url, filename, mimeType) => {
//   if (url.startsWith('data:')) {
//       var arr = url.split(','),
//           mime = arr[0].match(/:(.*?);/)[1],
//           bstr = atob(arr[arr.length - 1]),
//           n = bstr.length,
//           u8arr = new Uint8Array(n);
//       while(n--){
//           u8arr[n] = bstr.charCodeAt(n);
//       }
//       var file = new File([u8arr], filename, {type:mime || mimeType});
//       return Promise.resolve(file);
//   }
//   return fetch(url)
//       .then(res => res.arrayBuffer())
//       .then(buf => new File([buf], filename,{type:mimeType}));
// }
// // toggle fullscreen code
// export const handleToggleScreen = (elem=document.documentElement, setFullScreen=null) => {
//   if (!window?.document?.fullscreen || window.fullscreen) {
//     if (elem?.requestFullscreen) {
//       elem?.requestFullscreen?.();
//     } else if (elem?.webkitRequestFullscreen) {
//       /* Safari */
//       elem?.webkitRequestFullscreen?.();
//     } else if (elem?.msRequestFullscreen) {
//       /* IE11 */
//       elem?.msRequestFullscreen?.();
//     }
//     if (setFullScreen)
//     setFullScreen(true)
//   } else {
//     if (document?.exitFullscreen) {
//       document?.exitFullscreen?.();
//     } else if (document?.webkitExitFullscreen) {
//       /* Safari */
//       document?.webkitExitFullscreen?.();
//     } else if (document?.msExitFullscreen) {
//       /* IE11 */
//       document?.msExitFullscreen?.();
//     }
//     if (setFullScreen)
//     setFullScreen(false)
//   }
// };
// // create form data from array using key and value pair
// export const getFormData = (array) => {
//   const formData = new FormData();
//     for (const index in array) {
//       Object.keys(array[index]).forEach((key) => formData.append(key, array[index][key]));
//     }
//     return formData;
// }

// export const RemoveAllWhiteSpaceFromString = (value) => {
//   const whitespaceRemoved = value?.replace(/\s/g, '');
//   return whitespaceRemoved || ""
// }

export const getQueryParams = () => {
  const params = {};
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  for (const [key, value] of urlParams.entries()) {
    params[key] = value;
  }
  return params;
}

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
      console.error("check your tracking params, Satellite object not fount");
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
      console.error("check your tracking params, Satellite object not fount");
    }
  }
};
