import {} from "react";

export default function Employees() {
  return (
    <div>
      <div className="w-full h-full p-4 justify-center items-center">
        <h1 className="text-2x font-bold">Employees</h1>
        <hr />
        <table className=" ">
          <thead className="">
            <tr className="">
              <th className="text-sm font-bold">No.</th>
              <th className="text-sm font-bold">Employee No.</th>
              <th className="text-sm font-bold">First Name</th>
              <th className="text-sm font-bold">Last Name</th>
              <th className="text-sm font-bold">Email</th>
              <th className="text-sm font-bold">Gender</th>
              <th className="text-sm font-bold">Phone</th>
              <th className="text-sm font-bold">Department</th>
              <th className="text-sm font-bold">Cadre</th>
              <th className="text-sm font-bold">Start Date</th>
              <th className="text-sm font-bold">End Date</th>
              <th className="text-sm font-bold">Status</th>
              <th className="text-sm font-bold">Salary</th>
              <th className="text-sm font-bold">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-sm">1</td>
              <td className="text-sm">E111</td>
              <td className="text-sm">Dan</td>
              <td className="text-sm">Bruce</td>
              <td className="text-sm">danielbravin@gmail.com</td>
              <td className="text-sm">Male</td>
              <td className="text-sm">555-555-5555</td>
              <td className="text-sm">Finance</td>
              <td className="text-sm">Accountant</td>
              <td className="text-sm">1/12/24</td>
              <td className="text-sm">1/12/24</td>
              <td className="text-sm">Active</td>
              <td className="text-sm">152455</td>
              <td className="font-bold text-sm text-blue-500">
                <ul className ="flex mx-4 space-x-2">
                    <li>Edit</li>
                    <li>View</li>
                    <li>Delete</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
