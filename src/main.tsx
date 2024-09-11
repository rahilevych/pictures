import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.scss';
import { ImagesContextProvider } from './context/ImagesContext.tsx';
import { AuthContextProvider } from './context/AutorizationContext.tsx';
import { CommentsProvider } from './context/CommentsContext.tsx';
import {
  SaveImgContext,
  SaveImgContextProvider,
} from './context/SaveImgContex.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <AuthContextProvider>
      <CommentsProvider>
        <ImagesContextProvider>
          <SaveImgContextProvider>
            {' '}
            <App />
          </SaveImgContextProvider>
        </ImagesContextProvider>
      </CommentsProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
