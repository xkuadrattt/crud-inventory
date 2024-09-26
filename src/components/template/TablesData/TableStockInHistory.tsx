import { stockInHistory } from "../../../data/stockInHistory";

const TableStockInHistory = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>Product Id</th>
          <th>Supplier Id</th>
          <th>Qty</th>
          <th>Date</th>
          <th>Recieve By</th>
        </tr>
      </thead>
      <tbody>
        {stockInHistory.map((item) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.productId}</td>
            <td>{item.supplierId}</td>
            <td>{item.quantity}</td>
            <td>{item.date}</td>
            <td>{item.receivedBy}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableStockInHistory;
