import { theme } from 'components/theme';
import styled from 'styled-components';

export const ImageWrapper = styled.p`
  position: relative;
  overflow: hidden;
  width: 460px;
  height: 248px;
  margin-bottom: ${theme.spacing(7)};

  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
    display: block;
    content: '';
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 100%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    opacity: 0;
  }

  &:hover::before {
    -webkit-animation: circle 0.75s;
    animation: circle 0.75s;
  }
  @-webkit-keyframes circle {
    0% {
      opacity: 1;
    }
    40% {
      opacity: 1;
    }
    100% {
      width: 200%;
      height: 200%;
      opacity: 0;
    }
  }

  @keyframes circle {
    0% {
      opacity: 1;
    }
    40% {
      opacity: 1;
    }
    100% {
      width: 200%;
      height: 200%;
      opacity: 0;
    }
  }

  & img {
    height: 248px;
    width: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 14px;
    background: #f3f3f2;
  }
`;

export const ModalTitleWrapper = styled.div`
  margin-bottom: ${theme.spacing(4)};
  color: ${theme.colors.black};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;

  & span {
    color: ${theme.colors.blue};
  }
`;

export const DescriptionText = styled.p`
  margin-top: ${theme.spacing(7)};
  margin-bottom: ${theme.spacing(12)};
  color: ${theme.colors.black};
  font-size: 14px;
  line-height: 1.42;
  max-width: 460px;
`;

export const TitleAaF = styled.p`
  color: ${theme.colors.black};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  margin-bottom: ${theme.spacing(4)};
`;

export const AaFWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${theme.spacing(12)};
  gap: ${theme.spacing(2)};

  & > p {
    max-width: 460px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const RentalConditions = styled.div`
  color: ${theme.colors.black};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  letter-spacing: -0.24px;

  & p {
    padding: 7px 14px;
    display: inline-block;
  }

  & span {
    color: ${theme.colors.blue};
    margin-right: ${theme.spacing(4)};
  }
`;

export const OrderBtn = styled.a`
  display: inline-block;
  margin-top: ${theme.spacing(12)};
  padding: 12px 50px;
  border-radius: 12px;
  background: ${theme.colors.blue};
  color: ${theme.colors.white};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;
  transition: background ${theme.transition};

  &:is(:hover, :focus) {
    background: ${theme.colors.darkblue};
  }
`;

// ***************** Modal *************************

export const ModalHeader = styled.div`
  height: auto;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    max-width: 256px;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 10;
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;

  & svg {
    stroke: ${theme.colors.black};
    transition: stroke ${theme.transition}, scale ${theme.transition};
    scale: 0.98;

    &:hover,
    &:focus {
      scale: 1;
      stroke: ${theme.colors.darkblue};
    }
  }
`;