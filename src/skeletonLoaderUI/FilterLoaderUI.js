import cx from 'classnames';
import { SkeletonUI, SKELETON_LAYOUT } from './SkeletonLoaderUI';
import styles from './SkeletonLoaderUI.module.scss';

const FilterLoaderUI = ({ className, layout }) => {

  const noOfFilterCard = Math.round((window.innerHeight - 128) / 150);

  const placeholder = Array.from(Array(noOfFilterCard).keys()).map(a => {
    return (
      <div key={a} className={cx(className, styles.filter)}>
        <SkeletonUI count={1} width="100px" style={{ marginBottom: '0.75rem' }} />
        
        <div className={styles.inline}>
          <SkeletonUI count={3} width="24px" height="24px" style={{ marginTop: '8px', marginRight: '1rem' }} />
          <SkeletonUI count={3} width="160px" height="20px" style={{ marginTop: '8px', marginBottom: '4px' }} />
        </div>
      </div>
    )
  })

  return placeholder
}

export default FilterLoaderUI;