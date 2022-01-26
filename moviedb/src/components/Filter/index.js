import react from "react";
import { useState } from "react/cjs/react.development";
import Button from "../Button";

// styles
import { Wrapper, Content, Open } from "./Filter.styles";
const Filter = () => {

  // Should all states be moved to Home.js ?
const [state,setState] = useState(false);

// const openFilter = (onOff) => setState(onOff);

let boolVal = '';
const conv = (val) => {
  {boolVal = val.toString()}
}

  const consoleTest = () => console.log('test');
  
  return (
    <Wrapper>
      {state ? 
      <Content>
        {/* Add if statement in styled document for animation, so it goes back if false 
            Maybe have to have to different css classes, one that is for open and one that is for close, with their own animations.
            Cause setting it to trigger on false will just make it animate everytime the page loads. 
            Think about logic here with different classes. 
            Probably smarter since it makes <Content> obsolete.
            The Wrapper is what needs to extend with the animation?
        */}
        <Open type='button' onClick={ consoleTest, () => setState(false) }>
          <h3>Close Filters</h3>
        </ Open>
      </Content>
      :
      <Open type='button' onClick={ consoleTest, () => setState(true) }>
        <h3>Show Filters</h3>  
        {conv(state)}
        <p>{/*boolVal*/}</p>
        {console.log(boolVal)}
      </Open> 
      }
      {/* If state is set show this, else show Content with animation that grows in vertical size */}
      
    </Wrapper>
  )
};

export default Filter;