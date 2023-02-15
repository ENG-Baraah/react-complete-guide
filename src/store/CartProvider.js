import React from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemToCartHandler = () => {};
  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: [
      //   { id: "a1", price: 23, name: "rice", dscription: "one class" },
      //   { id: "a2", price: 25, name: "shugar", dscription: "one class" },
      //   { id: "a3", price: 26, name: "rice", dscription: "one class" },
      //   { id: "a4", price: 27, name: "shugar", dscription: "one class" },
    ],
    totalAmount: 150,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
