// import { isEmpty } from 'lodash';
import { SceneLabelsSkeleton } from './SkeletonUIElements';
import { OPTION_TYPE } from '../../../constants/productConfiguratorConstants';
import { Image } from '../../../common';
import styles from './ConfiguratorPreviewLabelsList.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import {
  getNextLabelPage, selectSortedLabelOptions
} from '../../../redux/slicers/viewer.slicers';
import { dispatcher } from '../../../helpers/jsHelper';
import { getOptionsDataInPrototype } from '../../../api/configuratorApi';
import InfiniteScroll from '../../InfiniteScroll/InfiniteScroll';
import { fetchMoreOptions } from '../../../helpers/viewerHelper';

export const ConfiguratorPreviewLabelsList = ({ allLabels, passDataToViewer, fromViewer, setLabel }) => {
  let labels = allLabels;
  let labelsLoaded = true;
  let labelsLoading = false;
  let isPreviewPage = true;

  if (!labelsLoaded || labelsLoading) {
    return (
      <>
        <SceneLabelsSkeleton />
        <SceneLabelsSkeleton />
      </>
    );
  }

  return (
    <>
      {!!labels?.length && labels.map((label) => (
        <Label
          label={label}
          key={label.id}
          isPreviewPage={isPreviewPage}
          allLabels={labels}
          setLabel={setLabel}
          passDataToViewer={(val) =>
            passDataToViewer({
              option: val.option,
              label: val.label,
              is_disabled: label.is_disabled,
            })
          }
        />
      ))}
    </>
  );
};

const Label = ({ label, isPreviewPage, passDataToViewer, allLabels, setLabel }) => {
  // let options = label.textures;
  let options = useSelector(selectSortedLabelOptions(label.id, { is_enable: true }));
  const _labelNextPage = useSelector(getNextLabelPage(label.id));
  const dispatch = useDispatch();
  let apiUsed = null;
  // const dataApi = async () => {
  //   return await dispatch(getOptionsDataInPrototype({
  //     optionId: label?.id,
  //     token: label?.token,
  //     storeId: label?.storeId,
  //     page: _labelNextPage,
  //   }))
  // }
  // apiUsed = dataApi

  const getPreviewPageContent = () => {
    return (
      <>
        <h4 className={styles.title}>{label.name}</h4>
        <div className={styles.labelRoot} id="infinteScroll-previewpage-side-label-options">
          <InfiniteScroll
            dataLength={options?.length}
            next={() =>
              fetchMoreOptions(
                _labelNextPage,
                dispatch,
                label,
                allLabels,
                setLabel,
                options,
                null,
                apiUsed,
                true
              )
            }
            hasMore={_labelNextPage}
            loading={false}
            containerClassName="configurator-infinte-scroll-min-height-auto"
            hasChildren={true}
            loadingType={null}
            scrollableTarget="infinteScroll-previewpage-side-label-options">
            <div className={styles.cardList}>
              {!!options?.length && options.map((option) => {
                return (
                  <OptionCard
                    option={option}
                    options={options}
                    key={option.id}
                    labelId={label.id}
                    isPreviewPage={isPreviewPage}
                    passDataToViewer={(val) => passDataToViewer(val)}
                  />
                );
              })}
            </div>
          </InfiniteScroll>
        </div>
      </>
    );
  };

  return <>{getPreviewPageContent()}</>;
};

const OptionCard = ({ option, options, labelId, isPreviewPage, passDataToViewer }) => {

  const sendSelectedDataToViewer = () => {
    passDataToViewer({ option: option.id, label: labelId });
  };

  const getPreviewPageContent = () => {
    return (
      <div className={styles.card} onClick={() => sendSelectedDataToViewer()}>
        <div className={styles.thumbnailContainer}>
          {option?.color_code && (
            <div className={styles.thumbnailColor} style={{ backgroundColor: option.color_code }} />
          )}
          {!option?.color_code && (
            <Image
              src={
                option?.texture_type === OPTION_TYPE.COLOR
                  ? null
                  : option?.texture_type === OPTION_TYPE.TEXTURE
                    ? option?.texture_data?.thumbnail || option?.thumb
                    : option?.thumb || option?.material_data?.thumbnail
              }
              ratio={1.149}
              rounded={false}
              iconFontSize={18}
              placeholderWhileLoading
            />
          )}
        </div>
        <h5 className={styles.cardTitle} title={option.display_name}>
          {option.display_name}
        </h5>
      </div>
    );
  };

  return <>{getPreviewPageContent()}</>;
};
