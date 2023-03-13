import styled from "styled-components";

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  
  form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3.5rem;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme["white"]};
  width: 100%;
  input {
    display: flex;
    flex: 1;
    background-color: transparent;
    border: 0;
    color: ${(props) => props.theme["gray-400"]};
    border-bottom: 1px solid ${(props) => props.theme["gray-400"]};
    text-align: center;
    font-size: 1.125rem;
    padding: 0.1rem 0.5rem;
  }
  input[type="number"] {
    width: 4rem;
    flex: 0;
  }
  input:active {
    outline: none;
    box-shadow: 0 0 0 0 ${(props) => props.theme["green-500"]};
  }
  input:focus {
    outline: none;
    box-shadow: 0 0 0 0 ${(props) => props.theme["green-500"]};
  }
`;

export const CountdownContainer = styled.div`
  font-family: "Roboto Mono", monospace;
  width: 100%;
  display: flex;
  /* flex: 1; */
  /* align-items: center; */
  font-size: 10rem;
  line-height: 8rem;
  justify-content: center;
  gap: 1rem;
  span {
    font-weight: bold;
    border-radius: 8px;
    padding: 2rem 1rem;
    background-color: ${(props) => props.theme["gray-700"]};
    color: ${(props) => props.theme["white"]};
  }
`;

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme["green-300"]};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

export const CountdownButton = styled.main`
  font-weight: bold;
  width: 100%;
  border: 0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  background-color: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme["white"]};
  padding: 1rem;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:not(:disabled):hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;
