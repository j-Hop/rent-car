import { theme } from "components/theme";
import styled from "styled-components";

export const ErMs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Ups = styled.p`
  font-size: ${theme.spacing(60)};
  color: ${theme.colors.darkblue};
  font-weight: bolder;
`;

export const FavoriteFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FavoriteList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px 28px;
  margin: 0 auto;
`;