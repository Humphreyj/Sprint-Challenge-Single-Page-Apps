import React, { useState,useEffect } from 'react';
import styled from 'styled-components';


const Input = styled.input`
width: 100%;


`


const SearchForm = (props) => {

  

  return (
    <form>
      <Input 
      name='search' 
      type="text" 
      placeholder='Looking for something?'
      onChange={props.getSearch}
      value={props.searchTerm}
      />
    </form>
  );
}

export default SearchForm;
