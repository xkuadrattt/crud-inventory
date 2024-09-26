import { products } from "../../../data/product";

const TableProducts = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Stock</th>
          <th>Price</th>
          <th>Warehouse Location</th>
          <th>Last Updated</th>
        </tr>
      </thead>
      <tbody>
        {products.map((item) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.category}</td>
            <td>{item.stock}</td>
            <td>{item.price}</td>
            <td>{item.warehouseLocation}</td>
            <td>{item.lastUpdated}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableProducts;
