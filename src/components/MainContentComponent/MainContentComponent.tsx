import { useContext } from 'react';

import ImageComponent from '../ImageComponent/ImageComponent';
import './MainContentComponent.scss';
import { ImagesContext } from '../../context/ImagesContext';

function MainContentComponent() {
  const { images, error } = useContext(ImagesContext);
  console.log(images);
  return (
    <>
      <div className='main-content'>
        {images && images?.length > 0
          ? images?.map((image, index) => (
              <ImageComponent image={image} key={index} />
            ))
          : error && <div className='main-content__err'>{error}</div>}
      </div>
    </>
  );
}

export default MainContentComponent;
