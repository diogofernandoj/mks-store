import { useState } from "react";
import CartButton from "../CartButton";
import Logo from "../Logo";
import { NavbarContainer, Wrapper } from "./Navbar.styled";
import Cart from "../Cart";
import { fadeIn } from "../../_lib/animation/variants";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <NavbarContainer
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      data-testid="navbar"
    >
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
