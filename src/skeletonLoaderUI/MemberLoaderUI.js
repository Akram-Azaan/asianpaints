import cx from 'classnames';
import { SkeletonUI } from './SkeletonLoaderUI';
import styles from './SkeletonLoaderUI.module.scss';

const MemberLoaderUI = ({ className }) => {

  const noOfMemberCard = Math.round((window.innerHeight - 150) / 70);
  const placeholder = Array.from(Array(noOfMemberCard).keys()).map(a => {
    return (
      <div key={a} className={cx(className, styles.member)}>
        <SkeletonUI width="32px" height="32px" count={1} />
        <SkeletonUI width="126px" count={1} />
      </div>
    )
  })

  return placeholder
}

export default MemberLoaderUI;