import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestConsultProfil } from "../store/userSlice";
import { NavLink } from "react-router-dom";

const Profil = () => {
    const { details, isLoading, error } = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestConsultProfil());
    }, [dispatch]);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>Error Loading Profile</h1>;
    }

    if (!details) {
        return <h1>No profile data available</h1>;
    }

    return (
        <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen mt-10">
        <div className=" mt-10 bg-white p-8 rounded-lg shadow-xl w-full max-w-lg mx-auto border border-blue-300">
            <h1 className="text-2xl font-extrabold text-blue-900 mb-4">{details.firstName} {details.lastName}</h1>
            <p className="text-xl text-gray-700 mb-2">Addresse :<span className="text-blue-700 font-medium"></span>{details.address}</p>
            <p className="text-xl text-gray-700 mb-2">Phone: <span className="text-blue-700 font-medium">{details.phoneNumber}</span></p>
            <p className="text-xl text-gray-700 mb-2">Role: <span className="text-blue-700 font-medium">{details.role}</span></p>
            <p className="text-xl text-gray-700 mb-4">Email: <span className="text-blue-700 font-medium">{details.email}</span></p>
        </div>
        <div className="mt-6 flex flex-col items-center space-y-4">
            <NavLink
                to='/updprofil'
                className="bg-blue-600 text-white font-semibold text-lg px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
            >
                Update Profile
            </NavLink>
            <NavLink
                to='/updpass'
                className="bg-blue-600 text-white font-semibold text-lg px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
            >
                Update Password
            </NavLink>
        </div>
    </div>
    

    );
};

export default Profil;
