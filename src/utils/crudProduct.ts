import localforage from "localforage";
import { Product, products } from "../data/product";

export const createProduct = async (payload: Product) => {
  const productExist = products.find((item) => item.id === payload.id);
  if (productExist) {
    productExist.stock += Number(payload.stock);
  } else {
    products.push(payload);
  }

  await localforage.setItem("produk", products);
};
