import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 20px;
  // border-radius: 50px;
  animation: animateThumb 3.5s;

  @keyframes animateThumb{
    from {
      opacity: 0;
      // border-radius: 0px;
    }
    to {
      opacity: 1;
      // border-radius: 50px;
    }
  }
`;