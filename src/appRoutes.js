import { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Loader from './components/Loader/Loader';
export const CONFIGURATOR_VIEWER = "/configurator/:modelId";
export const CONFIGURATOR_VIEWER_TEST = "/test";

const ConfiguratorViewer = lazy(() => import("./components/ConfiguratorViewer/ConfiguratorViewer"));

const routeMapFunc = (
  { exact = true, path, Component, componentProps, routes },
  idx
) => {
  return (
    <Route
      path={path}
      exact={exact}
      element={<Component {...componentProps} />}
      key={idx}
    >
      {routes?.map(routeMapFunc)}
    </Route>
  );
};

export const routes = [
  { path: CONFIGURATOR_VIEWER, Component: ConfiguratorViewer, key: "viewer" },
  { path: CONFIGURATOR_VIEWER_TEST, Component: ConfiguratorViewer, key: "viewer" },
  { path: '/*', Component: ConfiguratorViewer, key: 'viewer'}
];

export const Routing = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader zIndex={1000} loading={true} className="bg-white" position="fixed" />}>
        <Routes>{routes.map(routeMapFunc)}</Routes>
      </Suspense>
    </ErrorBoundary>
  );
};
