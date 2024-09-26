export type StockInRecord = {
  id: number;
  productId: number;
  supplierId: number;
  quantity: number;
  date: string; // Format: 'YYYY-MM-DD'
  receivedBy: string;
};

export const stockInHistory: StockInRecord[] = [
  {
    id: 1,
    productId: 1,
    supplierId: 1,
    quantity: 50,
    date: "2024-09-10",
    receivedBy: "Alice",
  },
  {
    id: 2,
    productId: 2,
    supplierId: 2,
    quantity: 30,
    date: "2024-09-12",
    receivedBy: "Bob",
  },
  {
    id: 3,
    productId: 3,
    supplierId: 3,
    quantity: 100,
    date: "2024-09-15",
    receivedBy: "Charlie",
  },
  {
    id: 4,
    productId: 4,
    supplierId: 4,
    quantity: 20,
    date: "2024-09-18",
    receivedBy: "Dana",
  },
  {
    id: 5,
    productId: 5,
    supplierId: 5,
    quantity: 60,
    date: "2024-09-20",
    receivedBy: "Ethan",
  },
];
