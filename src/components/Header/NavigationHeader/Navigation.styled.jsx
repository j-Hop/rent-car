import { theme } from "components/theme";
import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const StyledLink = styled(NavLink)`
  padding: 14px 44px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;
  background: transparent;
  color: ${theme.colors.blue};
  border: 1px solid ${theme.colors.blue};
  border-radius: 12px;
  transition: background-color ${theme.transition};

  &:is(:hover, :focus, .active) {
    color: ${theme.colors.white};
    background-color: ${theme.colors.darkblue};
  }

  &.hintLink {
    @keyframes blink {
      0% {
        box-shadow: 0 0 0 0 rgba(55, 141, 250, 0.8);
      }
      100% {
        box-shadow: 0 0 0 12px rgba(55, 141, 250, 0);
      }
    }
    animation: blink 1s ease infinite;
  }
`;