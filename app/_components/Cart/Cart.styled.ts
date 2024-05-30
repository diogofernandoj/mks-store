import { motion } from "framer-motion";
import styled from "styled-components";

export const CartContainer = styled(motion.div)`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: -1rem 0 1rem #0003;

  height: 100%;
  width: 100%;
  max-width: 29rem;

  transform: translateX(100%);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const CartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 2rem 0;
`;

export const CartTitle = styled.h2`
  font-weight: 700;
  font-size: 1.7rem;
  line-height: 2rem;
  color: #fff;
  margin: 0;
`;

export const CloseCartButton = styled.button`
  border: none;
  background-color: #000;
  color: #fff;
  padding: 0.6rem 0.8rem;
  border-radius: 100%;
  cursor: pointer;
`;

export const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  height: max-content;
  max-height: 60%;
  overflow-y: auto;
`;

export const CartItemName = styled.p`
  font-size: 0.8rem;
  line-height: 1rem;
  width: 7rem;
`;

export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const QuantityHeader = styled.p`
  font-size: 0.4rem;
  line-height: 0.6rem;
  color: #000;
  margin: 0;
  margin-top: -0.6rem;
`;

export const QuantityControls = styled.div`
  width: 3.1rem;
  height: 1rem;
  border: 0.5px solid #bfbfbf;
  border-radius: 0.3rem;
  padding: 0.2rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QuantityControl = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

export const Quantity = styled.span`
  color: #000;
  border-left: 0.5px solid #bfbfbf;
  border-right: 0.5px solid #bfbfbf;
  padding: 0 0.4rem;
  font-size: 0.7rem;
  line-height: 0.9rem;
  font-weight: 500;
`;

export const ItemTotalPrice = styled.span`
  font-weight: 700;
  font-size: 0.9rem;
  line-height: 1.2rem;
`;

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

export const CartTotalPrice = styled.span`
  color: #fff;
  font-weight: 700;
  font-size: 1.75rem;
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

export const CheckoutButton = styled.button`
  background-color: #000;
  color: #fff;
  font-weight: 700;
  font-size: 1.75rem;
  border: none;
  height: 3rem;
  width: 100%;
  cursor: pointer;
`;
