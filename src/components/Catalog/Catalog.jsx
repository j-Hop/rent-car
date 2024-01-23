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
const advertFilter = useSelector(selectAdvertFiltered);
const isLoadMore = useSelector(selectIsLoadMore);
const dispatch = useDispatch();


const handleLoadMore = () => {
    dispatch(getMore({ page: Math.ceil(adverts.length / 12) + 1, limit: 12 }));
  };

  return(
    <>
    <CatalogList>
    {(advertFilter.length > 0 ? advertFilter : adverts).map(item => (
          <ItemCard key={item.id} advert={item} />
        ))}
    </CatalogList>
    {isLoadMore && (
        <LoadMoreBtn onClick={handleLoadMore}><span>Load more</span></LoadMoreBtn>
    )}
    </>
  );
};