import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 16px;

  .unidade {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 16px;

    form {
      display: flex;
      flex-direction: column;

      .radio-wrapper {
        display: flex;
        justify-content: space-around;

        .radio {
          margin: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        input {
          margin: 2px;
        }
      }
    }

    button {
      background-color: white;
      border: 1px solid #e5e5e5;
      border-radius: 4px;
      padding: 8px;
      margin-top: 8px;
      width: 100%;
      font-size: 14px;
      font-weight: bold;
      color: #000;
      text-transform: uppercase;
      transition: background-color 0.2s;
      cursor: pointer;

      &:hover {
        background-color: #e5e5e5;
      }

      &:disabled {
        background-color: #e5e5e5;
        cursor: not-allowed;
      }
    }
  }
`;
