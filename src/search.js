import React from 'react';

const Search = ({onSearch, onInputChange}) => {
  return (
    <div>
      <input type='text' onChange={onInputChange}/>
      <button className='btn-small' onClick={onSearch}>Search</button>
    </div>
  )
}

export default Search;
