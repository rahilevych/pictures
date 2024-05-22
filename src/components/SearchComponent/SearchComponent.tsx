import { FC, useContext } from 'react';
import './SearchComponent.scss';
import { ImagesContext } from '../../context/ImagesContext';
type SearchComponentProps = {
  input: React.ChangeEventHandler<HTMLInputElement>;
};

function SearchComponent() {
  const { handleInputChange } = useContext(ImagesContext);
  return (
    <div className='search'>
      <i className='ph ph-magnifying-glass search__icon'></i>
      <input
        type='text'
        className='search__input'
        placeholder='Search'
        onChange={handleInputChange}
      />
      <button className='search__btn'>
        All images <i className='ph ph-caret-down '></i>
      </button>
    </div>
  );
}

export default SearchComponent;
