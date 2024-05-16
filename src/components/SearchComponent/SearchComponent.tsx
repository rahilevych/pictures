import { FC } from 'react';
import './SearchComponent.scss';
type SearchComponentProps = {};

const SearchComponent: FC<SearchComponentProps> = () => {
  return (
    <div className='search'>
      <i className='ph ph-magnifying-glass search__icon'></i>
      <input type='text' className='search__input' placeholder='Search' />
      <button className='search__btn'>
        All images <i className='ph ph-caret-down '></i>
      </button>
    </div>
  );
};

export default SearchComponent;
