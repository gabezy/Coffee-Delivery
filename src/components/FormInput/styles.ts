import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  .inputWrapper {
    position: relative;
    max-width: 100%;
  }
`;

export const InputForm = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid ${({ theme }) => theme.baseButton};
  border-radius: 4px;
  padding: 1rem;
  outline: none;
  background: ${({ theme }) => theme.baseInput};
  font-size: 0.875rem;
  z-index: 0;

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.yellowDark};
    background: ${({ theme }) => theme.baseCard};
  }
  &:not(:placeholder-shown) {
    background: ${({ theme }) => theme.baseCard};
  }
  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: -7px;
    left: 5px;
    font-size: 0.8rem;
    background: ${({ theme }) => theme.baseCard};
  }

  &:hover + label {
    background: ${({ theme }) => theme.baseCard};
  }
  &.cep {
    width: 200px;
  }
`;

export const LabelInputForm = styled.label`
  position: absolute;
  top: 8px;
  left: 10px;
  padding: 0 0.5rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.baseLabel};
  line-height: 1.3;

  cursor: text;
  transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
  background: ${({ theme }) => theme.baseInput};
`;
