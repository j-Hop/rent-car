import { StyleLink } from "./NavigationHeader.styled";
import { useSelector } from "react-redux";
import { selectFavorite } from "../../../redux/selectors";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const NavigationHeader = () => {
    const [useClass, setUseClass] = useState(false);
    const favorites = useSelector(selectFavorite);
    const location = useLocation();
    const favoritePage = location.pathname === `/favorites`;
    const className = useClass? `hintlink` : ``;

    useEffect(() => {
        favoritePage & !useClass ? setUseClass(true) : !favoritePage && useClass && setUseClass(false);
    }, [favoritePage, useClass]);

    return (
        <>
        <StyleLink to="/">Home</StyleLink>
      {favorites.length === 0 ? (
        <StyleLink to="/catalog" className={className}>
          Catalog
        </StyleLink>
      ) : (
        <StyleLink to="/catalog">Catalog</StyleLink>
      )}
      <StyleLink to="/favorites">Favorite</StyleLink>
        </>);
};
