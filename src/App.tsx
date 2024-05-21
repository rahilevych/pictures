import { Route, Routes } from 'react-router';
import './App.scss';
import HomePage from './pages/MainPage/HomePage';
import DetailedPage from './pages/DetailedPage/DetailedPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import Layout from './components/Layout';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ImageType } from './assets/types/ImageType';
import { apiKey } from './config/APIKey';

function App() {
  let [images, setImages] = useState<null | ImageType[]>(null);
  let [tag, setTag] = useState<string>('blue');
  let [photosPerPage, setPhotoPerPage] = useState<number>(30);
  let [amountOfPages, setAmountOfPages] = useState<number>(0);
  let [currentPage, setCurrentPage] = useState<number>(1);

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
  };

  useEffect(() => {
    fetchData();
  }, [tag, currentPage]);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setTag(e.target.value);
    } else if (e.target.value === '') {
      setTag('blue');
      setCurrentPage(1);
    }
  };

  const handlePageChange = (
    e: React.ChangeEvent<unknown>,
    value: number
  ): void => {
    setCurrentPage(value);
  };
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout input={handleInputChange} />}>
          <Route
            index
            element={
              <HomePage
                images={images}
                amountOfPages={amountOfPages}
                input={handleInputChange}
                changePage={handlePageChange}
                currentPage={currentPage}
              />
            }
          />
          <Route path='image/:id' element={<DetailedPage images={images} />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
        <Route path='registration' element={<RegistrationPage />} />
      </Routes>
    </>
  );
}

export default App;
