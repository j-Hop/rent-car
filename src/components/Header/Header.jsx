import { HeaderWrapper, Hr } from './Header.styled';
import { NavigationHeader } from './NavigationHeader/NavigationHeader';

export const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <NavigationHeader />
      </HeaderWrapper>
      <Hr />
    </>
  );
};