import { theme } from 'components/theme';
import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 274px;
`;

export const Thumb = styled.div`
  position: relative;
  overflow: hidden;
  width: 274px;
  height: 268px;
  margin-bottom: ${theme.spacing(7)};
  &::before {
    position: absolute;
    top: 0;
    left: -75%;
    z-index: 2;
    display: block;
    content: '';
    width: 50%;
    height: 100%;
    background: -webkit-linear-gradient(
      left,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.3) 100%
    );
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.3) 100%
    );
    -webkit-transform: skewX(-25deg);
    transform: skewX(-25deg);
  }
  &:hover::before {
    -webkit-animation: shine 0.75s;
    animation: shine 0.75s;
  }
  @-webkit-keyframes shine {
    100% {
      left: 125%;
    }
  }
  @keyframes shine {
    100% {
      left: 125%;
    }
  }

  & img {
    height: 268px;
    width: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 14px;
    background: linear-gradient(
        180deg,
        rgba(18, 20, 23, 0.5) 2.5%,
        rgba(18, 20, 23, 0) 41.07%
      ),
      #f3f3f2;
  }
`;

export const HeartBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  border: none;
  background: none;
`;

export const HeartIcon = styled.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  &:hover {
    stroke: ${theme.color.blue};
    @keyframes shadow {
      0% {
        scale: 1;
      }
      50% {
        scale: 1.2;
      }
      100% {
        scale: 1;
      }
    }
    animation: shadow 0.5s ease infinite;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${theme.color.black};
  font-size: 16px;
  font-weight: 500;
  margin-bottom: ${theme.spacing(4)};

  & span {
    color: ${theme.color.blue};
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(2)};
  & > p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const LearnMoreBtn = styled.button`
  margin-top: ${theme.spacing(14)};
  padding: 12px 99px;
  border-radius: 12px;
  border: none;
  background: ${theme.color.blue};
  color: ${theme.color.white};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;
  transition: background ${theme.transition};

  &:is(:hover, :focus) {
    background: ${theme.color.navyblue};
  }
`;