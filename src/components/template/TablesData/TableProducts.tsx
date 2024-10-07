import React, { useEffect, useState } from "react";
import { products } from "../../../data/product";

const TableProducts = () => {
  const [valueCategory, setValueCategory] = useState("");
  const [filteredProduct, setFitleredProduct] = useState(products);

  const getCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValueCategory(e.target.value);
  };

  useEffect(() => {
    setFitleredProduct(() => {
      return products.filter((item) =>
        item.category.toLowerCase().includes(valueCategory.toLowerCase())
      );
    });
  }, [valueCategory]);

  return (
    <>
      <div className="flex gap-4 mb-8">
        <label htmlFor="filter">Filter By</label>
        <select name="filter" id="filter" onChange={getCategory}>
          {products.map((item) => (
            <option key={item.id} value={item.category}>
              {item.category}
            </option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden hidden sm:table">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-4 font-semibold text-gray-600">
                Name
              </th>
              <th className="text-left p-4 font-semibold text-gray-600">
                Category
              </th>
              <th className="text-left p-4 font-semibold text-gray-600">
                Stock
              </th>
              <th className="text-left p-4 font-semibold text-gray-600">
                Price
              </th>
              <th className="text-left p-4 font-semibold text-gray-600">
                Warehouse Location
              </th>
              <th className="text-left p-4 font-semibold text-gray-600">
                Last Updated
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredProduct.map((item, index) => (
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

        <div className="block sm:hidden">
          {products.map((item, index) => (
            <div
              key={index}
              className="border-b p-2 flex flex-col gap-2 bg-gray-50 mb-4 rounded-lg"
            >
              <span className="font-semibold">Id: {item.id}</span>
              <span>Product Name: {item.name}</span>
              <span>Category: {item.category}</span>
              <span>Stock: {item.stock}</span>
              <span>Price: {item.price}</span>
              <span>Price: {item.warehouseLocation}</span>
              <span>Last Update: {item.lastUpdated}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TableProducts;
