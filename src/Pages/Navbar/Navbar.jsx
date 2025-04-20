import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import Button from "../../Componets/Button";
const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className="bg-gray-100">
            <nav className="fixed top-0 left-0 w-full shadow bg-white z-50">
                <div className="md:max-w-7xl md:mx-auto ">
                    <div className="flex justify-between items-center py-4 md:pl-0 pl-4">
                        {/* Logo */}
                        <div>
                            {/* <Link to="/"><img className="w-full h-[32px]" src={logo} /></Link> */}
                            <Link to="/"><p className="text-2xl font-bold">TICKET BOOKING</p></Link>
                        </div>

                        {/* Desktop Menu */}
                        <ul className="hidden text-lg md:flex items-center space-x-6  font-medium text-[#C73450] ">
                            <li onClick={() => { setOpen(false) }} className="cursor-pointer transition-colors duration-300" >Home</li>
                            <li onClick={() => { setOpen(false) }} className="cursor-pointer transition-colors duration-300" >Available Room</li>
                            <li onClick={() => { setOpen(false) }} className="cursor-pointer transition-colors duration-300" >My Booking</li>
                        </ul>
                        <div className="hidden md:flex items-center gap-6 ">
                            <Button />
                        </div>

                        {/* Mobile Menu Button */}
                        <div
                            onClick={() => setOpen(!open)}
                            className="block md:hidden text-gray-800 focus:outline-none mr-4 md:mr-0"
                        >
                            {open ? <IoClose className="text-3xl" /> : <IoMenu className="text-3xl" />}
                        </div>
                    </div>
                </div>


                {/* Mobile Menu */}
                <div
                    className={`absolute top-0 right-0 h-screen bg-white shadow-lg w-8/12 transition-transform duration-300 transform 
          ${open ? "translate-x-0" : "translate-x-full"}`}
                >
                    <div className="flex justify-end p-4">
                        <IoClose
                            className="text-3xl cursor-pointer text-gray-800"
                            onClick={() => setOpen(false)}
                        />
                    </div>
                    <ul className="flex flex-col items-center space-y-4 pt-10 text-gray-700 font-medium">
                        <li onClick={() => { setOpen(false) }} className="cursor-pointer transition-colors duration-300" >Home</li>
                        <li onClick={() => { setOpen(false) }} className="cursor-pointer transition-colors duration-300" >Available Room</li>
                        <li onClick={() => { setOpen(false) }} className="cursor-pointer transition-colors duration-300" >My Booking</li>
                        <div>
                            <Button></Button>
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;