import { useContext, useEffect } from 'react';
import MainBlockComponent from '../../components/MainBlockComponent/MainBlockComponent';
import { ImagesContext } from '../../context/ImagesContext';

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
