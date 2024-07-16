import { Image } from '../../../common';
import styles from './ConfiguratorPreviewScenesList.module.scss';
import cx from 'classnames';

export const ConfiguratorPreviewScenesList = ({ scenes, scenePassed, fromViewer, setNewScene,
  setNewMergeStore, mergeStoreVal, mergedStore }) => {

  const selectingScene = (val) => {
    if (mergeStoreVal) {
      setNewMergeStore(val)
    } else {
      setNewScene(val)
    }
  }
  return (
    <div className={styles.cardList}>
      {scenes.map((scene) => {
        return (
          <SceneCard
            scene={scene}
            key={scene.id}
            scenePassed={scenePassed}
            fromViewer={fromViewer}
            setNewScene={(val) => selectingScene(val)}
            scenes={scenes}
          />
        );
      })}
    </div>
  );
};

const SceneCard = ({ scene, scenePassed, fromViewer, setNewScene, scenes }) => {

  const selectNewScene = () => {
    setNewScene(scene);
  };
  const thumbnail = scene.thumb;
  let selected = scene?.id === scenePassed?.id;

  return (
    <>
      {fromViewer && (
        <div className={styles.card} onClick={() => selectNewScene()}>
          <Image src={thumbnail} rounded={false} ratio={1.689} iconFontSize={18} placeholderWhileLoading />
          <h5
            className={cx(styles.cardTitle, selected && styles.textSelected)}>
            {scene.name}
          </h5>
        </div>
      )}
    </>
  );
};
