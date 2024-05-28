import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.scss';
import { ImagesContextProvider } from './context/ImagesContext.tsx';
import { AuthContextProvider } from './context/AutorizationContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <AuthContextProvider>
      {' '}
      <ImagesContextProvider>
        <App />{' '}
      </ImagesContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
