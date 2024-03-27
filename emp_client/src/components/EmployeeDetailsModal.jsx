/* eslint-disable react/prop-types */
import {} from "react";
// import {FaEdit, FaTrash} from 'react-icons/fa'
// import { Link } from "react-router-dom";
const EmployeeDetailsModal = ({ employee, isOpen, onClose, onDelete, onEdit }) => {

  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <div
      className={` flex items-center justify-center modal fixed top-16 left-12 right-0 bottom-0 overflow-y-auto z-50 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="modal-overlay absolute inset-0  opacity-50"></div>
      <div className="modal-container bg-gray-300 w-3/4 mx-auto my-10 h-3/4 p-4 rounded shadow-lg relative z-50">
        <div className="modal-header flex justify-between items-center">
          <h2 className="text-lg font-bold">
            {employee?.firstName} {employee?.lastName}&apos;s Details
          </h2>
          <button
            onClick={onClose}
            className="modal-close cursor-pointer px-4"
          >
            <span className="text-5xl text-gray-700">&times;</span>
          </button>
        </div>
        <div className="modal-body m-4">
          {/* Display employee details here */}
          <p><span className="font-semibold">Email:</span> {employee?.email}</p>
          <p><span className="font-semibold">Gender:</span> {employee?.gender}</p>
          <p><span className="font-semibold">Phone:</span> {employee?.phoneNumber}</p>
          <p><span className="font-semibold">Age:</span> {calculateAge(employee?.dob)}</p>
          <p><span className="font-semibold">Department:</span> {employee?.department}</p>
          <p><span className="font-semibold">Cadre:</span> {employee?.cadre}</p>
          <p><span className="font-semibold">Gross Pay:</span> {employee?.gender}</p>
          <p><span className="font-semibold">Status:</span> {employee?.active ? "Active" : "No longer an employee"}</p>
          <p><span className="font-semibold">Joined on:</span> {employee?.startDate}</p>
          <p>
            <span className="font-semibold">Exited on:</span> {employee?.endDate ? employee.endDate : "Still an employee"}
          </p>
          {/* Add more details as needed */}
        </div>
        <div className="modal-footer flex justify-end items-center mt-4 mr-4">
          <button onClick={() => onEdit(employee.id)} className=" bg-gray-800 hover:bg-gray-950 text-white px-4 py-2 rounded">
            Edit
          </button>
          <button onClick={() => {onDelete(employee.id); onClose();}} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded ml-4">
            Delete
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default EmployeeDetailsModal;
