import { FC, useContext } from 'react';

import ImageComponent from '../ImageComponent/ImageComponent';
import './MainContentComponent.scss';
import { ImagesContext } from '../../context/ImagesContext';
// type MainContentComponentProps = {
//   images: ImageType[] | null;
// };

function MainContentComponent() {
  const { images } = useContext(ImagesContext);
  console.log(images);
  return (
    <>
      <div className='main-content'>
        {images &&
          images?.map((image, index) => (
            <ImageComponent image={image} key={index} />
          ))}
      </div>
    </>
  );
}

export default MainContentComponent;
