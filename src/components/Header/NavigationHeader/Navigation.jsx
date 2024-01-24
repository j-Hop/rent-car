import { StyledLink} from './Navigation.styled';
import { useSelector } from 'react-redux';
import { selectFavorite } from '../../../redux/selectors';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const Navigation = () => {
  const [hasClass, setHasClass] = useState(false);
  const favorites = useSelector(selectFavorite);
  const location = useLocation();
  const isOnFavoritePage = location.pathname === '/favorites';
  const className = hasClass ? 'hintLink' : '';

  useEffect(() => {
    isOnFavoritePage && !hasClass
      ? setHasClass(true)
      : !isOnFavoritePage && hasClass && setHasClass(false);
  }, [isOnFavoritePage, hasClass]);

  return (
    <>
      <StyledLink to="/">Home</StyledLink>
      {favorites.length === 0 ? (
        <StyledLink to="/catalog" className={className}>
          Catalog
        </StyledLink>
      ) : (
        <StyledLink to="/catalog">Catalog</StyledLink>
      )}
      <StyledLink to="/favorites">Favorite</StyledLink>
    </>
  );
};
