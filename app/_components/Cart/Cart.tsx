import { useSelector } from "react-redux";
import CartItem from "../CartItem";
import {
  CartContainer,
  CartTitle,
  CloseCartButton,
  CartHeader,
  CartContent,
  CartTotalPrice,
  CheckoutButton,
  CheckoutContainer,
} from "./Cart.styled";
import { RootState } from "@/app/store/store";

interface CartProps {
  isOpen: boolean;
  setOpen: (boolean: boolean) => void;
}

const cartVariants = {
  hidden: { x: "100%" },
  visible: { x: 0 },
};

const Cart = ({ isOpen, setOpen }: CartProps) => {
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
          items.map((item) => <CartItem key={item.id} item={item} />)}
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
