const AddEmployee = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Add Employee</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* First Name */}
        <div>
          <label className="block mb-1 font-medium">First Name</label>
          <input
            type="text"
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Enter first name"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block mb-1 font-medium">Last Name</label>
          <input
            type="text"
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Enter last name"
          />
        </div>

        {/* Blood Group */}
        <div>
          <label className="block mb-1 font-medium">Blood Group</label>
          <input
            type="text"
            className="w-full border rounded-lg px-3 py-2"
            placeholder="e.g. A+, B-"
          />
        </div>

        {/* PAN Number */}
        <div>
          <label className="block mb-1 font-medium">PAN Number</label>
          <input
            type="text"
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Enter PAN number"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Enter email address"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block mb-1 font-medium">Phone Number</label>
          <input
            type="tel"
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Enter phone number"
          />
        </div>

        {/* Designation */}
        <div>
          <label className="block mb-1 font-medium">Designation</label>
          <input
            type="text"
            className="w-full border rounded-lg px-3 py-2"
            placeholder="e.g. Software Engineer"
          />
        </div>

        {/* Employee Status */}
        <div>
          <label className="block mb-1 font-medium">Employee Status</label>
          <select className="w-full border rounded-lg px-3 py-2">
            <option value="">Select Status</option>
            <option value="Active">Active</option>
            <option value="On Leave">On Leave</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        {/* Date of Joining */}
        <div>
          <label className="block mb-1 font-medium">Date of Joining</label>
          <input type="date" className="w-full border rounded-lg px-3 py-2" />
        </div>

        {/* Address - Full Width */}
        <div className="md:col-span-2">
          <label className="block mb-1 font-medium">Address</label>
          <input
            className="w-[500px] border rounded-lg px-3 py-2"
            placeholder="Enter address"
          ></input>
        </div>

        {/* Submit Button - Full Width */}
        <div className="md:col-span-2 text-right">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
