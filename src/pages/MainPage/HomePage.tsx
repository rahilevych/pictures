import React, { FC, useEffect, useState } from 'react';

import MainBlockComponent from '../../components/MainBlockComponent/MainBlockComponent';
import NavComponent from '../../components/NavComponent/NavComponent';
import Footer from '../../components/FooterComponent/Footer';
import SearchBlock from '../../components/SearchBlock/SearchBlock';
import axios from 'axios';
import { ImageType } from '../../assets/types/ImageType';
import { apiKey } from '../../config/APIKey';
import { useParams } from 'react-router';

type HomePageProps = {
  images: ImageType[] | null;
  amountOfPages: number;

  input: React.ChangeEventHandler<HTMLInputElement>;

  changePage(e: React.ChangeEvent<unknown>, value: number): void;
  currentPage: number;
};

const HomePage: FC<HomePageProps> = ({
  images,
  amountOfPages,
  input,
  changePage,
  currentPage,
}) => {
  // let [images, setImages] = useState<null | ImageType[]>(null);
  // let [tag, setTag] = useState<string>('blue');
  //let [photosPerPage, setPhotoPerPage] = useState<number>(30);
  // let [amountOfPages, setAmountOfPages] = useState<number>(0);
  //let [currentPage, setCurrentPage] = useState<number>(1);
  /*
  console.log(images);
  console.log(currentPage);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?key=${apiKey}&q=${tag}&per_page=${photosPerPage}&page=${currentPage}`
      );
      setImages(response.data.hits);
      console.log(response.data);
      setAmountOfPages(Math.ceil(response.data.totalHits / photosPerPage));
    } catch (error) {
      console.log(error);
    }
  };*/
  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.value) {
  //     setTag(e.target.value);
  //   } else if (e.target.value === '') {
  //     setTag('blue');
  //     setCurrentPage(1);
  //   }
  // };

  // const handlePageChange = (
  //   e: React.ChangeEvent<unknown>,
  //   value: number
  // ): void => {
  //   setCurrentPage(value);
  // };
  /*
  useEffect(() => {
    fetchData();
  }, [tag, currentPage]);*/

  return (
    <div className='wrapper'>
      <MainBlockComponent
        images={images}
        input={input}
        amountOfPages={amountOfPages}
        changePage={changePage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default HomePage;
