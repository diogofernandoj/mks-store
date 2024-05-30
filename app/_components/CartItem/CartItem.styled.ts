import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 22.75rem;
  height: 5rem;
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: #fff;
  color: #000;

  display: flex;
  align-items: center;
  justify-content: space-between;
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
