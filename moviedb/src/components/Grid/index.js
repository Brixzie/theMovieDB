import react from "react";

import { Wrapper, Content } from './Grid.styles';


//Implicit return with () instead of {}
const Grid = ({ header, children }) => (

    <Wrapper>
        <h1>{header}</h1>
        <Content>{children}</Content>
    </Wrapper>

);


export default Grid;
