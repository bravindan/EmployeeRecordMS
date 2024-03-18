/* eslint-disable react/prop-types */
import {} from "react";
import Navbar from "./Navbar";


export default function Dashboard({ isSidebarOpen, setIsSidebarOpen }) {
  return (
    <div className={`${isSidebarOpen ? "ml-64  " : ""} duration-300 w-full`}>
      <Navbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </div>
  );
}
