import { fetchCarts } from "@/api";
import CartHeader from "@/components/cart/CartHeader";
import CartList from "@/components/cart/CartList";
import React from "react";

const CartPage = ({ carts }) => {
  return (
    <div>
      <CartHeader></CartHeader>
      <CartList carts={carts}></CartList>
    </div>
  );
};

export async function getServerSideProps() {
  const { data } = await fetchCarts();

  return {
    props: {
      carts: data,
    },
  };
}

export default CartPage;
