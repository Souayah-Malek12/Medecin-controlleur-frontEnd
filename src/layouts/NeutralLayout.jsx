import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import SideBar from '../components/SideBar';
import Navbar from "../components/Navbar";

const NeutralLayout = ()=> {


    const isAuthenticated = useSelector(state=> state.user.isAuthenticated)

    return (

        isAuthenticated ? 
        <>
           ( <Outlet />
            <SideBar /> )
        </> 
        : 

        <>
           ( <Outlet />
            <Navbar /> )
        </>
        
    )
}

export default NeutralLayout;