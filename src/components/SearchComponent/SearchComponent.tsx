import { useContext } from 'react';
import './SearchComponent.scss';
import { ImagesContext } from '../../context/ImagesContext';

function SearchComponent() {
  const { setTag, setError } = useContext(ImagesContext);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setTag(e.target.value);
      setError('');
    } else if (e.target.value === '') {
      setTag('blue');
      setError('');
    }
  };

  return (
    <div className='search'>
      <i className='ph ph-magnifying-glass search__icon'></i>
      <input
        type='text'
        className='search__input'
        placeholder='Search'
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SearchComponent;
