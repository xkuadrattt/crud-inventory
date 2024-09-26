import { stockOutHistory } from "../../../data/stockOutHistory";

const TableOutHistory = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>Product Id</th>
          <th>Customer Id</th>
          <th>Qty</th>
          <th>Date</th>
          <th>Issued By</th>
        </tr>
      </thead>
      <tbody>
        {stockOutHistory.map((item) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.productId}</td>
            <td>{item.customerId}</td>
            <td>{item.quantity}</td>
            <td>{item.date}</td>
            <td>{item.issuedBy}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableOutHistory;
