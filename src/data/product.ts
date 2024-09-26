export type Product = {
  id: number;
  name: string;
  category: string;
  stock: number;
  warehouseLocation: string;
  price: number;
  lastUpdated: string; // Format: 'DD-MM-YYYY'
};

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Bluetooth Speaker",
    category: "Electronics",
    stock: 120,
    warehouseLocation: "Jakarta",
    price: 49.99,
    lastUpdated: "2024-09-20",
  },
  {
    id: 2,
    name: "Stainless Steel Water Bottle",
    category: "Home & Kitchen",
    stock: 85,
    warehouseLocation: "Bandung",
    price: 19.99,
    lastUpdated: "2024-09-18",
  },
  {
    id: 3,
    name: "Yoga Mat",
    category: "Sports & Outdoors",
    stock: 200,
    warehouseLocation: "Surabaya",
    price: 29.99,
    lastUpdated: "2024-09-15",
  },
  {
    id: 4,
    name: "Wireless Mouse",
    category: "Computers",
    stock: 50,
    warehouseLocation: "Jakarta",
    price: 14.99,
    lastUpdated: "2024-09-19",
  },
  {
    id: 5,
    name: "Gaming Headset",
    category: "Electronics",
    stock: 75,
    warehouseLocation: "Medan",
    price: 59.99,
    lastUpdated: "2024-09-22",
  },
];
