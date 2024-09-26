import { warehouses } from "../../../data/warehouse";

const TableWarehouse = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Location</th>
          <th>Capacity</th>
          <th>Current Stock</th>
          <th>Manager</th>
          <th>Contact Number</th>
        </tr>
      </thead>
      <tbody>
        {warehouses.map((item) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.location}</td>
            <td>{item.capacity}</td>
            <td>{item.currentStock}</td>
            <td>{item.manager}</td>
            <td>{item.contactNumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableWarehouse;
