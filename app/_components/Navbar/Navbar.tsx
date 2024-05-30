import { useState } from "react";
import CartButton from "../CartButton";
import Logo from "../Logo";
import { NavbarContainer, Wrapper } from "./Navbar.styled";
import Cart from "../Cart";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <NavbarContainer>
      <Wrapper>
        <Logo />
        <span onClick={() => setOpen(true)}>
          <CartButton />
        </span>
      </Wrapper>
      {!!open && <Cart isOpen={open} setOpen={setOpen} />}
    </NavbarContainer>
  );
};

export default Navbar;
