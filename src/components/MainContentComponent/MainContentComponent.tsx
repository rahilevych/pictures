import { FC } from 'react';
import { ImageType } from '../../assets/types/ImageType';
import ImageComponent from '../ImageComponent/ImageComponent';
import './MainContentComponent.scss';
type MainContentComponentProps = {
  images: ImageType[] | null;
};

const MainContentComponent: FC<MainContentComponentProps> = ({ images }) => {
  console.log(images?.length);
  return (
    <div className='main-content'>
      {images &&
        images?.map((image, index) => (
          <ImageComponent image={image} key={index} />
        ))}
    </div>
  );
};

export default MainContentComponent;
