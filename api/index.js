import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000",
});

function fetchProducts(productId) {
  return instance.get("/products/", {
    params: {
      id: productId,
    },
  });
}

function createCartItem({ id, name, imageUrl, price }) {
  return instance.post("/carts", {
    id: id,
    name: name,
    imageUrl,
    price,
  });
}

function fetchCarts() {
  return instance.get("/carts");
}

function removerCart(id) {
  return instance.delete(`/carts/${id}`);
}

export { fetchProducts, createCartItem, fetchCarts, removerCart };
