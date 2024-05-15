import React from 'react';
import MainFilters from '../MainFilters/MainFilters';
import MainContentComponent from '../MainContentComponent/MainContentComponent';

type Props = {};

const MainBlockComponent = (props: Props) => {
  return (
    <main className='main'>
      <div className='container'>
        <MainFilters />
        <MainContentComponent />
      </div>
    </main>
  );
};

export default MainBlockComponent;
