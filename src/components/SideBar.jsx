import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaEnvelope, FaSearch, FaCalendarAlt, FaList, FaInfoCircle } from "react-icons/fa";

const Sidebar = () => {
    const [visible, setIsVisible] = useState(false); // Start with the sidebar hidden

    const toggleSidebar = () => {
        setIsVisible(!visible);
    };

    return (
        <div className="relative">
            <button
                onClick={toggleSidebar}
                className="fixe top-20 left-4 z-50 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
            >
                {visible ? <FaTimes /> : <FaBars />}
            </button>
            <nav
                className={`fixed top-21 left-0 h-full w-64 bg-blue-800 text-white flex flex-col py-7 transition-transform transform ${
                    visible ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <ul className="w-full">
                    <li className="w-full">
                        <NavLink
                            to="/courrier"
                            className="flex items-center px-6 py-3 hover:bg-blue-700 w-full transition duration-200"
                            activeClassName="bg-blue-700"
                        >
                            <FaEnvelope className="mr-3 text-xl" />
                            <span className="nav-text">Courriers</span>
                        </NavLink>
                    </li>
                    <li className="w-full">
                        <NavLink
                            to="/Namesearch"
                            className="flex items-center px-6 py-3 hover:bg-blue-700 w-full transition duration-200"
                            activeClassName="bg-blue-700"
                        >
                            <FaSearch className="mr-3 text-xl" />
                            <span className="nav-text">Search By Name</span>
                        </NavLink>
                    </li>
                    <li className="w-full">
                        <NavLink
                            to="/Datesearch"
                            className="flex items-center px-6 py-3 hover:bg-blue-700 w-full transition duration-200"
                            activeClassName="bg-blue-700"
                        >
                            <FaCalendarAlt className="mr-3 text-xl" />
                            <span className="nav-text">Search By Date</span>
                        </NavLink>
                    </li>
                    <li className="w-full">
                        <NavLink
                            to="/allcourrier"
                            className="flex items-center px-6 py-3 hover:bg-blue-700 w-full transition duration-200"
                            activeClassName="bg-blue-700"
                        >
                            <FaList className="mr-3 text-xl" />
                            <span className="nav-text">All Courrier</span>
                        </NavLink>
                    </li>
                    <li className="w-full">
                        <NavLink
                            to="/trac"
                            className="flex items-center px-6 py-3 hover:bg-blue-700 w-full transition duration-200"
                            activeClassName="bg-blue-700"
                        >
                            <FaInfoCircle className="mr-3 text-xl" />
                            <span className="nav-text">Traceability</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
