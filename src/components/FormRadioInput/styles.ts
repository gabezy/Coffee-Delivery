import styled from "styled-components";

export const FormRadioInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RadioInput = styled.input.attrs({ type: "radio" })`
  display: none;
  transition: all 0.3s ease-in;
  &:checked + label {
    border: 1px solid ${({ theme }) => theme.purple};
    background: #ebe5f9;
  }
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.baseText};
  font-size: 0.75rem;
  line-height: 1.6;
  background: ${({ theme }) => theme.baseButton};
  padding: 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease-in;
  &:hover {
    background: ${({ theme }) => theme.baseHover};
    color: ${({ theme }) => theme.baseSubtitle};
  }
  svg {
    color: ${({ theme }) => theme.purple};
  }
`;
