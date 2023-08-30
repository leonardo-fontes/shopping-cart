import { useContext, useEffect } from "react";
import fetchProducts from "../../api/fetchProducts";
import ProductCard from "./ProductCard";
import Loading from "../Loading/Loading";
import AppContext from "../../context/AppContext";

interface Product {
  price: number;
  title: string;
  thumbnail: string;
}

function Products() {
  const { products, setProducts, loading, setLoading }: any =
    useContext(AppContext);

  useEffect(() => {
    fetchProducts("iphone")
      .then((resp) => {
        setProducts(resp);
        setLoading(false);
      })

      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    (loading && <Loading />) || (
      <section className="grid grid-flow-row grid-cols-5 gap-10 container mx-auto">
        {products.map((product: Product) => (
          <ProductCard key={product.title}
            thumbnail={product.thumbnail}
            title={product.title}
            price={product.price}
          />
        ))}
        )
      </section>
    )
  );
}

export default Products;
