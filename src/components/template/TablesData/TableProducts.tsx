import { products } from "../../../data/product";

const TableProducts = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left p-4 font-semibold text-gray-600">Name</th>
            <th className="text-left p-4 font-semibold text-gray-600">
              Category
            </th>
            <th className="text-left p-4 font-semibold text-gray-600">Stock</th>
            <th className="text-left p-4 font-semibold text-gray-600">Price</th>
            <th className="text-left p-4 font-semibold text-gray-600">
              Warehouse Location
            </th>
            <th className="text-left p-4 font-semibold text-gray-600">
              Last Updated
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr
              key={index}
              className="border-b last:border-none hover:bg-gray-50"
            >
              <td className="p-4 text-gray-800">{item.name}</td>
              <td className="p-4 text-gray-800">{item.category}</td>
              <td className="p-4 text-gray-800">{item.stock}</td>
              <td className="p-4 text-gray-800">{item.price}</td>
              <td className="p-4 text-gray-800">{item.warehouseLocation}</td>
              <td className="p-4 text-gray-800">{item.lastUpdated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableProducts;
