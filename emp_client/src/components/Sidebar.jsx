import {} from "react";
import {FaBook, FaCog, FaHome, FaPlus} from "react-icons/fa"

// eslint-disable-next-line react/prop-types
export default function Sidebar({isSidebarOpen}) {
  return (
    <div className={`${isSidebarOpen ? "block ":"hidden"}  h-full w-64 fixed bg-gray-800 px-4 py-2`}>
        <div className="my-2 mb-4">
            <h1 className="text-2x text-white font-bold">Dashboard</h1>
        </div>
        <hr />
        <ul className="mt-3 text-white font-bold">
            <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                <a href="" className="px-3">
                    <FaHome className="inline-block w-6 h-6 mr-2 -mt-2"></FaHome>
                    Home
                </a>
            </li>
            <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                <a href="" className="px-3">
                    <FaPlus className="inline-block w-6 h-6 mr-2 -mt-2"></FaPlus>
                    Add Employee
                </a>
            </li>
            <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                <a href="" className="px-3">
                    <FaBook className="inline-block w-6 h-6 mr-2 -mt-2"></FaBook>
                    Report
                </a>
            </li>
            <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                <a href="" className="px-3">
                    <FaCog className="inline-block w-6 h-6 mr-2 -mt-2"></FaCog>
                    Settings
                </a>
            </li>
        </ul>
    </div>
  );
}
