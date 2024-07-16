// import { COLOR_TYPE } from '../redux/slicers/admin/curatorStylesSlicer';
const { REACT_APP_VERSION } = process.env;

export const CONFIGURATOR_TYPE = {
  IMAGE: '1',
  THREE_SIXTY: '2',
};

export const ASPECT_RATIO = {
  1.77: '1.77',
  1.33: '1.33',
  1: '1',
};

export const THEME = {
  THEME1: 'THEME1',
  THEME2: 'THEME2',
  THEME3: 'THEME3',
  THEME4: 'THEME4',
};

export const NEW_CONFIGURATOR_ID = 'new';

export const UNITY_REF = {
  loaderUrl: `/Build/configurator/WebGLBuild.loader.js?version=${REACT_APP_VERSION}`,
  dataUrl: `/Build/configurator/WebGLBuild.data?version=${REACT_APP_VERSION}`,
  frameworkUrl: `/Build/configurator/WebGLBuild.framework.js?version=${REACT_APP_VERSION}`,
  codeUrl: `/Build/configurator/WebGLBuild.wasm?version=${REACT_APP_VERSION}`,
};

export const EMPTY_CONFIGURATOR = {
  // use it to provide some default state when configurator data is fetching
  theme: null,
  name: 'Loading...',
  type: CONFIGURATOR_TYPE.IMAGE,
  watermark: false,
  sharing_enabled: false,
  is_download_enabled: false,
  floor_shadow: false,
  aspectRatio: ASPECT_RATIO['1.33'],
  imageWidth: 3072,
  imageHeight: 2304,
};

export const NEW_CONFIGURATOR_DATA = {
  // use it to provide some default state when configurator data is fetching
  id: NEW_CONFIGURATOR_ID,
  theme: THEME.THEME1,
  name: 'Untitled',
  type: CONFIGURATOR_TYPE.IMAGE,
  watermark: false,
  sharing_enabled: false,
  is_download_enabled: false,
  floor_shadow: false,
  aspectRatio: ASPECT_RATIO['1.33'],
  imageWidth: 3072,
  imageHeight: 2304,
};

export const CONFIGURATOR_Z_INDEX = {
  DATA_LOADER: 100,
};

export const CONFIGURATOR_CONSTANT = {
  CAMERA: {
    FOV_MIN: 10,
    FOV_MAX: 120,
    DISTANCE_MIN: 0.5,
    DISTANCE_MAX: 10,
    HEIGHT_MIN: -3,
    HEIGHT_MAX: 3,
    ROTATION_Z_MIN: -50,
    ROTATION_Z_MAX: 90,
    ROTATION_MIN: 0,
    ROTATION_MAX: 360,
    HORIZONTAL_PANNING_MIN: -4,
    HORIZONTAL_PANNING_MAX: 4,
    VERTICAL_PANNING_MIN: -4,
    VERTICAL_PANNING_MAX: 4,
  },
  SCALE: {
    MIN: 1,
    MAX: 100,
  },
};

export const BACKGROUND_TYPE = {
  IMAGE: '1',
  COLOR: '2',
};

export const BACKGROUD_FIT = {
  FILL: '1',
  CROP: '2',
};
export const OPTION_TYPE = {
  MATERIAL: '2',
  TEXTURE: '1',
  COLOR: '3',
};

export const DRAGGABLE_TYPE = {
  LABEL: 'LABEL',
  OBJECT: 'OBJECT',
};

export const MIN_IMAGE_SIZE = 1;
export const MAX_IMAGE_SIZE = 5000;

export const EMPTY_VIEW = {
  is_bg: false,
  applyToAllViews: false,
  backgroundType: BACKGROUND_TYPE.IMAGE,
  backgroundFit: BACKGROUD_FIT.FILL,
  backgroundImage: null,
  backgroundImageCropped: null,
  // colorType: COLOR_TYPE.HEX,
};

export const EMPTY_SCENE = {};

export const EMPTY_ARRAY = [];

export const CAROUSEL_CONSTANT_HEIGHT = 128;

export const CAROUSEL_CONSTANT_HEIGHT_VIEWER = 74;

export const PADDING_VALUE_VIEWER = 20;

export const MAX_CAMERA_ANGLES = 5;

export const MIN_IMAGE_WIDTH_HEIGHT = 1500;

export const MAX_ALLOWED_THUMBNAIL_SIZE = 5000000;
