import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CiEdit, CiSquareChevLeft, CiSquareChevRight } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import localforage from "localforage";
import { Product, products as tableProducts } from "../../../data/product";
import { useToast } from "../../../context/ToastContext/ToastContext";
import Swal from "sweetalert2";

const TableProducts = () => {
  const [valueCategory, setValueCategory] = useState("");
  const [filteredProduct, setFilteredProduct] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const { notify } = useToast();

  const getCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValueCategory(e.target.value);
    setPage(1);
  };

  const handlePaginationSelected = (payload: number) => {
    if (
      payload >= 1 &&
      payload <= Math.ceil(filteredProduct.length / itemsPerPage) &&
      payload !== page
    ) {
      setPage(payload);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      console.log("Menghapus produk dengan ID:", id);
      const storedProducts: Product[] =
        (await localforage.getItem("products")) || [];

      const updatedProducts = storedProducts.filter(
        (product) => product.id !== id
      );
      console.log("Produk setelah dihapus:", updatedProducts);

      await localforage.setItem("products", updatedProducts);
      setProducts(updatedProducts);
      setFilteredProduct(
        updatedProducts.filter((item) =>
          item.category.toLowerCase().includes(valueCategory.toLowerCase())
        )
      );

      notify("Produk berhasil dihapus", "success");
    } catch (error) {
      console.error("Error saat menghapus produk:", error);
      notify("Gagal menghapus produk", "error");
    }
  };

  const confirmationDelete = (id: string) => {
    Swal.fire({
      title: "Produk akan dihapus?",
      text: "Kehilangan data tidak akan pernah kembali. Seperti dia",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await handleDelete(id);
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const storedProducts = await localforage.getItem<Product[]>("products");

      if (!storedProducts) {
        await localforage.setItem("products", tableProducts);
        setProducts(tableProducts);
      } else {
        setProducts(storedProducts);
      }

      const filtered =
        storedProducts?.filter((item) =>
          item.category.toLowerCase().includes(valueCategory.toLowerCase())
        ) || [];
      setFilteredProduct(filtered);
    };

    fetchProducts();
  }, [valueCategory]);

  console.log(filteredProduct);

  return (
    <>
      <div className="flex justify-between flex-col mb-8 md:flex-row">
        <div className="flex gap-4 mb-8">
          <label htmlFor="filter">Filter By</label>
          <select name="filter" id="filter" onChange={getCategory}>
            {Array.from(new Set(products.map((item) => item.category))).map(
              (category, idx) => (
                <option key={idx} value={category}>
                  {category}
                </option>
              )
            )}
          </select>
        </div>
        <div>
          <Link to={"/dashboard/inputproduct"}>
            <button className="px-4 py-2 bg-cyan-700 text-white hover:bg-cyan-500 rounded-md w-max">
              &#43; Tambah Produk
            </button>
          </Link>
        </div>
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
              <th className="text-left p-4 font-semibold text-gray-600">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredProduct
              .slice(page * 5 - 5, page * 5)
              .map((item, index) => (
                <tr
                  key={index}
                  className="border-b last:border-none hover:bg-gray-50"
                >
                  <td className="p-4 text-gray-800">{item.name}</td>
                  <td className="p-4 text-gray-800">{item.category}</td>
                  <td className="p-4 text-gray-800">{item.stock}</td>
                  <td className="p-4 text-gray-800">{item.price}</td>
                  <td className="p-4 text-gray-800">
                    {item.warehouseLocation}
                  </td>
                  <td className="p-4 text-gray-800">{item.lastUpdated}</td>
                  <td>
                    <div className="flex gap-2 justify-center">
                      <Link to={`/dashboard/productupdate/${item.id}`}>
                        <button className="p-1 hover:bg-purple-500 bg-purple-700 rounded-md text-white">
                          <CiEdit />
                        </button>
                      </Link>
                      <button
                        onClick={() => confirmationDelete(item.id)}
                        className="p-1 hover:bg-pink-500 bg-pink-700 rounded-md text-white"
                      >
                        <MdDeleteOutline />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        <div className="block sm:hidden">
          {filteredProduct.slice(page * 5 - 5, page * 5).map((item, index) => (
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
              <div className="flex gap-2 justify-center">
                <Link to={`/dashboard/productupdate/${item.id}`}>
                  <button className="p-1 hover:bg-purple-500 bg-purple-700 rounded-md text-white">
                    <CiEdit />
                  </button>
                </Link>
                <button
                  onClick={() => confirmationDelete(item.id)}
                  className="p-1 hover:bg-pink-500 bg-pink-700 rounded-md text-white"
                >
                  <MdDeleteOutline />
                </button>
              </div>
            </div>
          ))}
        </div>

        {products.length > 0 && (
          <div className="mt-8 flex justify-center items-center gap-1 [&>span]:px-2 [&>span]:cursor-pointer">
            <span
              className={page < Math.ceil(products.length / 5) ? `hidden` : ""}
              onClick={() => handlePaginationSelected(page - 1)}
            >
              <CiSquareChevLeft />
            </span>
            {[...Array(Math.ceil(products.length / 5))].map((_, i) => (
              <span
                key={i}
                className={
                  page === i + 1
                    ? `bg-cyan-500 text-white`
                    : `bg-cyan-100 text-gray-600`
                }
                onClick={() => handlePaginationSelected(i + 1)}
              >
                {i + 1}
              </span>
            ))}
            <span
              className={page < Math.ceil(products.length / 5) ? `` : "hidden"}
              onClick={() => handlePaginationSelected(page + 1)}
            >
              <CiSquareChevRight />
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default TableProducts;
