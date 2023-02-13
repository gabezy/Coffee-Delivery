import styled from "styled-components";
import { BaseTitle, ICON_COLORS, ListItemProps } from "../../styles/global";

export const SucessOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  .subtitle {
    color: ${({ theme }) => theme.baseSubtitle};
  }
  @media ${({ theme }) => theme.table} {
    .subtitle {
      margin-bottom: 20px;
    }
  }
`;

export const SucessOrderTitle = styled(BaseTitle)`
  color: ${({ theme }) => theme.yellowDark};
`;

export const SucessOrderInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .bannerContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 492px;
    max-height: 293px;
  }
  @media ${({ theme }) => theme.table} {
    flex-direction: column;
  }
  @media ${({ theme }) => theme.mobile} {
    .bannerContainer {
      display: none;
    }
  }
`;

export const ListOrder = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  border-radius: 6px 36px 6px 36px;
  border: double 1px transparent;
  background-image: linear-gradient(#fafafa, #fafafa),
    linear-gradient(90deg, #dbac2c, #8047f8);
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

export const ItemListOrder = styled.li<ListItemProps>`
  width: 350px;
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
    background: ${({ theme, iconBackgroud }) =>
      theme[ICON_COLORS[iconBackgroud]]};
  }
  @media ${({ theme }) => theme.mobile} {
    width: max-content;
  }
  @media ${({ theme }) => theme.mobile} {
    margin-inline: 40px;
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
