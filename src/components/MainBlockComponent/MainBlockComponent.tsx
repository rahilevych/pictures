import { FC, useContext } from 'react';
import MainContentComponent from '../MainContentComponent/MainContentComponent';
import './MainBlockComponent.scss';
import { ImageType } from '../../assets/types/ImageType';
import { Pagination, Typography } from '@mui/material';
import { ImagesContext } from '../../context/ImagesContext';
import SearchComponent from '../SearchComponent/SearchComponent';

// type MainBlockComponentProps = {
//   images: ImageType[] | null;
//   input: React.ChangeEventHandler<HTMLInputElement>;
//   amountOfPages: number;
//   changePage(e: React.ChangeEvent<unknown>, value: number): void;
//   currentPage: number;
// };

const MainBlockComponent = () => {
  const { currentPage, amountOfPages, handlePageChange } =
    useContext(ImagesContext);
  return (
    <main className='main'>
      {/* <SearchBlock input={input} /> */}
      <div className='container main__container'>
        <SearchComponent />
        <MainContentComponent /*images={images} */ />

        <div className='pagination'>
          <Pagination
            count={amountOfPages}
            showFirstButton
            showLastButton
            onChange={handlePageChange}
            page={currentPage}
          />
        </div>
      </div>
    </main>
  );
};

export default MainBlockComponent;
