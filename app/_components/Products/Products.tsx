import { useQuery } from "@tanstack/react-query";
import { ProductsContainer } from "./Products.styled";
import { IProduct } from "@/app/_lib/types";
import ProductItem from "../ProductItem";

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
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ProductsContainer>
      {data.products.map((product: IProduct) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ProductsContainer>
  );
};

export default Products;
