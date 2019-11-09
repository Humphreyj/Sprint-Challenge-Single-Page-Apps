import React, { useState } from 'react';



const SearchForm = (props) => {

  const [searchTerm, searchHandler] = useState('');
  return (
    <form>
      <input name='search' type="text" placeholder='Search For a Character'/>

      <button className="search">Search</button>
    </form>
  );
}

export default SearchForm;
