import React from "react";
import { products } from "../../../data/product";
import { HeadingLvOne } from "../../ui";

const StockLow = () => {
  const lowStock = products.filter((item) => item.stock < 100);

  console.log(lowStock);
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-full sm:max-w-md">
      <HeadingLvOne style="mb-4">Stock Low, Sire</HeadingLvOne>

      <table className="hidden sm:table w-full text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">Id</th>
            <th className="p-2">Product Name</th>
            <th className="p-2">Category</th>
            <th className="p-2">Stock</th>
          </tr>
        </thead>
        <tbody>
          {lowStock.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="p-2">{item.id}</td>
              <td className="p-2">{item.name}</td>
              <td className="p-2">{item.category}</td>
              <td className="p-2">{item.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="block sm:hidden">
        {lowStock.map((item, index) => (
          <div
            key={index}
            className="border-b p-2 flex flex-col gap-2 bg-gray-50 mb-4 rounded-lg"
          >
            <span className="font-semibold">Id: {item.id}</span>
            <span>Product Name: {item.name}</span>
            <span>Category: {item.category}</span>
            <span>Stock: {item.stock}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StockLow;
