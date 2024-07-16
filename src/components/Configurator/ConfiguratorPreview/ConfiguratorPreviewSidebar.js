import cx from 'classnames';
import { ConfiguratorPreviewLabelsList } from './ConfiguratorPreviewLabelsList';
import { ConfiguratorPreviewScenesList } from './ConfiguratorPreviewScenesList';
import styles from './ConfiguratorPreviewSidebar.module.scss';
import { SceneDescriptionSkeleton } from './SkeletonUIElements';

export const ConfiguratorPreviewSidebar = ({
  scenePassed,
  allLabels,
  passDataToViewer,
  fromViewer,
  setNewScene,
  allScenes,
  mergedStore,
  selectedMergedStore,
  setNewMergeStore,
  setLabel
}) => {
  let scene = scenePassed;
  let isPreviewSceen = true;
  let scenes = allScenes;

  return (
    <aside
      className={cx(styles.root, isPreviewSceen && styles.previewContainer)}>
      <div
        className={cx(
          'hidden-scroll',
          styles.content,
          fromViewer ? styles.viewerContentSpacing : styles.contentSpacing
        )}>
        <h2 className={`${styles.sceneName}`}>Sizes</h2>
        {mergedStore?.length > 1 && (
          <ConfiguratorPreviewScenesList
            scenes={mergedStore}
            scenePassed={selectedMergedStore}
            fromViewer={fromViewer}
            setNewMergeStore={(val) => setNewMergeStore(val)}
            mergeStoreVal={true}
            mergedStore={mergedStore}
          />
        )}
        {scenes?.length > 1 && (
          <h2 className={`${styles.sceneName}`}>{'Hardware'}</h2>
        )}
        {scene?.description && <p className={styles.description}>{<SceneDescriptionSkeleton />}</p>}
        {scenes?.length > 1 && (
          <ConfiguratorPreviewScenesList
            scenes={scenes}
            scenePassed={scene}
            fromViewer={fromViewer}
            setNewScene={(val) => setNewScene(val)}
          />
        )}
        {scene && (
          <ConfiguratorPreviewLabelsList
            allLabels={allLabels}
            passDataToViewer={(val) => passDataToViewer(val)}
            fromViewer={fromViewer}
            setLabel={setLabel}
          />
        )}
      </div>
    </aside>
  );
};
