import axios from "axios";
import { useEffect, useState } from "react";

function ProductPage() {
  const [products, setProducts] = useState();

  useEffect(() => {
    axios.get("http://localhost:4000/products").then((response) => {
      response.data;
      setProducts(response.data);
    });
  }, []);

  return (
    <div>
      <h1>상품목록 페이지</h1>
      <ul>
        {products &&
          products.map((product) => {
            return <li key={product.id}>{product.name}</li>;
          })}
      </ul>
    </div>
  );
}

/**
 * 1. 상품 목록 페이지 - '/'
 * 2. 상품 상세 페이지 - '/products/productId'
 * 3. 장바구니 페이지 - '/carts'
 */

export default ProductPage;
