import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./ProductList.module.css";
import Link from "next/link";

const ProductList = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    axios.get("http://localhost:4000/products").then((response) => {
      response.data;
      setProducts(response.data);
    });
  }, []);

  return (
    <ul>
      {products &&
        products.map((product) => {
          return (
            <li key={product.id} className={styles.item}>
              <Link href={`/products/${product.id}`}>
                <div>
                  {/* <img src="" alt="" /> */}
                  <Image
                    width={300}
                    height={250}
                    src={product.imageUrl}
                    alt={product.name}
                  ></Image>
                </div>
                <div>{product.name}</div>
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default ProductList;
