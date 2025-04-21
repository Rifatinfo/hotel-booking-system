import { NavLink, Outlet } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";

const DashBoard = () => {
    return (
        <div className="flex flex-col md:flex-row gap-2 max-w-7xl mx-auto md:p-0 p-2">
            {/* routing content */}
            <div className="w-full  md:w-64 md:min-h-screen bg-[#C73450]">
                <div className="">
                    <div className="text-white font-semibold text-center py-2 mb-4">
                        <p className="md:text-2xl">HOTEL BOOKING SYSTEM</p>
                    </div>
                    <div className="w-40 mx-auto h-0.5 bg-white border-1 border-white"></div>
                </div>
                <ul className="p-4">
                    <li className="mb-2"><NavLink to="/dashboard/cart">
                        <div className="flex gap-2 text-xl items-center justify-center md:items-start md:justify-start text-white font-semibold ">
                            <p><FaCartShopping /></p>
                            <p>My Card Item</p>
                        </div>
                    </NavLink></li>
                    <li className="mb-2"><NavLink to="/">
                        <div className="flex gap-2 text-xl   items-start ml-[58px] md:ml-0 justify-start text-white font-semibold ">
                            <p><IoHome /></p>
                            <p>Home</p>
                        </div>
                    </NavLink></li>
                </ul>
            </div>
            <div className="w-full md:flex-1 ">
                <Outlet />
            </div>
        </div>
    );
};

export default DashBoard;