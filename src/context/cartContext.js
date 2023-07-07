import { createContext, useContext, useState } from "react";

const cartContext = createContext();

export const useCart = () => {
  const value = useContext(cartContext);
  return value;
};

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  return (
    <cartContext.Provider value={{ cart, setCart, isAdding, setIsAdding }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
