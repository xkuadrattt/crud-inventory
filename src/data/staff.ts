export type Staff = {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  email: string;
  phone: string;
  hireDate: string; // Format: 'YYYY-MM-DD'
  status: "Active" | "Inactive";
};

export const staff: Staff[] = [
  {
    id: 1,
    firstName: "Sarah",
    lastName: "Connor",
    position: "Manager",
    email: "sarah.connor@example.com",
    phone: "+1 (555) 000-1111",
    hireDate: "2020-05-15",
    status: "Active",
  },
  {
    id: 2,
    firstName: "Michael",
    lastName: "Burns",
    position: "Sales Representative",
    email: "michael.burns@example.com",
    phone: "+1 (555) 222-3333",
    hireDate: "2021-03-22",
    status: "Active",
  },
  {
    id: 3,
    firstName: "Linda",
    lastName: "Hamilton",
    position: "Accountant",
    email: "linda.hamilton@example.com",
    phone: "+1 (555) 444-5555",
    hireDate: "2019-11-05",
    status: "Inactive",
  },
  {
    id: 4,
    firstName: "James",
    lastName: "Bond",
    position: "Security Officer",
    email: "james.bond@example.com",
    phone: "+1 (555) 666-7777",
    hireDate: "2022-01-12",
    status: "Active",
  },
  {
    id: 5,
    firstName: "Emily",
    lastName: "Blunt",
    position: "Customer Support",
    email: "emily.blunt@example.com",
    phone: "+1 (555) 888-9999",
    hireDate: "2023-07-19",
    status: "Active",
  },
];
