import { Favorite } from 'components/Favorite/Favorite';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAll } from '../redux/operation';
import { selectFavorite, selectIsLoading } from '../redux/selectors';
import { Loader } from 'components/Loader/Loader';
import { ErMs, Ups } from 'components/Favorite/Favorite.styled';
import SpriteIcons from '../images/sprite.svg';

export default function FavoritePage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const favorites = useSelector(selectFavorite);

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      {favorites.length > 0 ? (
        <Favorite />
      ) : (
        <ErMs>
          <Ups>NO FAVORITE YET</Ups>
          <svg width="80vw" height="80vh" fill="#0B44CD">
            <use xlinkHref={`${SpriteIcons}#icon-no_favorite`} />
          </svg>
        </ErMs>
      )}
    </>
  );
};