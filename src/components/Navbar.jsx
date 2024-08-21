import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; 

const Navbar = () => {
    const [open, setOpen] = useState(false); 
    const links = [
        { name: "Home", link: '/' },
        { name: "Login", link: '/login' },
        { name: "Register", link: '/registre' }, 
        { name: "About", link: '/about' }
    ];

    return (
        <div className="shadow-lg w-full fixed top-0 left-0 bg-gradient-to-r from-blue-50 to-blue-100 z-50 mb-100">
            <div className="md:flex items-center justify-between bg-blue-900 py-2 px-6 shadow-md rounded-lg">
                <div className="font-bold cursor-pointer flex items-center font-[poppins] text-white">
                    <span className="text-3xl py-4 md:px-10 px-7">
                        <NavLink to="/"> I-Santé Expert</NavLink>
                    </span>
                </div>
                <div onClick={() => setOpen(!open)} className="md:hidden">
                    {open ? <FaTimes className="text-white text-2xl transition-transform duration-300 transform rotate-180" /> : <FaBars className="text-white text-2xl transition-transform duration-300" />} 
                </div>
                <ul
                    className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-blue-900 md:z-auto z-[-1] left-0 w-full md:w-auto pl-9 transition-all mb-2 duration-500 ease-in ${open ? 'top-16' : 'top-[-490px]'}`}
                >
                    {links.map((link) => (
                        <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7 hover:text-yellow-400 transition-all duration-300">
                            <NavLink
                                to={link.link}
                                className="text-white hover:text-yellow-400 duration-300"
                                onClick={() => setOpen(false)} 
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
