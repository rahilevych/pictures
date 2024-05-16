import { FC } from 'react';
import MainFilters from '../MainFilters/MainFilters';
import MainContentComponent from '../MainContentComponent/MainContentComponent';
import './MainBlockComponent.scss';
import SearchBlock from '../SearchBlock/SearchBlock';
import { ImageType } from '../../assets/types/ImageType';

type MainBlockComponentProps = {
  images: ImageType[] | null;
  input: React.ChangeEventHandler<HTMLInputElement>;
};

const MainBlockComponent: FC<MainBlockComponentProps> = ({ images, input }) => {
  return (
    <main className='main'>
      <SearchBlock input={input} />
      <div className='container main__container'>
        {/* <MainFilters /> */}
        <MainContentComponent images={images} />
      </div>
    </main>
  );
};

export default MainBlockComponent;
