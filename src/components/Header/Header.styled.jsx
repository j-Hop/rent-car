import { theme } from 'components/theme';
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  padding: ${theme.spacing(5)};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Hr = styled.hr`
  margin: 0;
  height: 10px;
  border: none;
  color: ${theme.colors.blue};
  background-image: linear-gradient(
    90deg,
    ${theme.colors.blue},
    ${theme.colors.blue} 33.33%,
    transparent 33.33%,
    transparent 100%
  );
  background-size: 0.5em 100%;
`;