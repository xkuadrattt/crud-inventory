import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import localforage from "localforage";
import { ButtonUi, InputUi } from "../../ui";
import { generatedDate } from "../../../utils/generatedDate";
import { Product } from "../../../data/product";
import { useToast } from "../../../context/ToastContext/ToastContext";

const FormUpdateProduct = () => {
  const { id } = useParams<{ id: string }>();
  const { notify } = useToast();
  const navigate = useNavigate();

  const fetchProduct = async (productId: string): Promise<Product> => {
    const storedProducts: Product[] =
      (await localforage.getItem("products")) || [];
    const product = storedProducts.find((item) => item.id === productId);
    return (
      product || {
        id: "",
        name: "",
        category: "",
        stock: 0,
        warehouseLocation: "",
        price: 0,
        lastUpdated: generatedDate(),
      }
    );
  };

  const [formData, setFormData] = useState<Product>(() => {
    const initialData: Product = {
      id: "",
      name: "",
      category: "",
      stock: 0,
      warehouseLocation: "",
      price: 0,
      lastUpdated: generatedDate(),
    };

    if (id) {
      fetchProduct(id).then((data) => setFormData(data));
    }

    return initialData;
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const clearForm = () => {
    setFormData({
      ...formData,
      id: "",
      name: "",
      category: "",
      warehouseLocation: "",
      price: 0,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.id) {
      setErrors((prev) => ({ ...prev, id: "ID Produk harus diisi" }));
      return;
    }

    try {
      const storedProducts: Product[] =
        (await localforage.getItem("products")) || [];
      const productIndex = storedProducts.findIndex(
        (item) => item.id === formData.id
      );

      if (productIndex !== -1) {
        storedProducts[productIndex] = {
          ...storedProducts[productIndex],
          ...formData,
          lastUpdated: generatedDate(),
        };

        await localforage.setItem("products", storedProducts);
        clearForm();
        notify("Produk berhasil diperbarui!", "success");
        navigate("/dashboard/products");
      } else {
        notify("Produk dengan ID tersebut tidak ditemukan.", "warning");
      }
    } catch (error) {
      notify(`ada sedikit kesalahan, ${error}`, "error");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Update Product</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="idProduct"
              className="block text-sm font-medium text-gray-700"
            >
              Id Product
            </label>
            <InputUi
              type="text"
              id="idProduct"
              name="id"
              placeholder="Id Product"
              value={formData.id}
              onChange={handleChange}
              disabled
            />
            {errors.id && <p className="text-sm text-pink-700">{errors.id}</p>}
          </div>

          <div>
            <label
              htmlFor="titleProduct"
              className="block text-sm font-medium text-gray-700"
            >
              Title Product
            </label>
            <InputUi
              type="text"
              id="titleProduct"
              name="name"
              placeholder="Title Product"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-sm text-pink-700">{errors.name}</p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <InputUi
            type="text"
            id="category"
            name="category"
            placeholder="Product Category"
            value={formData.category}
            onChange={handleChange}
          />
          {errors && <p className="text-sm text-pink-700">{errors.category}</p>}
        </div>

        <div>
          <label
            htmlFor="warehouseLocation"
            className="block text-sm font-medium text-gray-700"
          >
            Warehouse Location
          </label>
          <InputUi
            type="text"
            id="warehouseLocation"
            name="warehouseLocation"
            placeholder="Warehouse Location"
            value={formData.warehouseLocation}
            onChange={handleChange}
          />
          {errors && (
            <p className="text-sm text-pink-700">{errors.warehouseLocation}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="stock"
            className="block text-sm font-medium text-gray-700"
          >
            Stok
          </label>
          <InputUi
            type="number"
            id="price"
            name="stock"
            placeholder="Stock"
            value={formData.stock}
            onChange={handleChange}
          />
          {formData.stock === 0 && (
            <p className="text-sm text-pink-700">stok tidak bisa 0</p>
          )}
        </div>

        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Price
          </label>
          <InputUi
            type="number"
            id="price"
            name="price"
            placeholder="Price"
            step="0.01"
            value={formData.price}
            onChange={handleChange}
          />
          {formData.price === 0 && (
            <p className="text-sm text-pink-700">Harga tidak bisa 0</p>
          )}
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <ButtonUi type="submit" variant="primary">
            Update Product
          </ButtonUi>
          <button
            type="reset"
            className="px-2 py-1 border border-purple-700 hover:bg-purple-200 rounded-md"
            onClick={() =>
              setFormData({
                id: "",
                name: "",
                category: "",
                stock: 0,
                warehouseLocation: "",
                price: 0,
                lastUpdated: generatedDate(),
              })
            }
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormUpdateProduct;
