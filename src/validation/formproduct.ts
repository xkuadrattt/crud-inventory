import * as Yup from "yup";

export const inputProductSchema = Yup.object({
  id: Yup.string().required("id produk wajib diisi"),
  name: Yup.string().required("nama produk wajib diisi"),
  category: Yup.string().required("kategori wajib diisi"),
  warehouseLocation: Yup.string().required("lokasi gudang wajib diisi"),
  price: Yup.number().required("harga wahib diisi"),
  stock: Yup.number().required("harga wahib diisi"),
});
