import cx from 'classnames';
import { SkeletonUI, SKELETON_LAYOUT } from './SkeletonLoaderUI';
import styles from './SkeletonLoaderUI.module.scss';

const ListLoaderUI = ({ className, count = 1, layout }) => {

  if(layout === SKELETON_LAYOUT.HORIZONTAL) {
    return (
      <div className={styles.horizontalLists}>
        <SkeletonUI height="32px" width="75px" count={count} />
      </div>
    )
  }

  return (
    <div className={cx(className, styles.lists)}>
      <SkeletonUI count={count} style={{ marginBottom: '0.75rem' }} />
    </div>
  )
}

export default ListLoaderUI;