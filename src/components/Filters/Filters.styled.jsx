import styled from 'styled-components';
import { Field, Form } from 'formik';
import { theme } from 'components/theme';
import arrow from 'images/chevron-down.svg';

export const StyledForm = styled(Form)`
  margin-top: ${theme.spacing(25)};
  margin-bottom: ${theme.spacing(25)};
  display: flex;
  justify-content: center;
  align-items: end;
  &:first-child {
    /* width: 220px; */
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  color: ${theme.color.buttontext};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
`;

export const StyledInput = styled(Field)`
  margin-top: ${theme.spacing(4)};
  margin-right: ${theme.spacing(9)};
  padding: 14px 18px;
  border-radius: 14px;
  border: ${theme.color.bginput};
  background: ${theme.color.bginput};
  color: ${theme.color.black};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  outline: none;
  width: 160px;

  & option {
    font-size: 16px;
    line-height: 1.25;
    color: ${theme.color.tagtext};
    background: ${theme.color.white};
  }

  &.make {
    width: 224px;
  }
  &.rentalPrice {
    width: 125px;
  }

  &.make,
  &.price {
    cursor: pointer;
    appearance: none;
    overflow: hidden;
    background: right 14px center no-repeat url(${arrow}),
      ${theme.color.bginput};
  }

  &.left {
    border-radius: 14px 0px 0px 14px;
    border-right: 1px solid rgba(138, 138, 137, 0.2);
    margin-right: 0;
  }
  &.right {
    border-radius: 0px 14px 14px 0px;
  }

  &:focus {
    caret-color: ${theme.color.black};
  }
`;

export const ButtonSearch = styled.button`
  padding: 14px 44px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;
  color: ${theme.color.white};
  background: ${theme.color.blue};
  border-radius: 12px;
  border: transparent;
  transition: background-color ${theme.transition};

  &:is(:hover, :focus) {
    background-color: ${theme.color.navyblue};
  }
`;