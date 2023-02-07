import styled from "styled-components";

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  background: ${({ theme }) => theme.baseCard};
  border-radius: 6px 44px 6px 44px;
  align-items: center;
  height: max-content;
`;

export const CheckoutInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 26px;
  gap: 12px;
  div {
    display: flex;
    justify-content: space-between;
  }
  .summary {
    span {
      font-size: 1.25rem;
      font-weight: bold;
      color: ${({ theme }) => theme.baseSubtitle};
    }
  }
  margin-bottom: 24px;
`;

export const Label = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.baseText};
  line-height: 1.3;
`;

export const Price = styled.span`
  color: ${({ theme }) => theme.baseText};
  line-height: 1.3;
`;
