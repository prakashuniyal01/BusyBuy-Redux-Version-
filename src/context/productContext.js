import { createContext, useContext, useEffect, useState } from "react";
import { data } from "../data";

const productContext = createContext();

export function useProducts() {
  const { products } = useContext(productContext);
  return products;
}

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <productContext.Provider value={{ products }}>
      {children}
    </productContext.Provider>
  );
}

export default ProductProvider;
