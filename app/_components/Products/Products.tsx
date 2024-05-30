import { useQuery } from "@tanstack/react-query";
import { ProductsContainer } from "./Products.styled";
import { IProduct } from "@/app/_lib/types";

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

  return (
    <ProductsContainer>
      {data.products.map((product: IProduct) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </ProductsContainer>
  );
};

export default Products;
