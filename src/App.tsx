import { Route, Routes } from 'react-router';
import './App.scss';
import HomePage from './pages/MainPage/HomePage';
import DetailedPage from './pages/DetailedPage/DetailedPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='image' element={<DetailedPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
        <Route path='registration' element={<RegistrationPage />} />
      </Routes>
    </>
  );
}

export default App;
