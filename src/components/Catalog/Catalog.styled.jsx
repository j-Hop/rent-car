import { theme } from 'components/theme';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CatalogList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px 28px;
  margin: 0 auto;
  margin-bottom: ${theme.spacing(50)};
`;

export const LoadMoreBtn = styled(Link)`
  margin-bottom: ${theme.spacing(50)};
  display: block;
  text-align: center;
  color: ${theme.color.blue};
  font-size: 16px;
  font-weight: 500;
  text-decoration-line: underline;
  transition: color ${theme.transition};
  & :hover {
    color: ${theme.color.navyblue};
  }
`;