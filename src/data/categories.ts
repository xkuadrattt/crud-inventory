export type Category = {
  id: number;
  name: string;
  description?: string;
};

export const categories: Category[] = [
  { id: 1, name: "Electronics", description: "Devices and gadgets" },
  {
    id: 2,
    name: "Home & Kitchen",
    description: "Household items and kitchenware",
  },
  {
    id: 3,
    name: "Sports & Outdoors",
    description: "Sporting goods and outdoor equipment",
  },
  {
    id: 4,
    name: "Computers",
    description: "Computing devices and accessories",
  },
  { id: 5, name: "Fashion", description: "Clothing and accessories" },
];
