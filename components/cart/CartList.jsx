import Image from "next/image";
import React from "react";
import styles from "./CartList.module.css";
import { removerCart } from "@/api";

const CartList = ({ carts }) => {
  const totalPrice = carts.reduce((acc, cur) => {
    return acc + parseFloat(cur.price);
  }, 0);

  const removeCart = async (id) => {
    // 1. 삭제 API 호출
    await removerCart(id);
    // 2. 상품 목록 갱신
  };

  return (
    <div>
      <div>
        <ul>
          {carts.map((cart) => {
            return (
              <li key={cart.id} className={styles.item}>
                <div>
                  <Image
                    src={cart.imageUrl}
                    alt={cart.name}
                    width={75}
                    height={75}
                  />
                </div>
                <div className={styles.description}>
                  <div>{cart.name}</div>
                  <div>{cart.price}</div>
                  <button onClick={() => removeCart(cart.id)}>삭제하기</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <p>총 가격 : {totalPrice}</p>
        <p>총 수량 : {carts.length}</p>
      </div>
    </div>
  );
};

export default CartList;
