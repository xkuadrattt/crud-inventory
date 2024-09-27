import { ButtonUi, InputUi } from "../../ui";

const FormCategory = () => {
  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Category Registration
      </h2>
      <form className="space-y-6">
        <div>
          <label
            htmlFor="idCategory"
            className="block text-sm font-medium text-gray-700"
          >
            Id Category
          </label>
          <InputUi
            type="text"
            id="idCategory"
            placeholder="Id Category"
            required={true}
            className="mt-1 w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div>
          <label
            htmlFor="categoryName"
            className="block text-sm font-medium text-gray-700"
          >
            Category Name
          </label>
          <InputUi
            type="text"
            id="categoryName"
            placeholder="Category Name"
            required={true}
            className="mt-1 w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div>
          <label
            htmlFor="descCategory"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="descCategory"
            placeholder="Category Description"
            rows={4}
            className="mt-1 w-full border border-gray-300 rounded-md p-2"
          ></textarea>
        </div>

        <div className="flex justify-end gap-4 mt-6">
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

export default FormCategory;
