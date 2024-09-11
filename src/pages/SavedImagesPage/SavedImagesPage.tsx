import React, { useContext, useEffect, useState } from 'react';
import './SavedImagesPage.scss';
import { Navigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import { SaveImgContext } from '../../context/SaveImgContex';
const SavedImagesPage = () => {
  const { fetchSavedImg, images, deleteFromSaved } = useContext(SaveImgContext);
  useEffect(() => {
    fetchSavedImg();
  }, []);
  if (!images) {
    return <Navigate to={'/'}></Navigate>;
  }
  return (
    <div className='wrapper saved__wrapper'>
      <div className='container saved__container'>
        <main className='saved'>
          <div className='saved__images'>
            {images &&
              images.map((image) => (
                <div className='saved__block'>
                  <NavLink to={`/image/${image.id}`}>
                    <div className='image'>
                      <img src={image?.url} alt='' />
                      <div className='image__dark'>
                        <div className='image__icons'>
                          <div className='image__icon'>
                            <i className='ph ph-chat-circle'></i>
                          </div>
                          <div className='image__icon'>
                            <i
                              className='ph ph-trash'
                              onClick={(
                                e: React.MouseEvent<HTMLDivElement>
                              ) => {
                                e.stopPropagation();
                                e.preventDefault();
                                deleteFromSaved(image);
                                fetchSavedImg();
                              }}></i>
                          </div>
                        </div>
                        <div className='image__tags'>{image.tags}</div>
                      </div>
                    </div>
                  </NavLink>
                </div>
              ))}
          </div>
        </main>
      </div>
    </div>
  );
};
export default SavedImagesPage;
