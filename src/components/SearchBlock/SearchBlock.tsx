import './SearchBlock.scss';
import SearchComponent from '../SearchComponent/SearchComponent';

function SearchBlock() {
  return (
    <div className='search-block'>
      <div className='container search-block__container'>
        <SearchComponent />
      </div>
    </div>
  );
}

export default SearchBlock;
