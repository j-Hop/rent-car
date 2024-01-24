import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/favoriteSlice';
import { selectFavorite } from '../../redux/selectors';
import { LearnMoreModal } from 'components/LearnMoreModal/LearnMoreModal';
import { useState } from 'react';
import SpriteIcons from 'images/sprite.svg';
import {
  Card,
  HeartBtn,
  HeartIcon,
  LearnMoreBtn,
  TextWrapper,
  Thumb,
  TitleWrapper,
} from './ItemCard.styled';

export const ItemCard = ({ advert }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClick, setIsClick] = useState(null);

  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorite);

  const isExist = favorites.some(favorite => favorite.id === advert.id);

  const toggleFavorite = () => {
    isExist
      ? dispatch(removeFavorite(advert.id))
      : dispatch(addFavorite(advert));
  };

  const openModal = advert => {
    setIsClick(advert);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsClick(null);
    setIsModalOpen(false);
  };

  const {
    id,
    year,
    make,
    model,
    type,
    img,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
  } = advert;

  const city = address.split(', ')[1];
  const country = address.split(', ')[2];
  const functional = functionalities[0].split(' ')[0];

  return (
    <Card>
      <Thumb>
        <HeartBtn onClick={toggleFavorite}>
          {isExist ? (
            <HeartIcon fill="#3470FF" stroke="#3470FF">
              <use xlinkHref={`${SpriteIcons}#icon-heart`} />
            </HeartIcon>
          ) : (
            <HeartIcon fill="transparent" stroke="#fff">
              <use xlinkHref={`${SpriteIcons}#icon-heart`} />
            </HeartIcon>
          )}
        </HeartBtn>
        <img src={img} alt={make} width={274} height={268} />
      </Thumb>
      <TitleWrapper>
        <p>
          {make} <span>{model}</span>, {year}
        </p>
        <p>{rentalPrice}</p>
      </TitleWrapper>
      <TextWrapper>
        <p>
          {city} | {country} | {rentalCompany}
        </p>
        <p>
          {type} | {model} | {id} | {functional}
        </p>
      </TextWrapper>
      <LearnMoreBtn onClick={() => openModal(advert)}>Learn more</LearnMoreBtn>
      {isModalOpen && (
        <LearnMoreModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          advert={isClick}
        />
      )}
    </Card>
  );
};