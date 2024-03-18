import {} from 'react'
import { FaEdit } from "react-icons/fa";

export default function Employees() {
  return (
    <div>
       <p>Employees</p>
       
      <table className="table-auto w-full border border-collapse p-2 m-2">
        <hr />
        <thead>
          <tr >
            <th className="px-4 py-2 text-left border border-gray-200">Name</th>
            <th className="px-4 py-2 text-left border border-gray-200">Age</th>
            <th className="px-4 py-2 text-left border border-gray-200">Gender</th>
            <th className="px-4 py-2 text-left border border-gray-200">Salary</th>
            <th className="px-4 py-2 text-left border border-gray-200">Email</th>
            <th className="px-4 py-2 text-left border border-gray-200">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border border-gray-200 hover:bg-gray-100">
            <td className="px-4 py-2 border border-gray-200">Lydia Thuranira</td>
            <td className="px-4 py-2 border border-gray-200">22</td>
            <td className="px-4 py-2 border border-gray-200">DTD</td>
            <td className="px-4 py-2 border border-gray-200">10000</td>
            <td className="px-4 py-2 border border-gray-200">lydiathuranira@yahoo.com</td>
            
            <td className="px-4 py-2 border border-gray-200">
              <button className="p-1 focus:outline-none text-white md:text-black ">
                <FaEdit />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
        
    </div>
  )
}
