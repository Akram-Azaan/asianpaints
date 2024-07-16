import React, { useState } from 'react';
import cx from 'classnames';
import styles from './ConfiguratorTemplate.module.scss';

import Accordion from 'react-bootstrap/Accordion';
import { ConfiguratorPreviewScenesListCarousel } from '../ConfiguratorPreview/ConfiguratorPreviewSceneListCarousel';
import { ConfiguratorPreviewLabelsListCarousel } from '../ConfiguratorPreview/ConfiguratorPreviewLabelsListCarousel';
import { Image } from '../../../common';
import { OPTION_TYPE } from '../../../constants/productConfiguratorConstants';

export const TemplateSidebarContent = ({
  scenePassed,
  allLabels,
  passDataToViewer,
  isPreviewScreen,
  selectNewScene,
  allScenes,
}) => {
  let scene = allScenes[0];
  let scenes = allScenes;
  let labels = allLabels;
  labels = labels.filter((l) => l.is_enable);
  const [accordionEvent, setAccordionEvent] = useState();
  let isPreviewPage = true;

  // This function and timeout is added to load re-render carousel after accordion opens.
  // By default the carousel does not renders on opening accordion
  const handleAccordionClick = (e) => {
    setTimeout(() => {
      setAccordionEvent(e);
    }, 200);
  };

  return (
    <div
      className={`${styles.outerContainer} h-100`}
      onMouseOver={(e) => {
        if (isPreviewPage) return;
      }}>
      <div className={`h-100 ${cx('hidden-scroll', styles.content, styles.overflowYauto)}`}>
        <Accordion>
          {scenes?.length > 1 && (
            <Accordion.Item eventKey="0" style={{ backgroundColor: 'transparent', border: 0 }}>
              <Accordion.Header className={styles.accordionBtn} onClick={handleAccordionClick}>
                <div className="d-flex" style={{ width: 'calc(100% - 25px)' }}>
                  <div className={styles.leftContent}>
                    <Image
                      src={scene?.thumb || undefined}
                      ratio={1}
                      rounded={false}
                      iconFontSize={18}
                      placeholderWhileLoading
                      className="h-100"
                    />
                  </div>
                  <div
                    className={`px-2 ${styles.rightContent} d-flex flex-column justify-content-center align-items-start`}>
                    <span className={`${styles.tabHead} w-100 ellipsis`}>CONFIGURATION</span>
                    <p className={`${styles.tabDesc} ellipsis w-100 mb-0`}>
                      <b>{scene?.name}</b>
                    </p>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <ConfiguratorPreviewScenesListCarousel
                  scenes={scenes}
                  accordionEvent={accordionEvent}
                  isPreviewScreen={isPreviewScreen}
                  scenePassed={scenePassed}
                  selectNewScene={(val) => selectNewScene(val)}
                />
              </Accordion.Body>
            </Accordion.Item>
          )}
          {scene && labels && labels.length
            ? labels.map((label, index) => {
                return (
                  <Accordion.Item
                    eventKey={index + 1 + ''}
                    key={index}
                    style={{ backgroundColor: 'transparent', border: 0 }}>
                    <Accordion.Header
                      className={styles.accordionBtn}
                      onClick={handleAccordionClick}>
                      <div className="d-flex" style={{ width: 'calc(100% - 25px)' }}>
                        <div className={styles.leftContent}>
                          <SelectedOptionImage label={label} allLabels={allLabels} />
                        </div>
                        <div
                          className={`px-2 ${styles.rightContent} d-flex flex-column justify-content-center align-items-start`}>
                          <span className={`${styles.tabHead} w-100 ellipsis`}>{label.name}</span>
                          <p className={`${styles.tabDesc} ellipsis mb-0 w-100`}>
                            <b>
                              <SelectedOption label={label} allLabels={allLabels} />
                            </b>
                          </p>
                        </div>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body className={styles.accordionBodyClass}>
                      <ConfiguratorPreviewLabelsListCarousel
                        selectedLabel={label}
                        accordionEvent={accordionEvent}
                        allLabels={allLabels}
                        passDataToViewer={(val) => passDataToViewer(val)}
                        isPreviewScreen={isPreviewScreen}
                      />
                    </Accordion.Body>
                  </Accordion.Item>
                );
              })
            : ''}
        </Accordion>
      </div>
    </div>
  );
};

const SelectedOption = ({ label, allLabels }) => {
  let option;
  if (allLabels?.length) {
    let currentLabel = allLabels.find((previewLabel) => previewLabel.id === label.id);
    if (currentLabel.selectedTexture) {
      option = currentLabel.selectedTexture;
    } else if (currentLabel?.textures?.length) {
      option = currentLabel?.textures[0];
    }
  }
  return <>{option && option.id ? option.display_name : ''}</>;
};

const SelectedOptionImage = ({ label, allLabels }) => {
  let option;
  if (allLabels?.length) {
    let currentLabel = allLabels.find((previewLabel) => previewLabel.id === label.id);
    if (currentLabel.selectedTexture) {
      option = currentLabel.selectedTexture;
    } else if (currentLabel?.textures?.length) {
      option = currentLabel?.textures[0];
    }
  }
  let styleObj = {};
  if (option?.color_code) {
    styleObj = { backgroundColor: option.color_code };
  }
  return (
    <div className={styles.accImage} style={styleObj}>
      {!option?.color_code && (
        <Image
          src={
            option?.texture_type === OPTION_TYPE.COLOR
              ? null
              : option?.texture_type === OPTION_TYPE.TEXTURE
              ? option?.texture_data?.thumbnail || option?.thumb
              : option?.thumb || option?.material_data?.thumbnail
          }
          ratio={1}
          rounded={false}
          iconFontSize={18}
          placeholderWhileLoading
          style={{ height: '100%' }}
        />
      )}
    </div>
  );
};
