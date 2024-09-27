import { ButtonUi, InputUi } from "../../ui";

const FormStaff = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Staff Registration</h2>
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
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
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
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
            htmlFor="id"
            className="block text-sm font-medium text-gray-700"
          >
            Id Staff
          </label>
          <InputUi type="text" id="id" placeholder="Id Staff" required={true} />
        </div>

        <div>
          <label
            htmlFor="position"
            className="block text-sm font-medium text-gray-700"
          >
            Position
          </label>
          <InputUi
            type="text"
            id="position"
            placeholder="Position"
            required={true}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
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
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone
          </label>
          <InputUi
            type="tel"
            id="phone"
            placeholder="+1 234 567 8900"
            pattern="^\+?[1-9]\d{1,14}$"
            required={true}
          />
        </div>

        <div className="flex gap-4 mt-4">
          <ButtonUi type="submit" variant="primary">
            Submit
          </ButtonUi>
          <ButtonUi type="reset" variant="secondary">
            Reset
          </ButtonUi>
        </div>
      </form>
    </div>
  );
};

export default FormStaff;
