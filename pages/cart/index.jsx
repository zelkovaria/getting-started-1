import { fetchCarts } from "@/api";
import React from "react";

const CartPage = ({ carts }) => {
  return <div>장바구니 페이지</div>;
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
