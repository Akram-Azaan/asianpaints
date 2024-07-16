import cx from 'classnames';
import Loader from '../Loader/Loader';
import styles from './InfiniteScroll.module.scss';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import { SkeletonLoaderContainer, SKELETON_LOADER_TYPE } from '../../skeletonLoaderUI/SkeletonLoaderUI';

const InfiniteScroll = ({
  loading,
  loadingType = SKELETON_LOADER_TYPE.THUMBNAIL_CARD,
  containerClassName,
  id,
  dataLength,
  next,
  hasMore,
  className,
  children,
  Component = 'div',
}) => {
  const hasData = dataLength !== 0;
  const [sentryRef] = useInfiniteScroll({
    loading,
    hasNextPage: hasMore,
    onLoadMore: next,
    // disabled: !!error,
    rootMargin: '0px 0px 400px 0px',
  });


  const loader = hasData ? (
    (loadingType)
    ?
    <SkeletonLoaderContainer 
      ref={sentryRef}
      type={loadingType}
      loading={true}
    />
    :
    <Loader
      ref={sentryRef}
      loading={true}
      position="relative"
      backdrop={false}
      className={styles.loader}
    />
  ) : null;
  
  if(loadingType) {
      return (
        <SkeletonLoaderContainer
          type={loadingType}
          loading={hasData ? false : loading}
          id={id}
          >
          <Component className={className}>{children}</Component>
          {(loading || hasMore) && loader}
        </SkeletonLoaderContainer>
      );
  }

  // const loader = hasData ? (
  //   <Loader
  //     ref={sentryRef}
  //     loading={true}
  //     position="relative"
  //     backdrop={false}
  //     className={styles.loader}
  //   />
  // ) : null;

  return (
    <Loader
      loading={hasData ? false : loading}
      position="relative"
      backdrop={false}
      className={cx(styles.container, containerClassName)}
      id={id}>
      <Component className={className}>{children}</Component>
      {(loading || hasMore) && loader}
    </Loader>
  );

};

export default InfiniteScroll;
