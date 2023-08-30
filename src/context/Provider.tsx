import { useState } from "react";
import AppContext from "./AppContext";

interface Provider {
  children: React.ReactNode;
}



interface Product {
  price: number;
  title: string;
  thumbnail: string;
  
}

function Provider({ children }: Provider) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState<Product[]>([])
  const [isCartVisible, setIsCartVisible] = useState(false)

  const value = {
    products,
    setProducts,
    loading,
    setLoading,
    cartItems,
    setCartItems,
    isCartVisible,
    setIsCartVisible
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default Provider;
