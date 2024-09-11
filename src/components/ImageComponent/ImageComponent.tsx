import React, { FC, useContext } from 'react';
import './ImageComponent.scss';
import { ImageType } from '../../types/ImageType';
import { NavLink } from 'react-router-dom';
import { auth } from '../../config/firebase';
import { AuthContext } from '../../context/AutorizationContext';

import { SaveImgContext } from '../../context/SaveImgContex';
import toast from 'react-hot-toast';

type ImageComponentProps = {
  image: ImageType;
};

const ImageComponent: FC<ImageComponentProps> = ({ image }) => {
  const { isLoggedIn } = useContext(AuthContext);
  const { addToSaved } = useContext(SaveImgContext);
  const addedNotify = () => toast.success('Image added to favorites');
  const errorNotify = () => toast.error('Error adding image to favorites:');
  const loggNotify = () =>
    toast.error('User must be logged in to add to favorites');
  const handleAddToFavorites = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    console.log(auth.currentUser?.uid);
    if (image && isLoggedIn) {
      addToSaved({
        url: image?.largeImageURL,
        tags: image?.tags,
        id: image.id.toString(),
      })
        .then(() => {
          addedNotify();
        })
        .catch(() => {
          errorNotify();
        });
    } else {
      loggNotify();
    }
  };

  return (
    <NavLink to={`/image/${image.id}`}>
      <div className='image'>
        <img src={image?.webformatURL} alt='' />
        <div className='image__dark'>
          <div className='image__icons'>
            <div className='image__icon'>
              <i
                className='ph ph-bookmark-simple book'
                onClick={handleAddToFavorites}></i>
            </div>
            <div className='image__icon'>
              <i className='ph ph-chat-circle'></i>
            </div>
          </div>
          <div className='image__tags'>{image.tags}</div>
        </div>
      </div>
    </NavLink>
  );
};

export default ImageComponent;
