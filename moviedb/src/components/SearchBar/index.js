import React, { useState, useEffect, useRef } from 'react';
// Image
import searchIcon from '../../images/search-icon.svg';
// styles
import { Wrapper, Content } from './SearchBar.styles';

const SearchBar = ({ setSearchTerm }) => {
  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt='serach-icon' />
        <input type='text' placeholder='Search Movie'/>
      </Content>
    </Wrapper>
  )
}

export default SearchBar;