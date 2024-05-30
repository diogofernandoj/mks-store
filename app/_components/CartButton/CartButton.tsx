import Image from "next/image";
import { CartButtonContainer, CartQuantity } from "./CartButton.styled";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

const CartButton = () => {
  const itemsCount = useSelector((state: RootState) =>
    state.cart.items.reduce((acc, curr) => acc + curr.quantity, 0)
  );

  return (
    <CartButtonContainer>
      <Image src="/cart.png" width={19} height={18} alt="Cart Icon" />
      <CartQuantity>{itemsCount}</CartQuantity>
    </CartButtonContainer>
  );
};

export default CartButton;
