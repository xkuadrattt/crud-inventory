import { ButtonUi, InputUi } from "../../ui";

const FormProductOut = () => {
  return (
    <>
      <form>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Product Registration
        </h2>
        <form className="space-y-6">
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
                placeholder="Id Product"
                required={true}
              />
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
                placeholder="Title Product"
                required={true}
                disabled
              />
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
              placeholder="Product Category"
              required={true}
              disabled
            />
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
              placeholder="Price"
              step="0.01"
              required={true}
            />
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
      </form>
    </>
  );
};

export default FormProductOut;
