import styled from "styled-components";
import { theme } from "components/theme";

export const Title = styled.h1`
  position: absolute;
  font-size: 70px;
  font-weight: 700;
  color: #aaac38;
  max-width: 200px;
  text-shadow: 1px 1px 2px #0f0f0f;
`;

export const Paragraph = styled.p`
position: absolute;
margin-top:${theme.spacing(100)};
font-size: 40px;
font-weight: 400;
color: #aaac38;
max-width: 500px;
text-shadow: 1px 1px 2px #0f0f0f;
`;