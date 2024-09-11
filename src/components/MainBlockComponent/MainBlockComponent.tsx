import { FC, useContext } from 'react';
import MainContentComponent from '../MainContentComponent/MainContentComponent';
import './MainBlockComponent.scss';
import { ImageType } from '../../types/ImageType';
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
  const { currentPage, amountOfPages, setCurrentPage, error } =
    useContext(ImagesContext);

  const handlePageChange = (
    e: React.ChangeEvent<unknown>,
    value: number
  ): void => {
    setCurrentPage(value);
  };
  return (
    <main className='main'>
      <div className='container main__container'>
        <SearchComponent />

        {!error ? (
          <>
            <MainContentComponent />
            <div className='pagination'>
              <Pagination
                count={amountOfPages}
                showFirstButton
                showLastButton
                onChange={handlePageChange}
                page={currentPage}
                sx={{
                  '& .MuiPaginationItem-root': {
                    color: 'white',
                    backgroundColor: 'rgb(17, 27, 67)',
                  },
                  '& .MuiPaginationItem-root:hover': {
                    color: 'white',
                    backgroundColor: '#778bdc',
                  },
                  '& .Mui-selected': {
                    color: 'white',
                    backgroundColor: '#1b2b6c',
                  },
                }}
              />
            </div>
          </>
        ) : (
          <div className='main__error'>
            <p>{error}</p>
            <i className='ph ph-smiley-sad'></i>
          </div>
        )}
      </div>
    </main>
  );
};

export default MainBlockComponent;
