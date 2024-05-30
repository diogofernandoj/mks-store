import { ReactNode } from "react";
import { ItemContainer } from "./CartItem.styled";

const CartItem = ({ children }: { children: ReactNode }) => {
  return <ItemContainer>{children}</ItemContainer>;
};

export default CartItem;
