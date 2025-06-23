import React from "react";

const ProductDetailPage = ({ message }) => {
  return <div>ProductDetailPage: {message}</div>;
};

export default ProductDetailPage;

export async function getServerSideProps(context) {
  console.log(context.params.productId);
  return {
    props: { message: "서버에서 보낸 메시지" },
  };
}
