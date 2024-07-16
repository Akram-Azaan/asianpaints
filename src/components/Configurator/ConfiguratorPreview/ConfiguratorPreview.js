import cx from 'classnames';
// import { throttle } from 'lodash';
// import { useEffect, useLayoutEffect, useRef, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   selectConfiguratorAspectRatio,
//   selectSelectedTheme,
//   selectSidebarOpen,
//   selectThemeLoading,
//   selectIsImageConfigurator,
// } from '../../../redux/slicers/configurator/configurator.slicer';
// import { calculateSize } from '../SettingsTab/helper';
// import styles from './ConfiguratorPreview.module.scss';
import templateStyles from '../ConfiguratorTemplates/ConfiguratorTemplate.module.scss';
// import { ConfiguratorPreviewSidebar } from './ConfiguratorPreviewSidebar';
// import { UnityUI } from './UnityUI';
import { TemplateSidebarContent } from '../ConfiguratorTemplates/TemplateSidebarContent';
// import CameraViewsList from '../ConfiguratorTemplates/CameraViewsList';
// import Loader from '../../Loader/Loader';
// import { CAROUSEL_CONSTANT_HEIGHT } from '../../../constants/productConfiguratorConstants';
// import { selectCurrentSceneViews } from '../../../redux/slicers/configurator/configuratorViews.slicer';
// import { useWebglEvents } from './useWebglEvents';
// import { configuratorUnityContext } from '../unity/configurator.config';

export const ConfiguratorPreview = ({
  selectedThemePassed,
  scenePassed,
  allLabels,
  passDataToViewer,
  fromViewer,
  selectNewScene,
  allScenes,
}) => {
  // let selectedTheme = selectedThemePassed;
  // const themeLoading = useSelector(selectThemeLoading);
  // const sidebarOpen = useSelector(selectSidebarOpen);
  // const aspectRatio = useSelector(selectConfiguratorAspectRatio);
  // const [unitySize, setUnitySize] = useState({ width: 0, height: 0 });
  // const ref = useRef(null);
  // const isImageConf = useSelector(selectIsImageConfigurator);
  // const views = useSelector(selectCurrentSceneViews);
  // const { handleUnityLeave } = useWebglEvents({
  //   unityContext: configuratorUnityContext,
  //   controller: 'ConfiguratorBridge',
  // });
  let isPreviewScreen = Boolean(fromViewer);
  if (scenePassed || allLabels || passDataToViewer) {
    isPreviewScreen = true;
  }

  // const recalculateSize = (sidebarOpen) => {
  //   if (!ref.current) return;
  //   let { width, height } = calculateSize({
  //     element: ref.current,
  //     minSidebarWidth: 300,
  //     unityAspectRatio: aspectRatio,
  //   });
  //   if (!selectedTheme?.is_default && isImageConf) {
  //     height = height - (sidebarOpen ? 70 : 150);
  //   }
  //   setUnitySize({ width, height });
  // };

  // useLayoutEffect(() => {
  //   // calculate width/height of the ui element
  //   recalculateSize();
  // }, [aspectRatio, selectedTheme, themeLoading]);

  // useEffect(() => {
  //   // timeout to wait until animation is done
  //   const timerId = setTimeout(() => {
  //     recalculateSize(sidebarOpen);
  //   }, 200);
  //   return () => clearTimeout(timerId);
  // }, [sidebarOpen]);

  // useEffect(() => {
  //   const throttledRecalculateSize = throttle(recalculateSize, 70);
  //   window.addEventListener('resize', throttledRecalculateSize);
  //   return () => window.removeEventListener('resize', throttledRecalculateSize);
  // }, []);

  // const getContainer = (children) => {
  //   return (
  //     <div className={cx(styles.root, sidebarOpen && styles.withSidebar)} ref={ref}>
  //       {children}
  //     </div>
  //   );
  // };

  // const getDefaultTheme = () => {
  //   return getContainer(
  //     <div className={styles.innerContainer}>
  //       <UnityUI className={styles.unityContainer} size={unitySize} />
  //       <span className={styles.hoverBorder} />
  //       <ConfiguratorPreviewSidebar />
  //     </div>
  //   );
  // };

  const getThemeOtherThemes = (isUnityLeft = false) => {
    if (isPreviewScreen) {
      return (
        <div className={cx(templateStyles.innerContainer, 'w-100 h-100')}>
          <TemplateSidebarContent
            scenePassed={scenePassed}
            allLabels={allLabels}
            passDataToViewer={passDataToViewer}
            isPreviewScreen={isPreviewScreen}
            selectNewScene={(val) => selectNewScene(val)}
            allScenes={allScenes}
          />
          <span className={templateStyles.hoverBorder} />
        </div>
      );
    }
  };

  const getYourTheme = () => {
    // if (selectedTheme.id === 12) {
    //   return getDefaultTheme();
    // }
    // if (selectedTheme.id === 11) {
    //   return getThemeOtherThemes();
    // }
    // if (selectedTheme.id === 10) {
    //   return getThemeOtherThemes(true);
    // }
    return getThemeOtherThemes(true);
  };

  // if (!selectedTheme?.id || themeLoading) {
  //   return <Loader loading={true} />;
  // }

  return getYourTheme();
};
