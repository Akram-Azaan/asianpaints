import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import ListLoaderUI from './ListLoaderUI';
import FilterLoaderUI from './FilterLoaderUI';
import { forwardRef } from 'react';
import MemberLoaderUI from './MemberLoaderUI';


export const SKELETON_LOADER_TYPE = {
  NOTIFICATION: 1,
  THUMBNAIL_CARD: 2,
  SMALL_THUMBNAIL_CARD: 3,
  LIST: 4,
  FILTER: 5,
  MEMBER: 6,
}

export const SKELETON_CARD_SIZE = {
  SMALL: 1,
}

export const SKELETON_LAYOUT = {
  HORIZONTAL: 1,
  VERTICAL: 2,
  GRID: 3,
}

const SkeletonLoaderUI = ({ containerStyle, className, type, size, count = 1, layout = SKELETON_LAYOUT.VERTICAL, renderOne }) => {

  if(!type) return;

  if(type === SKELETON_LOADER_TYPE.LIST) {
    return <ListLoaderUI className={className} count={count} layout={layout} />
  } else if(type === SKELETON_LOADER_TYPE.FILTER) {
    return <FilterLoaderUI className={className} count={count} layout={layout} />
  } else if(type === SKELETON_LOADER_TYPE.MEMBER) {
    return <MemberLoaderUI className={className} count={count} layout={layout} />
  }
  
}

export default SkeletonLoaderUI


export const SkeletonUI = (props) => {
  return (
    <SkeletonTheme
      baseColor="#d9d9d9"
      highlightColor="#bbb"
      borderRadius="8px"
    >
      <Skeleton {...props} />
    </SkeletonTheme>
  )
}

export const SkeletonLoaderContainer = forwardRef(({
  type,
  loading,
  position,
  as,
  size,
  children,
  ...rest
},
ref
) => {

  if (!loading && !children) return null;
    const Component = as || 'div';
    const render = (
      <Component
        {...rest}
        ref={ref}
      >
        {children}
        {
          loading
          &&
          <SkeletonLoaderUI type={type} layout={SKELETON_LAYOUT.GRID} containerStyle={!children ? { marginTop: '1.5rem' } : {}} />
        }
      </Component>
    );

    return render;
});