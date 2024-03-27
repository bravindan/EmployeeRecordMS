import {} from "react";
import { FaBook, FaCog, FaHome, FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Sidebar() {
  return (
    <div className="block h-full w-48 fixed bg-gray-800 px-4 py-2">
      {/* <div className="my-2 mb-4">
        <h1 className="text-2x text-white font-bold">Dashboard</h1>
      </div> */}
      {/* <hr /> */}
      <ul className=" text-white font-bold">
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <NavLink to="/" className="px-2">
            <FaHome className="inline-block w-6 h-6 mr-1 -mt-2"></FaHome>
            Home
          </NavLink>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <NavLink to="/new" className="px-2">
            <FaPlus className="inline-block w-6 h-6 mr-1 -mt-2"></FaPlus>
            Add Employee
          </NavLink>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <NavLink to="/report" className="px-2">
            <FaBook className="inline-block w-6 h-6 mr-1 -mt-2"></FaBook>
            Report
          </NavLink>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <NavLink to="/settings" className="px-2">
            <FaCog className="inline-block w-6 h-6 mr-1 -mt-2"></FaCog>
            Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
