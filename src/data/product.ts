export type Product = {
  id: string;
  name: string;
  category: string;
  stock: number;
  warehouseLocation: string;
  price: number;
  lastUpdated: string;
};

export const products: Product[] = [
  {
    id: "produk001",
    name: "Wireless Bluetooth Speaker",
    category: "Electronics",
    stock: 120,
    warehouseLocation: "Jakarta",
    price: 49.99,
    lastUpdated: "2024-09-20",
  },
  {
    id: "produk002",
    name: "Stainless Steel Water Bottle",
    category: "Home & Kitchen",
    stock: 85,
    warehouseLocation: "Bandung",
    price: 19.99,
    lastUpdated: "2024-09-18",
  },
  {
    id: "produk003",
    name: "Yoga Mat",
    category: "Sports & Outdoors",
    stock: 200,
    warehouseLocation: "Surabaya",
    price: 29.99,
    lastUpdated: "2024-09-15",
  },
  {
    id: "produk004",
    name: "Wireless Mouse",
    category: "Computers",
    stock: 50,
    warehouseLocation: "Jakarta",
    price: 14.99,
    lastUpdated: "2024-09-19",
  },
  {
    id: "produk005",
    name: "Gaming Headset",
    category: "Electronics",
    stock: 75,
    warehouseLocation: "Medan",
    price: 59.99,
    lastUpdated: "2024-09-22",
  },
];
