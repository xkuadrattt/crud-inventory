export type Supplier = {
  id: number;
  name: string;
  contactPerson: string;
  phone: string;
  email: string;
  address: string;
  status: "Active" | "Inactive";
  categoryId: number;
};

export const suppliers: Supplier[] = [
  {
    id: 1,
    name: "Global Supplies Co.",
    contactPerson: "John Doe",
    phone: "+1 (555) 123-4567",
    email: "johndoe@globalsupplies.com",
    address: "123 Market Street, Jakarta, Indonesia",
    status: "Active",
    categoryId: 1, // Electronics
  },
  {
    id: 2,
    name: "Fresh Goods Ltd.",
    contactPerson: "Jane Smith",
    phone: "+1 (555) 987-6543",
    email: "janesmith@freshgoods.com",
    address: "456 Commerce Avenue, Bandung, Indonesia",
    status: "Active",
    categoryId: 2, // Home & Kitchen
  },
  {
    id: 3,
    name: "TechWare Inc.",
    contactPerson: "Mike Johnson",
    phone: "+1 (555) 555-5555",
    email: "mikejohnson@techware.com",
    address: "789 Industrial Road, Surabaya, Indonesia",
    status: "Inactive",
    categoryId: 4, // Computers
  },
  {
    id: 4,
    name: "EcoHome Suppliers",
    contactPerson: "Emily Davis",
    phone: "+1 (555) 111-2222",
    email: "emilydavis@ecohome.com",
    address: "321 Green Blvd, Medan, Indonesia",
    status: "Active",
    categoryId: 2, // Home & Kitchen
  },
  {
    id: 5,
    name: "Urban Fashion LLC",
    contactPerson: "David Brown",
    phone: "+1 (555) 333-4444",
    email: "davidbrown@urbanfashion.com",
    address: "654 Style Street, Yogyakarta, Indonesia",
    status: "Active",
    categoryId: 5, // Fashion
  },
];
