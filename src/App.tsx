import { Route, Routes } from 'react-router';
import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import DetailedPage from './pages/DetailedPage/DetailedPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import RegistrationPage from './pages/AutorizationPage/AutorizationPage';
import Layout from './components/Layout';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { ImageType } from './assets/types/ImageType';
import { apiKey } from './config/APIKey';
import { ImagesContext, ImagesContextProvider } from './context/ImagesContext';
import AutorizationPage from './pages/AutorizationPage/AutorizationPage';
import SignUpComponent from './components/SignUpComponent/SignUpComponent';
import LogInComponent from './components/LogInComponent/LogInComponent';

function App() {
  const { images } = useContext(ImagesContext);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='image/:id' element={<DetailedPage images={images} />} />
        <Route path='*' element={<NotFoundPage />} />
        <Route path='registration' element={<AutorizationPage />} />
      </Route>
    </Routes>
  );
}

export default App;
