import { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import EmployeeDetailsModal from "../components/EmployeeDetailsModal";
export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate =useNavigate ()
  const getEmployees = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1.0/employees");
      setEmployees(response.data);
      // console.log(employees)
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/v1.0/employees/${id}`);
      setEmployees(prevEmployees => prevEmployees.filter(employee => employee.id !== id));
      closeModal();
      alert("Employee deleted successfully!");
      // navigate("/"); // Redirect to employees listing page
    } catch (error) {
      console.error("Error deleting employee:", error);
      alert("Failed to delete employee.");
    }
  };
  const handleEdit = (id) => {
    // Navigate to the edit page with the employee ID
    navigate(`/employee/${id}`);
  };
  

  useEffect(() => {
    getEmployees();
  }, []);

  const openModal = (employee) => {
    setSelectedEmployee(employee);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedEmployee(null);
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center h-screen">
      <div className="w-full p-2">
      <h1 className="text-2x font-bold">Employees</h1>
        <hr />

        {loading ? (
          <div className="flex items-center justify-center w-full h-full absolute bg-white opacity-75 z-50">
            <p className="text-center">Loading...</p>
        </div>
        ) : employees.length === 0 ? (
          <div className="flex items-center justify-center w-full h-full absolute bg-white opacity-75 z-50">
            <p className="text-center">No records found...</p>
        </div>
        ) : (
          <table className="w-full border-collapse">
            <thead className="">
              <tr>
                <th className="text-sm font-bold border px-2 py-2">#</th>
                <th className="text-sm font-bold border px-2 py-2">Emp No.</th>
                <th className="text-sm font-bold border px-2 py-2">Name</th>
                {/* <th className="text-sm font-bold border px-2 py-2">Last Name</th> */}
                <th className="text-sm font-bold border px-2 py-2">Email</th>
                <th className="text-sm font-bold border px-2 py-2">Gender</th>
                <th className="text-sm font-bold border px-2 py-2">Phone</th>
                <th className="text-sm font-bold border px-2 py-2">Department</th>
                <th className="text-sm font-bold border px-2 py-2">Cadre</th>
                {/* <th className="text-sm font-bold border px-2 py-2">Start Date</th> */}
                {/* <th className="text-sm font-bold border px-2 py-2">End Date</th> */}
                <th className="text-sm font-bold border px-2 py-2">Status</th>
                <th className="text-sm font-bold border px-2 py-2">Salary (Ksh)</th>
                <th className="text-sm font-bold border px-2 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => (
                <tr key={employee.id}>
                  <td className="text-sm border px-2 py-0">{index + 1}</td>
                  <td className="text-sm border px-2 py-0">{employee.employeeNo}</td>
                  <td className="text-sm border px-2 py-0">{`${employee.firstName}   ${employee.lastName}`}</td>
                  {/* <td className="text-sm border px-2 py-0">{employee.lastName}</td> */}
                  <td className="text-sm border px-2 py-0">{employee.email}</td>
                  <td className="text-sm border px-2 py-0">{employee.gender}</td>
                  <td className="text-sm border px-2 py-0">{employee.phoneNumber}</td>
                  <td className="text-sm border px-2 py-0">{employee.department}</td>
                  <td className="text-sm border px-2 py-0">{employee.cadre}</td>
                  {/* <td className="text-sm border px-2 py-0">{employee.startDate}</td> */}
                  {/* <td className="text-sm border px-2 py-0">{employee.endDate ? employee.endDate : "n/a"}</td> */}
                  <td className={`text-sm border px-2 ${employee.active ? 'bg-green-300' : ' bg-gray-400'}`}>
                    {employee.active ? "Active" : "Retired"}
                  </td>
                  <td className="text-sm border px-2 py-0">{employee.salary}</td>
                  <td className="font-bold border px-2 py-0">
                    <ul className="flex gap-2">
                      <Link to={`/employee/${employee.id}`}><FaEdit className=" text-gray-800"/></Link>
                      <Link onClick={() => openModal(employee)}><FaEye className="  text-gray-800"/></Link>
                      <Link onClick={()=>{deleteEmployee (employee.id)}}><FaTrash className=" text-red-600 "/></Link>
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>      
        )}
         {/* Popup modal */}
         <EmployeeDetailsModal
          employee={selectedEmployee}
          isOpen={isModalOpen}
          onClose={closeModal}
          onDelete={deleteEmployee}
          onEdit={handleEdit}
        />
      </div>
    </div>
  );
}
