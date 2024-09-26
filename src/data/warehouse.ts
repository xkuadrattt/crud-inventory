export type Warehouse = {
  id: number;
  name: string;
  location: string;
  capacity: number; // in square meters
  currentStock: number;
  manager: string;
  contactNumber: string;
};

export const warehouses: Warehouse[] = [
  {
    id: 1,
    name: "Central Warehouse",
    location: "Jakarta",
    capacity: 5000, // square meters
    currentStock: 3500,
    manager: "Robert Downey",
    contactNumber: "+1 (555) 123-4567",
  },
  {
    id: 2,
    name: "West Side Depot",
    location: "Bandung",
    capacity: 3000,
    currentStock: 2800,
    manager: "Natalie Portman",
    contactNumber: "+1 (555) 234-5678",
  },
  {
    id: 3,
    name: "East End Storage",
    location: "Surabaya",
    capacity: 4000,
    currentStock: 3200,
    manager: "Chris Evans",
    contactNumber: "+1 (555) 345-6789",
  },
  {
    id: 4,
    name: "North Hub",
    location: "Medan",
    capacity: 2500,
    currentStock: 2000,
    manager: "Scarlett Johansson",
    contactNumber: "+1 (555) 456-7890",
  },
  {
    id: 5,
    name: "South Terminal",
    location: "Yogyakarta",
    capacity: 3500,
    currentStock: 3000,
    manager: "Mark Ruffalo",
    contactNumber: "+1 (555) 567-8901",
  },
];
