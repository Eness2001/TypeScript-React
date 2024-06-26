import React from "react";
import CartItem from "../CartItem/CartItem";

//Styles
import { Wrapper, CloseButton } from "./Cart.style";

//Types
import { CartItemType } from "../App";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
  onClose: () => void;
};
const Cart: React.FC<Props> = ({
  cartItems,
  addToCart,
  removeFromCart,
  onClose,
}) => {
  const calculateTotal = (items: CartItemType[]) => {
    return items.reduce(
      (ack: number, item) => ack + item.amount * item.price,
      0
    );
  };
  return (
    <Wrapper>
      <CloseButton onClick={() => onClose()}>Close Cart</CloseButton>{" "}
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in The Cart</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total : ${calculateTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  );
};

export default Cart;
