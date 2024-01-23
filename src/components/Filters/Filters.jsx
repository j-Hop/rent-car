import { Formik } from "formik";
import { useDispatch } from 'react-redux';
import { resetFilters, setFilters } from '../../redux/filterSlice';
import { getAll, getFiltered } from '../../redux/operation';
import chooseList from './chooseList.json';
import {
  ButtonSearch,
  StyledForm,
  StyledInput,
  StyledLabel,
} from "./Filters.styled";

export const Filters = () => {
  const dispatch = useDispatch();

  const handleSubmitFilter = (values, { resetForm }) => {
    if (!values.make && !values.price) {
      dispatch(resetFilters());
      dispatch(getAll());
      return;
    }
    dispatch(setFilters(values));
    dispatch(getFiltered(values));
  };

  return (
    <Formik
      initialValues={{ choose: '', price: '' }}
      onSubmit={handleSubmitFilter}
    >
      <StyledForm>
        <StyledLabel>
          Car brand
          <StyledInput component="select" name="make" className="make">
            <option value="default" hidden>
              Select brand
            </option>
            {chooseList.choose.map(choose => (
              <option key={choose} value={choose}>
                {choose}
              </option>
            ))}
          </StyledInput>
        </StyledLabel>

        <StyledLabel>
          Price: 1 hour
          <StyledInput
            component="select"
            name="price"
            className="price"
          >
            <option value="default" hidden>
              Select price
            </option>
            {chooseList.options.map(price => (
              <option key={price} value={price}>
                {price}
              </option>
            ))}
          </StyledInput>
        </StyledLabel>

        <StyledLabel>
          Car mileage
          <StyledInput name="mileageFrom" placeholder="From" className="left" />
        </StyledLabel>
        <StyledLabel>
          <StyledInput name="mileageTo" placeholder="To" className="right" />
        </StyledLabel>

        <ButtonSearch type="submit">Search</ButtonSearch>
      </StyledForm>
    </Formik>
  );
};