import { useState, useEffect } from "react";
import axios from "axios";
import {useParams, useNavigate } from "react-router-dom";

export default function EditEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employeeData, setEmployeeData] = useState({
    employeeNo: "",
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    phoneNumber: "",
    department: "",
    cadre: "",
    dob: "",
    startDate: "",
    endDate: "",
    active: true,
    salary: "",
  });
  const [loading, setLoading] = useState(true);
  // console.log(id)
  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1.0/employees/${id}`);
        setEmployeeData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching employee data:", error);
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEmployeeData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(employeeData)
    try {
      await axios.patch(`http://localhost:8080/api/v1.0/employees/${id}`, employeeData);
      alert("Employee updated successfully!");
      navigate("/"); // Redirect to employees listing page
    } catch (error) {
      console.error("Failed to update employee:", error);
      alert("Failed to update employee.");
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold">Edit Employee</h1>
      <hr />
      <form onSubmit={handleSubmit} className="flex flex-wrap -m-2">
        <div className="w-full md:w-1/2 p-2">
          <label htmlFor="employeeNo" className="block mb-1 font-semibold">Employee No</label>
          <input
            type="text"
            name="employeeNo"
            value={employeeData.employeeNo}
            onChange={handleChange}
            placeholder="Employee No"
            className="input mb-2 w-full p-2 border rounded"
          />
          <label htmlFor="firstName" className="block mb-1 font-semibold">First Name</label>
          <input
            type="text"
            name="firstName"
            value={employeeData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="input mb-2 w-full p-2 border rounded"
          />
          <label htmlFor="lastName" className="block mb-1 font-semibold">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={employeeData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="input mb-2 w-full p-2 border rounded"
          />
          <label htmlFor="email" className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={employeeData.email}
            onChange={handleChange}
            placeholder="Email"
            className="input mb-2 w-full p-2 border rounded"
          />
          <label htmlFor="gender" className="block mb-1 font-semibold">Gender</label>
          <select
            name="gender"
            value={employeeData.gender}
            onChange={handleChange}
            className="input mb-2 w-full p-2 border rounded"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <label htmlFor="phone" className="block mb-1 font-semibold">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={employeeData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone"
            className="input mb-2 w-full p-2 border rounded"
          />
        </div>
        <div className="w-full md:w-1/2 p-2">
          <label htmlFor="department" className="block mb-1 font-semibold">Department</label>
          <input
            type="text"
            name="department"
            value={employeeData.department}
            onChange={handleChange}
            placeholder="Department"
            className="input mb-2 w-full p-2 border rounded"
          />
          <label htmlFor="employeeNo" className="block mb-1 font-semibold">Cadre</label>
          <input
            type="text"
            name="cadre"
            value={employeeData.cadre}
            onChange={handleChange}
            placeholder="Cadre"
            className="input mb-2 w-full p-2 border rounded"
          />
          <label htmlFor="employeeNo" className="block mb-1 font-semibold">DOB</label>
            <input
            type="date"
            name="dob"
            value={employeeData.dob}
            onChange={handleChange}
            placeholder="Date of birth"
            className="input mb-2 w-full p-1 border rounded"
          />
          <label htmlFor="employeeNo" className="block mb-1 font-semibold">Start Date</label>
          <input
            type="date"
            name="startDate"
            value={employeeData.startDate}
            onChange={handleChange}
            placeholder="Start Date (YYYY-MM-DD or n/a)"
            className="input mb-2 w-full p-2 border rounded"
          />
          <label htmlFor="employeeNo" className="block mb-1 font-semibold">End Date</label>
          <input
            type="date"
            name="endDate"
            value={employeeData.endDate}
            onChange={handleChange}
            placeholder="End Date (YYYY-MM-DD or n/a)"
            className="input mb-1 w-full p-2 border rounded"
          />
          {/* <label className="flex items-center">Status:</label> */}

          <label htmlFor="employeeNo" className="block mb-1 font-semibold">Gross Pay</label>
          <input
            type="text"
            name="salary"
            value={employeeData.salary}
            onChange={handleChange}
            placeholder="Salary"
            className="input mb-2 w-full p-2 border rounded"
          />
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              name="active"
              checked={employeeData.active}
              onChange={handleChange}
              className="mr-2"
            />{" "}
            Active
          </label>
         
        </div>
        <div className="w-full flex justify-end p-2">
          <button
            type="submit"
            className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
