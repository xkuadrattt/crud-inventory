import { Link } from "react-router-dom";
import { ButtonUi, InputUi } from "../../ui";

const FormLogin = () => {
  return (
    <>
      <section className="flex min-h-screen items-center">
        <div className="max-w-md mx-auto p-6 bg-white shadow-xl rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Login Akun</h2>
          <p className="text-sm text-gray-400">
            Yuk bisa, yuk. Stok lama perlu perhatian, nanti keuangan cemberut
          </p>
          <form className="space-y-4 my-8">
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
                Login
              </ButtonUi>
              <Link to="/register" className=" text-purple-500">
                Belum punya akun?, Register
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default FormLogin;
