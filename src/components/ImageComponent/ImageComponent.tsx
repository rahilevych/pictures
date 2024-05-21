import React, { FC } from 'react';
import './ImageComponent.scss';
import { ImageType } from '../../assets/types/ImageType';
import { NavLink } from 'react-router-dom';

type ImageComponentProps = {
  image: ImageType;
};

const ImageComponent: FC<ImageComponentProps> = ({ image }) => {
  return (
    <NavLink to={`/image/${image.id}`}>
      <div className='image'>
        <img src={image?.webformatURL} alt='' />
      </div>
    </NavLink>
  );
};

export default ImageComponent;
