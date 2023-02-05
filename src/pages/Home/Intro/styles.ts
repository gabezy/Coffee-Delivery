import styled from "styled-components";
import { BaseTitle } from "../../../styles/global";

export const IntroContainer = styled.section`
  margin-top: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  img {
    max-width: 480px;
  }
`;

export const IntroContent = styled.div`
  display: flex;
  flex-direction: column;
  .subtitle {
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${({ theme }) => theme.baseSubtitle};
    margin-top: 16px;
  }
  .introList {
    margin-top: 56px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 26px 0;
    li {
      display: flex;
      align-items: center;
      gap: 12px;
      color: ${({ theme }) => theme.baseText};
      svg {
        padding: 4px;
        border-radius: 50%;
        fill: ${({ theme }) => theme.white};
      }
    }
  }
  .yellow {
    background: ${({ theme }) => theme.yellow};
  }
  .orange {
    background: ${({ theme }) => theme.yellowDark};
  }
  .gray {
    background: ${({ theme }) => theme.baseText};
  }
  .purple {
    background: ${({ theme }) => theme.purple};
  }
`;

export const IntroTitle = styled(BaseTitle)`
  font-size: 3rem;
`;
