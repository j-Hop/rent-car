import { Catalog } from 'components/Catalog/Catalog';
import { Filters } from 'components/Filters/Filters';
import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAll } from '../redux/operation';
import { selectIsLoading } from '../redux/selectors';

export default function CatalogPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  return (
    <>
      <Filters />
      {isLoading && <Loader />}
      {!isLoading && <Catalog />}
    </>
  );
};