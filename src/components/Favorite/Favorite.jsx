import { useSelector } from 'react-redux';
import { selectFavorite } from '../../redux/selectors';
import { ItemCard } from 'components/ItemCard/ItemCard';
import { Filters } from 'components/Filters/Filters';
import { FavoriteList, FavoriteWrapper } from './Favorite.styled';
import { LearnMoreModal } from 'components/LearnMoreModal/LearnMoreModal';


export const Favorite = ({isModalOpen, openModal, closeModal, isClick}) => {
const favorites = useSelector(selectFavorite);
return(
    <>
    <Filters/>
    <FavoriteWrapper>
        <FavoriteList>
            {favorites.map(item => (
                <ItemCard key={item.id} advert={item} openModal={openModal} />
            ))}
        </FavoriteList>
    </FavoriteWrapper>
    {isModalOpen && (
        <LearnMoreModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        advert={isClick}
        />
    )}
    </>
);
};