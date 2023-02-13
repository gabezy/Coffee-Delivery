import styled from "styled-components";
import { BaseTitle, ICON_COLORS, ListItemProps } from "../../../styles/global";

export const IntroContainer = styled.article`
  margin-top: 60px;
  display: flex;
  align-items: center;
  gap: 60px;

  @media ${({ theme }) => theme.table} {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;

export const IntroTitle = styled(BaseTitle)`
  font-size: 3rem;
  @media ${({ theme }) => theme.mobile} {
    font-size: 2.3rem;
  }
`;

export const IntroContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-self: flex-start;
  .subtitle {
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${({ theme }) => theme.baseSubtitle};
    margin-top: 16px;
  }
`;

export const IntroList = styled.li`
  margin-top: 56px;
  display: flex;
  flex-wrap: wrap;
  gap: 26px;

  @media ${({ theme }) => theme.table} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 26px 0;
  }

  @media ${({ theme }) => theme.mobile} {
    grid-template-columns: 1fr;
    width: fit-content;
    margin-inline: auto;
  }
`;

export const ListItem = styled.li<ListItemProps>`
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${({ theme }) => theme.baseText};
  svg {
    padding: 4px;
    border-radius: 50%;
    fill: ${({ theme }) => theme.white};
    background: ${({ theme, iconBackgroud }) =>
      theme[ICON_COLORS[iconBackgroud]]};
  }
`;

export const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  img {
    max-width: 480px;
    max-height: 360px;
  }
  @media ${({ theme }) => theme.mobile} {
    display: none;
  }
`;
