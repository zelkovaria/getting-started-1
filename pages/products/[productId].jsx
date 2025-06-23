import { fetchProducts } from "@/api";
import ProductHeader from "@/components/ProductHeader";
import ProductInfo from "@/components/product-detail/ProductInfo";
import React from "react";

const ProductDetailPage = ({ productDetail }) => {
  return (
    <div>
      <ProductHeader title="상품 상세 정보 페이지" />
      <ProductInfo productDetail={productDetail} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const id = context.params.productId;
  const { data } = await fetchProducts(id);

  return {
    props: { productDetail: data },
  };
}

export default ProductDetailPage;
