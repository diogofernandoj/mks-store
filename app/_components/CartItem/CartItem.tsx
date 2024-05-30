import {
  CartItemName,
  ItemContainer,
  ItemTotalPrice,
  Quantity,
  QuantityContainer,
  QuantityControl,
  QuantityControls,
  QuantityHeader,
  RemoveItemButton,
} from "./CartItem.styled";
import { ICartItem, removeProductFromCart } from "@/app/store/cartSlice";

import { decrementQuantity, incrementQuantity } from "@/app/store/cartSlice";
import Image from "next/image";
import { useDispatch } from "react-redux";

const CartItem = ({ item }: { item: ICartItem }) => {
  const dispatch = useDispatch();

  return (
    <ItemContainer>
      <RemoveItemButton
        onClick={() => dispatch(removeProductFromCart(item.id))}
      >
        X
      </RemoveItemButton>
      <Image
        src={item.photo}
        alt={item.name}
        height={0}
        width={0}
        sizes="100vw"
        style={{
          height: "3.75rem",
          width: "3.15rem",
          objectFit: "contain",
        }}
      />
      <CartItemName>{item.name}</CartItemName>
      <QuantityContainer>
        <QuantityHeader>Qtd:</QuantityHeader>
        <QuantityControls>
          <QuantityControl onClick={() => dispatch(decrementQuantity(item.id))}>
            -
          </QuantityControl>
          <Quantity>{item.quantity}</Quantity>
          <QuantityControl onClick={() => dispatch(incrementQuantity(item.id))}>
            +
          </QuantityControl>
        </QuantityControls>
      </QuantityContainer>
      <ItemTotalPrice>R${Number(item.price)}</ItemTotalPrice>
    </ItemContainer>
  );
};

export default CartItem;
