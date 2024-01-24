import Modal from 'react-modal';
import { TextWrapper } from 'components/ItemCard/ItemCard.styled';
import SpriteIcons from '../../images/sprite.svg';
import {
  CloseBtn,
  ModalHeader,
  DescriptionText,
  OrderBtn,
  RentalConditions,
  TitleAaF,
  ImageWrapper,
  ModalTitleWrapper,
  AaFWrapper,
} from './LearnMoreModal.styled';

const mediaQuery = '@media screen and (maxWidth: 320px)';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    borderRadius: '24px',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '542px',
    maxHight: '90vh',
    padding: '40px',
    zIndex: '1300',
    [mediaQuery]: '20px',
  },
  overlay: {
    backgroundColor: 'rgba(18, 20, 23, .5)',
  },
};

Modal.setAppElement('#root');

export const LearnMoreModal = ({ isOpen, onRequestClose, advert }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    accessories,
    functionalities,
    rentalPrice,
    address,
    fuelConsumption,
    engineSize,
    description,
    rentalConditions,
    mileage,
  } = advert;

  const city = address.split(', ')[1];
  const country = address.split(', ')[2];
  const rentCond1 = rentalConditions.split('\n')[1];
  const rentCond2 = rentalConditions.split('\n')[2];
  const mileageFloat = mileage / 1000;
  const age = parseInt(rentalConditions.match(/\d+/));
  const price = rentalPrice.slice(1) + rentalPrice[0];

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
    >
      <ModalHeader>
        <CloseBtn onClick={onRequestClose}>
          <svg width="24" height="24">
            <use xlinkHref={`${SpriteIcons}#icon-x`} />
          </svg>
        </CloseBtn>
      </ModalHeader>
      <div>
        <ImageWrapper>
          <img src={img} alt={make} />
        </ImageWrapper>
        <ModalTitleWrapper>
          <div>
            {make} <span>{model}</span>, {year}
          </div>
        </ModalTitleWrapper>
        <TextWrapper>
          <div>
            {city} | {country} | id: {id} | Year: {year} | Type: {type}
          </div>
          <div>
            Fuel Consumption: {fuelConsumption} | Engine Size: {engineSize}
          </div>
        </TextWrapper>
        <DescriptionText>{description}</DescriptionText>
        <TitleAaF>Accessories and functionalities:</TitleAaF>
        <AaFWrapper>
          <p>
            {accessories[0]} | {accessories[1]} | {functionalities[0]}
          </p>
          <p>
            {accessories[2]} | {functionalities[1]} | {functionalities[2]}
          </p>
        </AaFWrapper>
        <TitleAaF>Rental Conditions:</TitleAaF>
        <RentalConditions>
          <p>
            Minimum age:  <span>{age}</span>  {rentCond1}
          </p>
          <p>
            {rentCond2} Mileage: <span>{mileageFloat}</span>  Price:  <span>{price}</span>
          </p>
        </RentalConditions>
        <OrderBtn href="tel:+380730000000">Rental car</OrderBtn>
      </div>
    </Modal>
  );
};