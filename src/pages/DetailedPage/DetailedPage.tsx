import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { ImageType } from '../../assets/types/ImageType';
import './DetailedPage.scss';

type DetailedPageProps = {
  images: ImageType[] | null;
};

const DetailedPage: FC<DetailedPageProps> = ({ images }) => {
  const { id } = useParams();
  const img = images?.find((image) => image.id === Number(id));

  return (
    <div className='wrapper details__wrapper'>
      <div className='container details__container'>
        <main className='details'>
          <div className='details__descr'>
            <div className='details__img'>
              <img src={img?.largeImageURL} alt='' />
            </div>
            <div className='details__info'>
              <div className='details__row'>
                <div className='details__icon'>
                  <i className='ph ph-heart-straight'></i>
                </div>
                <div className='details__icon'>
                  <i className='ph ph-bookmark-simple'></i>
                </div>
                <div className='details__icon'>
                  <i className='ph ph-share-network'></i>
                </div>
              </div>
              <div className='details__row'>
                <p>Views</p>
                <p>{img?.views}</p>
              </div>
              <div className='details__row'>
                <p>Downloads</p>
                <p>{img?.downloads}</p>
              </div>
              <div className='details__row'>
                <p>Likes</p>
                <p>{img?.likes}</p>
              </div>
              <div className='details__row'>
                <p>Comments</p>
                <p>{img?.comments}</p>
              </div>
              <div className='details__row'>
                <div className='details__user-img'>
                  <img src={img?.userImageURL} alt='' />
                </div>
                <p className='details__user'>{img?.user}</p>
              </div>
            </div>
          </div>
          <div className='details__coments'></div>
        </main>
      </div>
    </div>
  );
};

export default DetailedPage;
