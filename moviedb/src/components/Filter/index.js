import react from "react";
import { useState } from "react/cjs/react.development";
import Button from "../Button";

// styles
import { Wrapper, Content, Open } from "./Filter.styles";
const Filter = () => {

  // Should all states be moved to Home.js ?
const [state,setState] = useState(false);

let boolVal = '';
const conv = (val) => {
  {boolVal = val.toString()}
}

  const consoleTest = () => console.log('test');
  
  return (
    <Wrapper open={state}>
      {state ? 
      <Content open={'test'}>
        <Open type='button' onClick={ () => setState(false) }>
          <h3>Close Filters</h3>
        </ Open>
      </Content>
      :
      <Open type='button' onClick={ () => setState(true) }>
        <h3>Show Filters</h3>  
        {console.log(boolVal)}
      </Open> 
      }
    </Wrapper>
  )
};

export default Filter;