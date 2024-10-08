import { Link } from "react-router-dom";
import { ButtonUi, InputUi } from "../../ui";
import { useState } from "react";
import * as Yup from "yup";
import { FormData } from "../../../model/type";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import { validationRules } from "../../../validation/registeraccount";

const FormStaff = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const clearForm = () => {
    setFormData({
      ...formData,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      await validationRules.validate(formData, { abortEarly: false });
      clearForm();
      toast.info("register berhasil");
    } catch (error) {
      const errorCollection: { [key: string]: string } = {};
      if (error instanceof Yup.ValidationError) {
        error.inner.forEach((err) => {
          if (err.path) errorCollection[err.path] = err.message;
          toast.error(`terjadi galat. ${err.message}`);
        });
      } else {
        toast.error("galat tidak bisa diidentifikasi");
      }
      setErrors(errorCollection);
    }
  };

  return (
    <>
      <ToastContainer />
      <section className="flex min-h-screen items-center">
        <div className="max-w-md mx-auto p-6 bg-white shadow-xl rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Registrasi Akun</h2>
          <p className="text-sm text-gray-400">
            Informasi yang dimasukan hanya untuk login. Stockiesss tidak
            mengambil informasi apapun
          </p>
          <form className="space-y-4 my-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block font-medium text-sm text-gray-900"
                >
                  Nama Depan
                </label>
                <InputUi
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors && (
                  <p className="text-pink-700 text-sm">{errors.firstName}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block font-medium text-sm text-gray-900"
                >
                  Nama Belakang
                </label>
                <InputUi
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors && (
                  <p className="text-pink-700 text-sm">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900"
              >
                Surel
              </label>
              <InputUi
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />

              {errors && (
                <p className="text-pink-700 text-sm">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-900"
              >
                Kata Sandi
              </label>
              <InputUi
                type="password"
                id="password"
                name="password"
                placeholder="******"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            {errors && (
              <p className="text-pink-700 text-sm">{errors.password}</p>
            )}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-900"
              >
                Konfirmasi Kata Sandi
              </label>
              <InputUi
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="******"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors && (
                <p className="text-pink-700 text-sm">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <div className="flex gap-8 mt-4 items-center">
              <ButtonUi type="submit" variant="primary">
                Submit
              </ButtonUi>
              <Link to="/login" className=" text-purple-500">
                Sudah ada akun?, Login
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default FormStaff;
