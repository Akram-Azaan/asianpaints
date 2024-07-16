import cx from 'classnames';
import { useState } from 'react';
import FileInput from '../../FileInput/FileInput';
import PlusIconV2 from '../../icons/PlusIconV2';
import Loader from '../../Loader/Loader';
import { CropImageDialog } from '../../../common/CropImageDialog/CropImageDialog';
import styles from './ImagePicker.module.scss';
import { ButtonV2 } from '../../ButtonV2/ButtonV2';

export const ImagePicker = ({
  onFileSelect,
  onFileCrop,
  onReset,
  image,
  croppedImage,
  crop,
  aspectRatio,
}) => {
  const [loading, setLoading] = useState(false);
  const [cropDialogOpened, setCropDialogOpened] = useState(false);

  const handleFileSelect = async (file) => {
    // TODO: file validation
    setLoading(true);
    await onFileSelect({ file });
    setLoading(false);
  };

  const shouldUseFilePicker = !image || (image && !crop);
  const ContainerComponet = shouldUseFilePicker ? FileInput : 'div';
  const containerProps = {
    className: cx(styles.root, loading && styles.loading, image && styles.withImage),
  };

  const accept = 'image/png,image/jpeg';

  if (shouldUseFilePicker) {
    containerProps.onFileSelect = handleFileSelect;
    containerProps.accept = accept;
  } else {
    containerProps.onClick = () => setCropDialogOpened(true);
  }

  const handleSaveCrop = async (data) => {
    setCropDialogOpened(false);
    setLoading(true);
    await onFileCrop(data);
    setLoading(false);
  };

  const onResetClick = (e) => {
    e?.stopPropagation();
    onReset && onReset();
  };

  return (
    <>
      <ContainerComponet {...containerProps}>
        {!loading && !image && (
          <>
            <span className={styles.button}>
              <PlusIconV2 />
            </span>
            Add an image
          </>
        )}
        {image && <img src={crop ? croppedImage : image} className={styles.selectedImage} alt=""/>}
        {loading && <Loader loading thickness={2} />}
        {onReset && !loading && (
          <div
            className={`${styles.overlap} ${
              !image && 'bg-white'
            } w-100 h-100 d-flex flex-column justify-content-center align-items-center`}>
            {
              <ButtonV2 color="dark" size="sm" className="mb-2 position-relative pointer">
                Select
                <ContainerComponet
                  {...containerProps}
                  className={styles.hidden}></ContainerComponet>
              </ButtonV2>
            }
            {image && (
              <ButtonV2 color="dark" onClick={onResetClick} size="sm">
                Remove
              </ButtonV2>
            )}
          </div>
        )}
      </ContainerComponet>
      {crop && cropDialogOpened && (
        <CropImageDialog
          show={cropDialogOpened}
          image={image}
          aspectRatio={aspectRatio}
          onClose={() => setCropDialogOpened(false)}
          onSave={handleSaveCrop}
          accept={accept}
          onFileSelect={handleFileSelect}
        />
      )}
    </>
  );
};
