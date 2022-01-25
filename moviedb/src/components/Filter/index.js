import react from "react";
import { useState } from "react/cjs/react.development";
import Button from "../Button";

// styles
import { Wrapper, Content, Open } from "./Filter.styles";
const Filter = () => {

const [state,setState] = useState(false);

// const openFilter = (onOff) => setState(onOff);

  const consoleTest = () => console.log('test');

  return (
    <Wrapper>
      <Open type='button' onClick={ consoleTest, setState }>
        <h3>Show Filters</h3>  
      </Open> 
    </Wrapper>
  )
};

export default Filter;