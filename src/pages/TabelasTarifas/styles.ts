import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 24px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    h2 {
      margin: 8px;
    }

    button {
      background: white;
      color: black;
      margin: 4px;
      padding: 8px 12px;
      border: 1px solid #ddd;
      border-radius: 4px;
      transition: all 0.2s ease;
      cursor: pointer;

      &:hover {
        background: #ddd;
      }
    }
  }
`;
