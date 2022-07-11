import styled from "styled-components";

export const Container = styled.button`
  background: white;
  color: black;
  margin: 4px;
  padding: 8px 12px;
  /* border-radius: 4px; */
  border: none;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background: #ddd;
  }
`;
