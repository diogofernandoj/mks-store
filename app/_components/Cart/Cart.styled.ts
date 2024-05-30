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
`;

export const CartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin-top: 2rem;
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
  overflow-y: auto;
  flex: 1;
  width: 100%;
  padding: 1rem 0;
  margin-top: 1rem;
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
