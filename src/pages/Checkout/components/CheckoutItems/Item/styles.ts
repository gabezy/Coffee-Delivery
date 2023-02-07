import styled from "styled-components";

export const ItemWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 8px 24px 8px;
  border-bottom: 1px solid ${({ theme }) => theme.baseButton};
  img {
    width: 64px;
    height: 64px;
  }
  .info {
    display: flex;
    flex-direction: column;
    .titleItem {
      line-height: 1.3;
      color: ${({ theme }) => theme.baseSubtitle};
      margin-bottom: 8px;
    }
    div {
      display: flex;
      gap: 8px;
    }
  }
  .price {
    flex: 1;
    text-align: end;
    justify-self: flex-end;
    align-self: flex-start;
  }
  & + & {
    margin-top: 24px;
  }
`;

export const RemoveItemButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background: ${({ theme }) => theme.baseButton};
  line-height: 1.6;
  padding: 0 8px;
  text-transform: uppercase;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.baseText};
  border-radius: 8px;
  svg {
    color: ${({ theme }) => theme.purple};
  }
`;
