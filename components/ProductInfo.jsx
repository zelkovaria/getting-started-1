import React from "react";
import styles from "./ProductInfo.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { createCartItem } from "@/api";

const ProductInfo = ({ productDetail }) => {
  const router = useRouter();
  const { id, name, imageUrl, price } = productDetail[0];

  const addCart = async () => {
    const response = await createCartItem({ id, name, imageUrl, price });
    console.log(response);
    router.push("/cart");
  };

  return (
    <div className={styles.container}>
      <div>
        <Image height={250} width={250} src={imageUrl} alt="상품 이미지" />
      </div>
      <div className={styles.description}>
        <p>{name}</p>
        <p>{price}</p>
        <button onClick={addCart}>장바구니 담기</button>
      </div>
    </div>
  );
};

export default ProductInfo;
