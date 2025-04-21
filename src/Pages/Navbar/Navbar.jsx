import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import Button from "../../Componets/Button";
import UseCart from "../../hooks/UseCart";
const Navbar = () => {
    const [cart] = UseCart();
    console.log(cart);
    const [open, setOpen] = useState(false);
    // if (isPending) return 'Loading...'

    return (
        <div className="bg-gray-100">
            <nav className="fixed top-0 left-0 w-full shadow bg-white z-50">
                <div className="md:max-w-7xl md:mx-auto ">
                    <div className="flex justify-between items-center py-4 md:pl-0 pl-4">
                        {/* Logo */}
                        <div>
                            {/* <Link to="/"><img className="w-full h-[32px]" src={logo} /></Link> */}
                            <Link to="/"><p className="text-2xl font-bold text-[#C73450]">TICKET BOOKING</p></Link>
                        </div>

                        {/* Desktop Menu */}
                        <ul className="hidden text-lg md:flex items-center space-x-6  font-medium text-[#C73450]">
                          <Link to="/">  <li onClick={() => { setOpen(false) }} className="cursor-pointer transition-colors duration-300" >Home</li></Link>
                            <Link to="/available-room"> <li onClick={() => { setOpen(false) }} className="cursor-pointer transition-colors duration-300" >Available Room</li></Link>
                            

                        </ul>

                        <div className="md:flex md:items-center md:gap-2">
                            {/* shopping cart  */}
                            <Link to="/dashboard/cart">
                                <div className="flex-none">
                                    <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                            <div className="indicator">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                                                <span className="badge badge-md indicator-item text-red-600">{cart.length}</span>
                                            </div>
                                        </div>
                                        <div
                                            tabIndex={0}
                                            className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                                            <div className="card-body">
                                                <span className="text-lg font-bold">{cart.length} Items</span>
                                                <span className="text-info">Subtotal: $999</span>
                                                <div className="card-actions">
                                                    <button className="btn btn-primary btn-block">View cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <div className="hidden md:flex items-center gap-6 ">
                                <Button />
                            </div>
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
                        <Link to="/"><li onClick={() => { setOpen(false) }} className="cursor-pointer transition-colors duration-300" >Home</li></Link>
                        <li onClick={() => { setOpen(false) }} className="cursor-pointer transition-colors duration-300" >Available Room</li>
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