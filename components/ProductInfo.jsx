import React from "react";
import styles from "./ProductInfo.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const ProductInfo = ({ productDetail }) => {
  const router = useRouter();

  const addCart = () => {
    router.push("/cart");
  };

  return (
    <div className={styles.container}>
      <div>
        <Image
          height={250}
          width={250}
          src={productDetail[0].imageUrl}
          alt="상품 이미지"
        />
      </div>
      <div className={styles.description}>
        <p>{productDetail[0].name}</p>
        <p>{productDetail[0].price}</p>
        <button onClick={addCart}>장바구니 담기</button>
      </div>
    </div>
  );
};

export default ProductInfo;
