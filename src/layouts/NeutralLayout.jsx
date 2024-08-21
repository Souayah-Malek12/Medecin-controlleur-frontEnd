import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const NeutralLayout = ()=> {


    const isAuthenticated = useSelector(state=> state.user.isAuthenticated)

    return (

        isAuthenticated ? 
        <>
           ( <Outlet />
             )
        </> 
        : 

        <>
           ( <Outlet />
            <Navbar /> )
        </>
        
    )
}

export default NeutralLayout;