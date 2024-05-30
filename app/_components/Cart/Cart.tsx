import { useDispatch, useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";
import {
  CartContainer,
  CartTitle,
  CloseCartButton,
  CartHeader,
  CartContent,
  QuantityControls,
  CartItemName,
  QuantityContainer,
  QuantityHeader,
  QuantityControl,
  Quantity,
  ItemTotalPrice,
  CartTotalPrice,
  CheckoutButton,
  CheckoutContainer,
} from "./Cart.styled";
import { RootState } from "@/app/store/store";
import { decrementQuantity, incrementQuantity } from "@/app/store/cartSlice";
import Image from "next/image";

interface CartProps {
  isOpen: boolean;
  setOpen: (boolean: boolean) => void;
}

const cartVariants = {
  hidden: { x: "100%" },
  visible: { x: 0 },
};

const Cart = ({ isOpen, setOpen }: CartProps) => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);
  const totalPrice = items.reduce(
    (acc, curr: any) => acc + curr.quantity * curr.price,
    0
  );

  return (
    <CartContainer
      initial="hidden"
      animate={isOpen ? "visible" : "hidden"}
      variants={cartVariants}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <CartHeader>
        <CartTitle>Carrinho de compras</CartTitle>
        <CloseCartButton onClick={() => setOpen(false)}>X</CloseCartButton>
      </CartHeader>
      <CartContent>
        {!!items.length &&
          items.map((item) => (
            <CartItem key={item.id}>
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
                  <QuantityControl
                    onClick={() => dispatch(decrementQuantity(item.id))}
                  >
                    -
                  </QuantityControl>
                  <Quantity>{item.quantity}</Quantity>
                  <QuantityControl
                    onClick={() => dispatch(incrementQuantity(item.id))}
                  >
                    +
                  </QuantityControl>
                </QuantityControls>
              </QuantityContainer>
              <ItemTotalPrice>R${Number(item.price)}</ItemTotalPrice>
            </CartItem>
          ))}
      </CartContent>
      <CheckoutContainer>
        <CartTotalPrice>
          <span>Total:</span>
          <span>R${totalPrice}</span>
        </CartTotalPrice>
        <CheckoutButton>Finalizar Compra</CheckoutButton>
      </CheckoutContainer>
    </CartContainer>
  );
};

export default Cart;
