import { Route, Routes } from 'react-router';
import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import DetailedPage from './pages/DetailedPage/DetailedPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Layout from './components/Layout';
import SavedImagesPage from './pages/SavedImagesPage/SavedImagesPage';
import { Toaster } from 'react-hot-toast';
import AuthPage from './pages/AuthPage/AuthPage';

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='image/:id' element={<DetailedPage />} />
          <Route path='*' element={<NotFoundPage />} />
          <Route path='registration' element={<AuthPage />} />
          <Route path='saved/' element={<SavedImagesPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
