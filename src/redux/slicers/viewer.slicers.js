import { createSlice } from "@reduxjs/toolkit";
import { orderBy } from 'lodash';

const getInitialState = () => ({
  data: {},
});

function defaultOption(state, labelId, loading = false, loaded = true) {
  if (state.data[labelId]) return;

  state.data[labelId] = {
    loading,
    loaded,
    options: [],
  };
}

export const addItemsToMapList =
  (propertyName, idKey, itemKey, beforeId) =>
    (state, { payload }) => {
      const id = payload[idKey];
      const items = payload[itemKey];

      const baseState = beforeId ? state[beforeId] : state;
      const newOptions = [...baseState[id][propertyName], ...items];
      baseState[id][propertyName] = newOptions;
    };

const viewer = createSlice({
  name: "viewer",
  initialState: getInitialState(),
  reducers: {
    resetState: () => {
      return getInitialState();
    },
    addOptionsToLabel: (state, action) => {
      defaultOption(state, action.payload.labelId)
      const oldOptions = state.data[action.payload.labelId]['options'];
      const newOptions = action.payload.options;
      const combinedOptions = [...oldOptions, ...newOptions];
      state.data[action.payload.labelId] = {
        loading: false,
        loaded: true,
        options: combinedOptions
      }
      // addItemsToMapList('options', 'labelId', 'options', 'data')(state, action)
    },
    setLabelNextPage: (state, { payload }) => {
      const { labelId, nextPage } = payload;
      state[labelId] = { labelNextPage: nextPage };
    },
    setLabelCurrentPage: (state, { payload }) => {
      const { labelId, currentPage } = payload;
      state[labelId] = { labelCurrentPage: currentPage };
    },
    setLabelOptionsLoading: (state, { payload }) => {
      const { labelId, value } = payload;
      if (state.data[labelId]) {
        state.data[labelId].loading = value;
      }

      else state.data[labelId] = { loading: value };
    },
    addOptionsToLabelObject: (state, { payload }) => {
      const { labelId, options, nextPage, hasMorePages } = payload;
      state[labelId] = { labelNextPage: hasMorePages ? nextPage : null };

      if (state.data[labelId]) {
        if (state.data[labelId]?.options) {
          const filteredOptions = options.filter(_item => !state.data[labelId].options.find(_option => _option.id === _item.id))
          state.data[labelId].options = [...state.data[labelId].options, ...filteredOptions];
        }
        else
          state.data[labelId].options = options;
      }
      else state.data[labelId] = { options }
    },
  },
});

export const { setLabelData } = viewer.actions;
export const viewerActions = viewer.actions;
export const viewerSelector = (state) => state.viewer;
export const viewerReducer = viewer.reducer;
export default viewerReducer;
export const getNextLabelPage = (labelId) => (state) => {
  return state.viewer[labelId]?.labelNextPage;
};

export const getCurrentLabelPage = (labelId) => (state) => {
  return state.viewer[labelId]?.labelCurrentPage;
};

export const getNextLabelOptions = (labelId) => (state) => {
  return state.viewer.data[labelId]?.options;
};

export const selectLabelOptionsLoading = (labelId) => (state) => {
  return state.viewer.data[labelId]?.loading;
};

export const selectLabelOptions =
  (labelId, { is_enable } = {}) =>
    (state) => {
      let options = state.viewer.data[labelId]?.options || [];

      if (typeof is_enable === 'boolean') {
        options = options.filter((o) => o.is_enable === is_enable);
      }

      return options;
    };

export const selectSortedLabelOptions =
  (labelId, config = {}) =>
    (state) => {
      const options = selectLabelOptions(labelId, config)(state);

      return orderBy(options, 'seq_no', 'asc');
    };
