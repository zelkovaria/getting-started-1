import { fetchProducts } from "@/api";
import ProductHeader from "@/components/ProductHeader";
import React from "react";

const ProductDetailPage = ({ message, productInfo }) => {
  return (
    <div>
      <ProductHeader title="상품 상세 정보 페이지" />
      <div>ProductDetailPage: {message}</div>
      <p>{productInfo.name}</p>
    </div>
  );
};

export default ProductDetailPage;

export async function getServerSideProps(context) {
  const id = context.params.productId;
  const response = await fetchProducts(id);

  return {
    props: { message: "서버에서 보낸 메시지", productInfo: response.data },
  };
}
