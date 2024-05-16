import { FC } from 'react';
import './SearchComponent.scss';
type SearchComponentProps = {};

const SearchComponent: FC<SearchComponentProps> = () => {
  return (
    <div className='search'>
      <input type='text' className='search__input' placeholder='Search' />
    </div>
  );
};

export default SearchComponent;
