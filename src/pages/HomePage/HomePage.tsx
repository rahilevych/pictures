import React, { FC, useContext, useEffect, useState } from 'react';

import MainBlockComponent from '../../components/MainBlockComponent/MainBlockComponent';
import { ImageType } from '../../assets/types/ImageType';
import { ImagesContext } from '../../context/ImagesContext';

// type HomePageProps = {
//   images: ImageType[] | null;
//   amountOfPages: number;

//   input: React.ChangeEventHandler<HTMLInputElement>;

//   changePage(e: React.ChangeEvent<unknown>, value: number): void;
//   currentPage: number;
// };

function HomePage() {
  const { fetchData, tag, currentPage } = useContext(ImagesContext);
  useEffect(() => {
    fetchData();
  }, [tag, currentPage]);

  return (
    <div className='wrapper'>
      <MainBlockComponent />
    </div>
  );
}

export default HomePage;
