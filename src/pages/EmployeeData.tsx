import { useNavigate } from "react-router-dom";
import SearchIcon from "../assets/SearchBar.svg";
import tableData from "../data/table.json";

const EmployeeData = () => {
  const navigate = useNavigate();

  const handleAddEmployee = () => {
    navigate("/dashboard/add-employee");
  };

  return (
    <div className="p-4 sm:p-6 md:p-8">
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <h1 className="font-bold text-2xl">Employee</h1>
        <button
          onClick={handleAddEmployee}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all w-full sm:w-auto"
        >
          + Add Employee
        </button>
      </div>

      {/* Search Bar */}
      <div className="w-full max-w-3xl mb-6">
        <div className="relative">
          <img
            src={SearchIcon}
            alt="Search"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none"
          />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-12 pr-4 py-3 rounded-full bg-gray-300 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Table (Scrollable on small screens) */}
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full bg-gray-200 rounded-lg text-sm sm:text-base">
          <thead className="bg-gray-300 text-gray-700 text-left">
            <tr>
              <th className="px-4 py-2 whitespace-nowrap">S.N.</th>
              <th className="px-4 py-2 whitespace-nowrap">ID</th>
              <th className="px-4 py-2 whitespace-nowrap">Name</th>
              <th className="px-4 py-2 whitespace-nowrap">Address</th>
              <th className="px-4 py-2 whitespace-nowrap">Email</th>
              <th className="px-4 py-2 whitespace-nowrap">Phone No</th>
              <th className="px-4 py-2 whitespace-nowrap">Designation</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((employee, index) => (
              <tr key={employee.id} className="hover:bg-gray-100 bg-gray-200">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{employee.id}</td>
                <td className="px-4 py-2">{employee.name}</td>
                <td className="px-4 py-2">{employee.address}</td>
                <td className="px-4 py-2">{employee.email}</td>
                <td className="px-4 py-2">{employee.phone}</td>
                <td className="px-4 py-2">{employee.designation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeData;
