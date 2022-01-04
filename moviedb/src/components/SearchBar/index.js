//A controlled component

import React, { useState, useEffect, useRef } from 'react';
// Image
import searchIcon from '../../images/search-icon.svg';
// styles
import { Wrapper, Content } from './SearchBar.styles';

const SearchBar = ({ setSearchTerm }) => {
  const [state, setState] = useState('');
  const initial = useRef(true); // Won't trigger a re-render



  useEffect(() => {
    if( initial.current ) { //Makes sure the rest of the useEffect is not triggered on component-mount
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500)
    return () => clearTimeout(timer);
  },[setSearchTerm, state])

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt='serach-icon' />
        <input
          type='text'
          placeholder='Search Movie'
          onChange={event => setState(event.currentTarget.value)} // inline function
          value={state}
        />
      </Content>
    </Wrapper>
  )
}

export default SearchBar;