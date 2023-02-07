import styled from "styled-components";
export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  background: ${({ theme }) => theme.baseButton};
  padding: 8px;
  border-radius: 8px;
  span {
    color: ${({ theme }) => theme.baseText};
  }
  button {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.purple};
    padding: 0 6px;
  }
`;
