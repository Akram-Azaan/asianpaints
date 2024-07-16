import React from 'react';
import styles from './ConfiguratorViewer.module.scss';
// import { RenderPreviewProgressBar } from '../Preview/RenderPreviewProgressBar';

export const ConfiguratorViewerFooter = ({
  isRender,
  isOpenedFromAdminPanel,
  updateViewerDataParent,
}) => {
  // const switchViewsInParent = async (str) => {
  //   updateViewerDataParent(str === 'render');
  // };

  return (
    <div className={`${styles.footerParent} px-3`}>
      <div className="h-100 d-flex justify-content-start align-items-center">
        <p className={`${styles.footerText} mb-0`}>
          {isRender ? 'Experience you will have on website' : 'Previews are for visualization only'}
        </p>
      </div>
      <div className="h-100 d-none d-md-block d-lg-block">
        {/* <div className="h-100 d-flex justify-content-end align-items-center">
          {!isOpenedFromAdminPanel && (
            <RenderPreviewProgressBar
              isViewerScreen={true}
              isRenderViewer={isRender}
              switchViewsInParent={(text) => switchViewsInParent(text)}
            />
          )}
        </div> */}
      </div>
    </div>
  );
};
