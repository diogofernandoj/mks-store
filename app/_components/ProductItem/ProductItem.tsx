import { IProduct } from "../../_lib/types";
import {
  NameAndPriceWrapper,
  ProductDescription,
  ProductItemContainer,
  ProductName,
  ProductPrice,
  PurchaseButton,
} from "./ProductItem.styled";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/cartSlice";
import { fadeIn } from "../../_lib/animation/variants";
import { toast } from "react-toastify";

interface ProductItemProps {
  product: IProduct;
}

const ProductItem = ({ product }: ProductItemProps) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product: IProduct) => {
    dispatch(addProduct(product));
    toast("Produto adicionado ao carrinho!");
  };

  return (
    <ProductItemContainer
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <Image
        src={product.photo}
        alt={product.name}
        height={0}
        width={0}
        sizes="100vw"
        style={{ height: "50%", width: "auto", objectFit: "contain" }}
      />

      <NameAndPriceWrapper>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>R${Number(product.price)}</ProductPrice>
      </NameAndPriceWrapper>

      <ProductDescription>{product.description}</ProductDescription>

      <PurchaseButton onClick={() => handleAddToCart(product)}>
        <Image
          src="/shopping-bag.png"
          alt="Shopping Bag"
          width={12}
          height={13.5}
        />
        <span>Comprar</span>
      </PurchaseButton>
    </ProductItemContainer>
  );
};

export default ProductItem;
