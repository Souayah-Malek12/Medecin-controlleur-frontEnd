import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import SideBar from '../components/SideBar';

const InsideLayout = () => {
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);

    return (
        isAuthenticated ? 
        (
            <>
                <SideBar />
                <Outlet /> 
            </>
        ) : 
        (
            <Navigate to='/login' />
        )
    );
}

export default InsideLayout;
