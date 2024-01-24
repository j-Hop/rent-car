import { CatalogList, LoadMoreBtn } from './Catalog.styled';
import { useDispatch, useSelector } from 'react-redux';
import { ItemCard } from 'components/ItemCard/ItemCard';
import { getMore } from '../../redux/operation';
import {
  selectAdvert,
  selectAdvertFiltered,
  selectIsLoadMore,
} from '../../redux/selectors';

export const Catalog = () => {
  const adverts = useSelector(selectAdvert);
  const isLoadMore = useSelector(selectIsLoadMore);
  const advertFiltered = useSelector(selectAdvertFiltered);
  const dispatch = useDispatch();

  const handleLoadMore = () => {
    dispatch(getMore({ page: Math.ceil(adverts.length / 12) + 1, limit: 12 }));
  };

  return (
    <>
      <CatalogList>
        {(advertFiltered.length > 0 ? advertFiltered : adverts).map(item => (
          <li key={item.id}>
            <ItemCard advert={item} />
          </li>
        ))}
      </CatalogList>
      {isLoadMore && (
        <LoadMoreBtn onClick={handleLoadMore}>
          <span>Load more</span>
        </LoadMoreBtn>
      )}
    </>
  );
};