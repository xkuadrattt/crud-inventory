import localforage from "localforage";
import { Product } from "../data/product";

export const createProduct = async (payload: Product) => {
  const products: Product[] = (await localforage.getItem("products")) || [];
  const productExist = products.find((item) => item.id === payload.id);
  if (productExist) {
    productExist.stock += Number(payload.stock);
  } else {
    products.push(payload);
  }

  await localforage.setItem("products", products);
};
