import { HeaderWrapper, Hr } from './Header.styled';
import { Navigation } from './NavigationHeader/Navigation';

export const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <Navigation />
      </HeaderWrapper>
      <Hr />
    </>
  );
};