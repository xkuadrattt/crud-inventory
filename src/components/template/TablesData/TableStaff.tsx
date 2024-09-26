import { staff } from "../../../data/staff";
import { workPeriod } from "../../../utils/workPeriod";

const TableStaff = () => {
  return (
    <>
      <table className="w-full hidden sm:table table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
            <th className="p-4 border-b border-gray-200">Full Name</th>
            <th className="p-4 border-b border-gray-200">Position</th>
            <th className="p-4 border-b border-gray-200">Email</th>
            <th className="p-4 border-b border-gray-200">Phone</th>
            <th className="p-4 border-b border-gray-200">Work Period</th>
            <th className="p-4 border-b border-gray-200">Status</th>
          </tr>
        </thead>
        <tbody className="text-sm text-gray-600">
          {staff.map((item, index) => (
            <tr
              key={item.id}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              } hover:bg-gray-100 transition-colors`}
            >
              <td className="p-4 border-b border-gray-200">
                <div className="flex flex-col">
                  <p className="font-medium text-gray-800">{`${item.firstName} ${item.lastName}`}</p>
                  <p className="text-xs text-gray-500">{`ID: ${item.id}`}</p>
                </div>
              </td>
              <td className="p-4 border-b border-gray-200">{item.position}</td>
              <td className="p-4 border-b border-gray-200">{item.email}</td>
              <td className="p-4 border-b border-gray-200">{item.phone}</td>
              <td className="p-4 border-b border-gray-200">
                {workPeriod(item.hireDate)}
              </td>
              <td className="p-4 border-b border-gray-200">
                <span
                  className={`px-2 py-1 inline-flex text-xs font-semibold rounded-full ${
                    item.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="block sm:hidden">
        {staff.map((item) => (
          <div
            key={item.id}
            className="border border-gray-300 p-4 bg-white shadow-lg rounded-lg mb-4"
          >
            <div className="flex justify-between items-center">
              <p className="font-semibold text-gray-800 text-lg">{`${item.firstName} ${item.lastName}`}</p>
              <span
                className={`text-sm font-medium px-2 py-1 rounded-full 
          ${
            item.status === "Active"
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
          }`}
              >
                {item.status}
              </span>
            </div>
            <p className="text-xs text-gray-500 mb-4">{`ID: ${item.id}`}</p>
            <div className="grid grid-cols-1 gap-2 text-sm text-gray-600">
              <p>
                <strong>Position:</strong> {item.position}
              </p>
              <p>
                <strong>Email:</strong> {item.email}
              </p>
              <p>
                <strong>Phone:</strong> {item.phone}
              </p>
              <p>
                <strong>Work Period:</strong> {workPeriod(item.hireDate)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TableStaff;
