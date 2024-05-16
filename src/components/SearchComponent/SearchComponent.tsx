import { FC } from 'react';
import './SearchComponent.scss';
type SearchComponentProps = {
  input: React.ChangeEventHandler<HTMLInputElement>;
};

const SearchComponent: FC<SearchComponentProps> = ({ input }) => {
  return (
    <div className='search'>
      <i className='ph ph-magnifying-glass search__icon'></i>
      <input
        type='text'
        className='search__input'
        placeholder='Search'
        onChange={input}
      />
      <button className='search__btn'>
        All images <i className='ph ph-caret-down '></i>
      </button>
    </div>
  );
};

export default SearchComponent;
