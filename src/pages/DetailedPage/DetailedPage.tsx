import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { ImageType } from '../../assets/types/ImageType';

type DetailedPageProps = {
  images: ImageType[] | null;
};

const DetailedPage: FC<DetailedPageProps> = ({ images }) => {
  const { id } = useParams();
  const img = images?.find((image) => image.id === Number(id));

  return (
    <main className='details-block'>
      <div className='details-block__descr'>
        <div className='details-block__img'>
          <img src={img?.largeImageURL} alt='' />
        </div>
        <div className='details-block__info'>
          <div className='details-block__row'>
            <p>Views</p>
            <p>{img?.views}</p>
          </div>
          <div className='details-block__row'>
            <p>Downloads</p>
            <p>{img?.downloads}</p>
          </div>
          <div className='details-block__row'>
            <p>Likes</p>
            <p>{img?.likes}</p>
          </div>
        </div>
      </div>
      <div className='details-block__coments'></div>
    </main>
  );
};

export default DetailedPage;
