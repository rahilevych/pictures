import React from 'react';
import MainFilters from '../MainFilters/MainFilters';
import MainContentComponent from '../MainContentComponent/MainContentComponent';
import './MainBlockComponent.scss';

type Props = {};

const MainBlockComponent = (props: Props) => {
  return (
    <main className='main'>
      <div className='container'>
        MainBlock
        <MainFilters />
        <MainContentComponent />
      </div>
    </main>
  );
};

export default MainBlockComponent;
