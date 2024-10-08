export type Staff = {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  email: string;
  phone: string;
  password: string;
  hireDate: string; // Format: 'YYYY-MM-DD'
  status: "Active" | "Inactive";
};

export const staff: Staff[] = [
  {
    id: 1,
    firstName: "Sarah",
    lastName: "Connor",
    position: "Admin",
    password: "Admin0000.",
    email: "sarah@mail.com",
    phone: "+1 (555) 000-1111",
    hireDate: "2020-05-15",
    status: "Active",
  },
];
