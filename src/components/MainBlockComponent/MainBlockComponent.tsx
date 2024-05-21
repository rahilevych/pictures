import { FC } from 'react';
import MainContentComponent from '../MainContentComponent/MainContentComponent';
import './MainBlockComponent.scss';
import SearchBlock from '../SearchBlock/SearchBlock';
import { ImageType } from '../../assets/types/ImageType';
import { Pagination, Typography } from '@mui/material';

type MainBlockComponentProps = {
  images: ImageType[] | null;
  input: React.ChangeEventHandler<HTMLInputElement>;
  amountOfPages: number;
  changePage(e: React.ChangeEvent<unknown>, value: number): void;
  currentPage: number;
};

const MainBlockComponent: FC<MainBlockComponentProps> = ({
  images,
  input,
  amountOfPages,
  changePage,
  currentPage,
}) => {
  return (
    <main className='main'>
      {/* <SearchBlock input={input} /> */}
      <div className='container main__container'>
        {/* <MainFilters /> */}
        <MainContentComponent images={images} />

        <div className='pagination'>
          <Pagination
            count={amountOfPages}
            showFirstButton
            showLastButton
            onChange={changePage}
            page={currentPage}
          />
        </div>
      </div>
    </main>
  );
};

export default MainBlockComponent;
