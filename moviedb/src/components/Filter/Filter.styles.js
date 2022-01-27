import styled from "styled-components";


export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  border: ${({open}) => {
    if(open === true){
      return '0px solid red';
    }else if(open === false){
      return '0px solid blue';
    }
  }};
  // border: 5px solid red;
  // height: 200px;
  background: var(--darkGrey);
  padding-bottom: 20px;
`;

export const Closed = styled.div`

`;

export const Open = styled.div`
  border-radius: 30px;
  background: var(--medGrey);
  // border: 5px solid red;
  width: 150px;
  height: 50px;
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items:center;
  
  
  :hover{
    cursor: pointer;
    animation: animateButton 0.3s;
    @keyframes animateButton {
    from {
      background: var(--medGrey);
    }
    to {
      background: var(--lightMedGrey);
    }
  }
  background: var(--lightMedGrey);
  }

  //Why doesn't this work?
  .h3{
    color: var(--white);
  }

`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  width: 100%;
  height: 200px;
  // border: 5px solid red;
  animation: animateFilter 1.5s;
  @keyframes animateFilter {
    from {
      height: 50px;
    }
    to {
      height: 200px;
    }
  }
`;

