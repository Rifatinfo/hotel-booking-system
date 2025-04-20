import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";

const Roots = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Roots;
