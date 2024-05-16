import React, { FC } from 'react';
import './ImageComponent.scss';
import { ImageType } from '../../assets/types/ImageType';

type ImageComponentProps = {
  image: ImageType;
};

const ImageComponent: FC<ImageComponentProps> = ({ image }) => {
  return (
    <div className='image'>
      <img src={image?.webformatURL} alt='' />
    </div>
  );
};

export default ImageComponent;
