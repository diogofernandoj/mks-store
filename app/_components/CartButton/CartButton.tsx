import Image from "next/image";
import { CartButtonContainer, CartQuantity } from "./CartButton.styled";

const CartButton = () => {
  return (
    <CartButtonContainer>
      <Image src="/cart.png" width={19} height={18} alt="Cart Icon" />
      <CartQuantity>0</CartQuantity>
    </CartButtonContainer>
  );
};

export default CartButton;
