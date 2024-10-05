import { Link } from "react-router-dom";
import { ButtonUi, InputUi } from "../../ui";

const FormStaff = () => {
  return (
    <>
      <section className="flex min-h-screen items-center">
        <div className="max-w-md mx-auto p-6 bg-white shadow-xl rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Registrasi Akun</h2>
          <p className="text-sm text-gray-400">
            Informasi yang dimasukan hanya untuk login. Stockiesss tidak
            mengambil informasi apapun
          </p>
          <form className="space-y-4 my-8">
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
                  placeholder="First Name"
                  required={true}
                />
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
                  placeholder="Last Name"
                  required={true}
                />
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
                placeholder="Email"
                required={true}
              />
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
                placeholder="******"
                required={true}
              />
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
