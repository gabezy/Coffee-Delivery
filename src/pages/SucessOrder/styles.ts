import styled from "styled-components";
import { BaseTitle } from "../../styles/global";

export const SucessOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SucessOrderTitle = styled(BaseTitle)``;

export const SucessOrderInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .listInfo {
    display: flex;
    flex-direction: column;
    gap: 32px;
    border-radius: 6px 36px 6px 36px;
    border: double 1px transparent;
    background-image: linear-gradient(#fafafa, #fafafa),
      linear-gradient(90deg, #dbac2c, #8047f8);
    background-origin: border-box;
    background-clip: content-box, border-box;
    li {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-left: 40px;
      margin-right: 120px;
      &:first-child {
        margin-top: 40px;
      }
      &:last-child {
        margin-bottom: 40px;
      }
      svg {
        color: ${({ theme }) => theme.white};
        padding: 6px;
        border-radius: 1000px;
      }
    }

    .yellow {
      background: ${({ theme }) => theme.yellow};
    }
    .orange {
      background: ${({ theme }) => theme.yellowDark};
    }
    .purple {
      background: ${({ theme }) => theme.purple};
    }
  }
  img {
    max-width: 492px;
    max-height: 293px;
  }
`;

export const ListInfoParagraph = styled.p`
  color: ${({ theme }) => theme.baseText};
  line-height: 1.3;

  span {
    display: block;
    font-weight: bold;
  }
  .street {
    display: inline;
  }
  .complement {
    font-weight: 400;
  }
`;
