import React from 'react';
import { useSelector } from 'react-redux';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './ConfiguratorTemplate.module.scss';
import { selectCurrentSceneViews } from '../../../redux/slicers/configurator/configuratorViews.slicer';
import { configuratorBridge, configuratorModule } from '../unity/unityMethods';
import { configuratorUnityContext } from '../unity/configurator.config';
import { BACKGROUND_TYPE } from '../../../constants/productConfiguratorConstants';

const CameraViewsList = () => {
  const unityElement = configuratorUnityContext?.htmlCanvasElement;

  const handleViewClick = (view) => {
    let cameraData = view?.camera_data;
    if (cameraData) {
      if (typeof cameraData === 'string') {
        cameraData = JSON.parse(cameraData);
      }
      configuratorBridge.SetupCameraSettings(cameraData);
      const isImage = view?.latest_bg?.bg_type === BACKGROUND_TYPE.IMAGE;
      resetUnityProperties();
      if (view?.latest_bg?.bg_file && view?.is_bg && isImage) {
        updateBgImageInUnity(view?.latest_bg);
      }
      if (!isImage && view?.latest_bg?.bg_color && view?.is_bg && unityElement) {
        configuratorModule.SetBackGroundImagePropertiesReceiver();
        unityElement.style.backgroundColor = view.latest_bg.bg_color;
      }
    }
  };

  const resetUnityProperties = () => {
    if (!unityElement) {
      return;
    }
    configuratorModule.SetBackGroundImagePropertiesReceiver();
    unityElement.style.removeProperty('background-image');
    unityElement.style.removeProperty('background-size');
    unityElement.style.removeProperty('background-repeat');
    unityElement.style.removeProperty('background-position');
    unityElement.style.backgroundColor = 'var(--configurator-dark25-color)';
    // configuratorModule.ResetBackgroundReceiver();
  };

  const updateBgImageInUnity = (localBgData) => {
    if (!unityElement) {
      return;
    }
    configuratorModule.SetBackGroundImagePropertiesReceiver();
    unityElement.style.removeProperty('background-color');
    if (!unityElement.style.backgroundImage?.includes('https')) {
      unityElement.style.backgroundImage = `none`;
      setTimeout(() => {
        unityElement.style.backgroundImage = `url(${localBgData?.bg_file})`;
      }, 100);
    }
    unityElement.style.backgroundPosition = `calc(50% - ${
      localBgData?.position_x || 0
    }px) calc(50% - ${localBgData?.position_y || 0}px)`;
    unityElement.style.backgroundRepeat = 'no-repeat';
  };

  const getLabelValueData = (data, valueKey = 'name', labelKey = 'name') => {
    if (!data.length) return [];
    return data.map((a) => {
      return {
        ...a,
        value: a[valueKey],
        label: a[labelKey],
      };
    });
  };

  const views = useSelector(selectCurrentSceneViews);
  const cameras = getLabelValueData([...views], 'id', 'name');

  const CustomRightArrow = ({ onClick }) => {
    return <button onClick={() => onClick()} className={styles.rightArrow}></button>;
  };

  const CustomLeftArrow = ({ onClick }) => {
    return <button onClick={() => onClick()} className={styles.leftArrow}></button>;
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      {cameras && cameras.length ? (
        <>
          <Carousel
            swipeable={false}
            draggable={true}
            responsive={responsive}
            infinite={true}
            autoPlay={false}
            keyBoardControl={true}
            customTransition="all .5"
            containerClass={'carousel-container ' + styles.containerMain}
            removeArrowOnDeviceType={['tablet', 'mobile']}
            deviceType={'laptop'}
            dotListClass="custom-dot-list-style"
            itemClass={'carousel-item-padding-40-px ' + styles.carouselClass}
            customRightArrow={<CustomRightArrow />}
            customLeftArrow={<CustomLeftArrow />}>
            {cameras.map((list, index) => {
              return (
                <div className={styles.viewList} key={index} onClick={() => handleViewClick(list)}>
                  {list.name}
                </div>
              );
            })}
          </Carousel>
        </>
      ) : null}
    </>
  );
};

export default CameraViewsList;
