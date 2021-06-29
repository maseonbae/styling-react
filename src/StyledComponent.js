import React from 'react';
import styled, {css} from "styled-components";

const sizes = {
  desktop: 1024,
  tablet: 768
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
   @media (max-width: ${sizes[label] / 16}em) {
    ${css(...args)};
   }
  `;

  return acc;
}, {});

const Box = styled.div`
  background: ${props => props.color || "blue"};
  padding: 1rem;
  display: flex;
  
  width: 1024px;
  margin: 0 auto;
  
  ${media.desktop`width: 768px;`}
  ${media.tablet`width: 100%;`};
`;

const Button = styled.button`
  display: flex;
  padding: 0.rem;
  border-radius: 4px;
  justify-content: center;
  background: white;
  align-items: center;
  color: black;
  font-size: 1rem;
  font-weight: 600;
  box-sizing: border-box;
  
  &:hover {
    background: rgba(255, 255, 255, 0);
  }
  
  ${props => 
    props.inverted &&
    css `
      background: none;
      border: 2px solid white;
      color: white;
      
      &:hover {
        background: white;
        color: black;
      }
    `
  };
    
  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponent = () => {
  return (
    <>
      <Box color="black">
        <Button>안녕하세요.</Button>
        <Button inverted={true}>테두리만</Button>
      </Box>
    </>
  );
};

export default StyledComponent;
