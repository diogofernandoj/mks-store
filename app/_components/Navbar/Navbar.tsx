import CartButton from "../CartButton";
import Logo from "../Logo";
import { NavbarContainer, Wrapper } from "./Navbar.styled";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Wrapper>
        <Logo />
        <CartButton />
      </Wrapper>
    </NavbarContainer>
  );
};

export default Navbar;
