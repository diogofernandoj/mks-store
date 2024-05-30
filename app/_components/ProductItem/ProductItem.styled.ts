import styled from "styled-components";

export const ProductItemContainer = styled.div`
  width: 12rem;
  height: 16rem;
  background-color: #fff;
  box-shadow: 0 0 0.4rem #0002;
  border-radius: 0.5rem;
  padding: 1rem;
  position: relative;

  display: flex;
  flex-direction: column;
`;

export const NameAndPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 0;
`;

export const ProductName = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.2rem;
  color: #2c2c2c;
`;

export const ProductPrice = styled.p`
  font-weight: 700;
  font-size: 0.9rem;
  line-height: 0.9rem;
  color: #fff;
  background-color: #373737;
  padding: 0.4rem;
  border-radius: 0.4rem;
  margin: 0;
`;

export const ProductDescription = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  font-weight: 300;
  font-size: 0.6rem;
  line-height: 0.75rem;
  max-height: 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PurchaseButton = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  padding: 0.6em 0;
  position: absolute;
  inset: auto 0 0 0;
  border-radius: 0 0 0.5rem 0.5rem;
  font-weight: 600;
  font-size: 0.9rem;
  line-height: 1.2rem;
  text-transform: uppercase;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
