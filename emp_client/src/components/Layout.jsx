/* eslint-disable react/prop-types */
import {} from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
    <Sidebar/>
    <div className="w-full pl-52">
      <Navbar />
      <main>
        <Outlet/>
      </main>
    </div>
    </>
  );
}
