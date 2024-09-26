import { suppliers } from "../../../data/supplier";

const TableSupplier = () => {
  return (
    <table>
      <thead>
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Contact Person</td>
          <td>Phone</td>
          <td>Email</td>
          <td>Address</td>
          <td>Status</td>
          <td>Category Id</td>
        </tr>
      </thead>
      <tbody>
        {suppliers.map((item) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.contactPerson}</td>
            <td>{item.phone}</td>
            <td>{item.email}</td>
            <td>{item.address}</td>
            <td>{item.status}</td>
            <td>{item.categoryId}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableSupplier;
