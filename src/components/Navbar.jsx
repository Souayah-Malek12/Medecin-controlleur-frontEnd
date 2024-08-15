import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; 

const Navbar = () => {
    const [open, setOpen] = useState(false); // Start with closed state
    const links = [
        { name: "Home", link: '/' },
        { name: "Login", link: '/login' },
        { name: "Register", link: '/register' }, // Corrected 'registre' to 'register'
        { name: "About", link: '/about' }
    ];

    return (
        <div className="shadow-md w-full fixed top-0 left-0 bg-blue-50">
            <div className="md:flex items-center justify-between bg-white py-2 m-2 px-1 shadow-md rounded-lg">
                <div className="font-bold cursor-pointer flex items-center font-[poppins] text-gray-800">
                    <span className="text-3xl text-blue-600 py-4 md:px-10 px-7">
                        <NavLink to="/"> I-Santé Expert</NavLink>
                    </span>
                </div>
                <div onClick={() => setOpen(!open)} className="md:hidden">
                    {open ? <FaTimes className="text-blue-600 text-2xl" /> : <FaBars className="text-blue-600 text-2xl" />} 
                </div>
                <ul
                    className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto pl-9 transition-all mb-2 duration-500 ease-in ${open ? 'top-16' : 'top-[-490px]'}`}
                >
                    {links.map((link) => (
                        <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7 hover:text-blue-600 transition-all duration-300">
                            <NavLink
                                to={link.link}
                                className="text-gray-800 hover:text-blue-600 duration-300"
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
