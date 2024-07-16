import Skeleton from 'react-loading-skeleton';

export const SceneTitleSkeleton = () => {
  return <Skeleton count={1} width="72%" height={16} />;
};

export const SceneDescriptionSkeleton = () => {
  return <Skeleton count={1} width="43%" height={10} />;
};

export const SceneLabelsSkeleton = () => {
  return (
    <div
      style={{ padding: '16px 12px', marginBottom: 15, border: '1px solid #eee', borderRadius: 2 }}>
      <Skeleton count={1} width="50%" height={10} style={{ marginBottom: 16 }} />

      <div style={{ display: 'flex', gap: 7 }}>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  );
};

export const CardSkeleton = () => {
  return (
    <div style={{ width: '100%' }}>
      <Skeleton count={1} width="100%" height={56} style={{ marginBottom: 6 }} />
      <Skeleton count={1} width="80%" height={6} />
    </div>
  );
};
