import styled from "styled-components";


export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  // border: 5px solid red;
  background: var(--darkGrey);
  padding-bottom: 20px;
`;

export const Open = styled.div`
  border-radius: 30px;
  background: var(--medGrey);
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

`;

