import React, { createContext, useContext, useState, ReactNode } from "react";

export interface Cart {

  id: number;
}

interface CartContextType {
  carts: Cart[];
  addToCart: (item: Cart) => void;
  removeFromCart: (itemId: number) => void;
}

const initialCart: Cart[] = [];

export const CartContext = createContext<CartContextType>({
  carts: initialCart,
  addToCart: () => {},
  removeFromCart: () => {},
});

export const useCart = () => useContext(CartContext);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [carts, setCarts] = useState<Cart[]>(initialCart);

  const addToCart = (item: Cart) => {
    setCarts([...carts, item]);
  };

  const removeFromCart = (itemId: number) => {
    const updatedCart = carts.filter((item) => item.id !== itemId);
    setCarts(updatedCart);
  };

  return (
    <CartContext.Provider value={{ carts, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
