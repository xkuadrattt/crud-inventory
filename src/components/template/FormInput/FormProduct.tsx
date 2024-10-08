import React, { useState } from "react";
import { ButtonUi, InputUi } from "../../ui";
import { inputProductSchema } from "../../../validation/formproduct";
import { toast, ToastContainer } from "react-toastify";
import * as Yup from "yup";
import { generatedDate } from "../../../utils/generatedDate";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../../utils/crudProduct";
import { Product, products } from "../../../data/product";

const FormProduct = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<Product>({
    id: "",
    name: "",
    category: "",
    stock: 0,
    warehouseLocation: "",
    price: 0,
    lastUpdated: generatedDate(),
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "id") {
      const productExist = products.find((item) => item.id === value);
      if (productExist) {
        setFormData({ ...formData, ...productExist });
      } else {
        setFormData({ ...formData, id: value });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

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

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      await inputProductSchema.validate(formData, { abortEarly: false });
      await createProduct(formData);

      clearForm();
      console.log("berhasil");

      navigate("/dashboard/products");
      toast.success("entry berhasil");
    } catch (error) {
      const errorCollection: { [key: string]: string } = {};

      if (error instanceof Yup.ValidationError) {
        error.inner.forEach((err) => {
          if (err.path) errorCollection[err.path] = err.message;
          toast.error(err.message, {
            autoClose: 3000,
          });
        });
      } else {
        toast.error("galat tidak bisa diidentifikasi");
      }

      setErrors(errorCollection);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <ToastContainer />
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Product Registration
      </h2>
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
            />
            {errors && <p className="text-sm text-pink-700">{errors.id}</p>}
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
            {errors && <p className="text-sm text-pink-700">{errors.name}</p>}
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
            Submit
          </ButtonUi>
          <button
            type="reset"
            className="px-2 py-1 border border-purple-700 hover:bg-purple-200 rounded-md"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};
export default FormProduct;
