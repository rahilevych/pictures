import React, { FC } from 'react';
import NavComponent from '../NavComponent/NavComponent';
import './SearchBlock.scss';
import SearchComponent from '../SearchComponent/SearchComponent';

type SearchBlockProps = {
  input: React.ChangeEventHandler<HTMLInputElement>;
};

const SearchBlock: FC<SearchBlockProps> = ({ input }) => {
  return (
    <header className='search-block'>
      <div className='container search-block__container'>
        <SearchComponent input={input} />
      </div>
    </header>
  );
};

export default SearchBlock;
