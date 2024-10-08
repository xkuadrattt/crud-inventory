import * as Yup from "yup";

export const validationRules = Yup.object({
  firstName: Yup.string().required("Nama depan harus diisi"),
  lastName: Yup.string().required("Nama belakang harus diisi"),
  email: Yup.string()
    .email("format email tidak valid")
    .required("email harus diisi"),
  password: Yup.string()
    .min(8, "password minimal 8 karakter")
    .matches(/[A-Z]/, "kata sandi harus memuat huruf kapital")
    .matches(
      /[!@#$%^&*(){},./?|<>]/,
      "kata sandi harus memuat karakter unik atau simbol"
    )
    .matches(/[a-z]/, "kata sandi harus memuat huruf kecil")
    .matches(/[0-9]/, "kata sandi harus memuat angka")
    .required("kata sandi harus diisi"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "kata sandi harus sesuai")
    .required("konfirmasi kata sandi harus diisi"),
});
