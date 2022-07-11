import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`  
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


`;

export const Select = styled.select`
  background: white;
  color: black;
  margin: 4px;
  padding: 8px 12px;

  border: none;
`;

export const Input = styled.input`
  background: white;
  color: black;
  margin: 4px;
  padding: 8px 12px;
  border: 1px solid #666;
  border-radius: 4px;
  outline: none;
`;
