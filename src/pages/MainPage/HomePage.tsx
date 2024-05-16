import React, { useEffect, useState } from 'react';

import MainBlockComponent from '../../components/MainBlockComponent/MainBlockComponent';
import NavComponent from '../../components/NavComponent/NavComponent';
import Footer from '../../components/FooterComponent/Footer';
import SearchBlock from '../../components/SearchBlock/SearchBlock';
import axios from 'axios';
import { ImageType } from '../../assets/types/ImageType';
import { apiKey } from '../../config/APIKey';

const HomePage = () => {
  let [images, setImages] = useState<null | ImageType[]>(null);
  let [tag, setTag] = useState<string>('blue');
  let [photosPerPage, setPhotoPerPage] = useState<number>(50);

  console.log(images);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?key=${apiKey}&q=${tag}&per_page=${photosPerPage}`
      );
      setImages(response.data.hits);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setTag(e.target.value);
    } else {
      setTag('blue');
    }
  };
  useEffect(() => {
    fetchData();
  }, [tag]);

  return (
    <div className='wrapper'>
      <MainBlockComponent images={images} input={handleChange} />
    </div>
  );
};

export default HomePage;
