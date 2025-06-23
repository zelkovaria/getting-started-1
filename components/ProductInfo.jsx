import React from "react";
import styles from "./ProductInfo.module.css";
import Image from "next/image";

const ProductInfo = ({ productDetail }) => {
  return (
    <div className={styles.container}>
      <div>
        <Image src={productDetail[0].imageUrl} alt="상품 이미지" />
      </div>
      <div className={styles.description}>
        <p>{productDetail[0].name}</p>
        <p>{productDetail[0].price}</p>
        <button>장바구니 담기</button>
      </div>
    </div>
  );
};

export default ProductInfo;
