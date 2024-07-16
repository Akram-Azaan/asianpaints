import { combineReducers, configureStore } from '@reduxjs/toolkit';
import viewerSlicer from './slicers/viewer.slicers';

const rootReducer = combineReducers({
    viewer: viewerSlicer
})


const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [],
          // Ignore these paths in the state
          ignoredPaths: [],
        },
      }),
  });
  export default store;
  
  export const getStore = () => store;
  export const getAppState = () => store.getState();
  