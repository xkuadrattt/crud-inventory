export type StockOutRecord = {
  id: number;
  productId: number;
  customerId: number;
  quantity: number;
  date: string; // Format: 'YYYY-MM-DD'
  issuedBy: string;
};

export const stockOutHistory: StockOutRecord[] = [
  {
    id: 1,
    productId: 1,
    customerId: 101,
    quantity: 5,
    date: "2024-09-11",
    issuedBy: "Fiona",
  },
  {
    id: 2,
    productId: 2,
    customerId: 102,
    quantity: 3,
    date: "2024-09-13",
    issuedBy: "George",
  },
  {
    id: 3,
    productId: 3,
    customerId: 103,
    quantity: 10,
    date: "2024-09-16",
    issuedBy: "Hannah",
  },
  {
    id: 4,
    productId: 4,
    customerId: 104,
    quantity: 2,
    date: "2024-09-19",
    issuedBy: "Ian",
  },
  {
    id: 5,
    productId: 5,
    customerId: 105,
    quantity: 6,
    date: "2024-09-21",
    issuedBy: "Jenna",
  },
];
