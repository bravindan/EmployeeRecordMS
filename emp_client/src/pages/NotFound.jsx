import {} from "react";
import { useNavigate } from "react-router-dom";
export default function NotFound() {
    const navigate = useNavigate();
   
  return (
    <div className="flex h-screen items-center justify-center">
        <div className="bg-gray-800 p-8 rounded-lg text-center text-white w-72 justify-around">
            <h1 className="font-bold text-6xl p-2 ">404</h1>
            <p className="font-semibold p-2 ">Page Not Found</p>
            <button onClick ={()=>navigate(-1)} className="bg-white px-4 text-black rounded-md">Return</button>
        </div>
    </div>
  );
}
