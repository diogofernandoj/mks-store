import { useQuery } from "@tanstack/react-query";
import { ProductsContainer } from "./Products.styled";
import { IProduct } from "../../_lib/types";
import ProductItem from "../ProductItem";
import ProductSkeleton from "../ProductSkeleton";

const Products = () => {
  const fetchProducts = async () => {
    const response = await fetch(
      "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC"
    );
    return await response.json();
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return (
      <ProductsContainer data-testid="products">
        {new Array(8).fill("").map((item, index) => (
          <ProductSkeleton key={index} />
        ))}
      </ProductsContainer>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ProductsContainer data-testid="products">
      {data.products.map((product: IProduct) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ProductsContainer>
  );
};

export default Products;
