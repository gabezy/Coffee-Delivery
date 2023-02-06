import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.baseCard};
  padding: 40px;
  border-radius: 8px;
  gap: 32px;
`;

export const Description = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  svg {
    color: ${({ theme }) => theme.yellowDark};
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 2px;
    .title {
      color: ${({ theme }) => theme.baseSubtitle};
      line-height: 1.3;
    }
    .subtitle {
      color: ${({ theme }) => theme.baseText};
      font-size: 0.875rem;
      line-height: 1.3;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 60px;

  .addressUpper {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 12px;
  }
  .addressLower {
    display: grid;
    grid-template-columns: 2fr 4fr 1fr;
    gap: 12px;
  }
  margin-bottom: 40px;
`;
