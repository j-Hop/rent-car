import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { setFilters } from "../../redux/filterSlice";
import { getAll, getFiltered } from "../../redux/operation";
import makeList from "./makeList.json";
import {
  ButtonSearch,
  StyledForm,
  StyledInput,
  StyledLabel,
} from "./Filters.styled";
import { useState } from "react";

export const Filters = () => {
  const [buttonState, setButtonState] = useState({
    isReset: false,
  });
  const dispatch = useDispatch();

  const handleSubmitFilter = (values, { resetForm }) => {
    setButtonState({ isReset: true });
    if (resetForm()) {
      resetForm();
      dispatch(getAll());
      return;
    }
    dispatch(setFilters(values));
    dispatch(getFiltered(values));
  };

  const handleSelectClick = () => {
    // Если кликнули по полю select, возвращаем кнопку в исходное состояние
    setButtonState({ isReset: false });
  };

  return (
    <Formik
      initialValues={{ make: '', price: '' }}
      onSubmit={handleSubmitFilter}
    >
      <StyledForm>
        <StyledLabel>
          Car brand
          <StyledInput
            component="select"
            name="make"
            className="make"
            onClick={handleSelectClick}
          >
            <option value="default" hidden>
              Select brand
            </option>
            {makeList.make.map(make => (
              <option key={make} value={make}>
                {make}
              </option>
            ))}
          </StyledInput>
        </StyledLabel>

        <StyledLabel>
          Price/ 1 hour
          <StyledInput
            component="select"
            name="price"
            className="price"
            onClick={handleSelectClick}
          >
            <option value="default" hidden>
              To $
            </option>
            {makeList.options.map(price => (
              <option key={price} value={price}>
                {price}
              </option>
            ))}
          </StyledInput>
        </StyledLabel>

        <StyledLabel>
          Car mileage / km
          <StyledInput name="mileageFrom" placeholder="From" className="left" />
        </StyledLabel>
        <StyledLabel>
          <StyledInput name="mileageTo" placeholder="To" className="right" />
        </StyledLabel>

        <ButtonSearch
          type="submit"
          style={{
            backgroundColor: buttonState.isReset ? 'red' : 'blue',
            color: 'white',
            ':hover': {
              backgroundColor: buttonState.isReset ? 'yellow' : 'orange',
            },
          }}
        >
          {buttonState.isReset ? 'Reset' : 'Search'}
        </ButtonSearch>
      </StyledForm>
    </Formik>
  );
};