import React, { useState,useEffect } from 'react';



const SearchForm = (props) => {

  

  return (
    <form>
      <input 
      name='search' 
      type="text" 
      placeholder='Search For a Character'
      onChange={props.getSearch}
      value={props.searchTerm}
      />

      <button className="search">Search</button>
    </form>
  );
}

export default SearchForm;
