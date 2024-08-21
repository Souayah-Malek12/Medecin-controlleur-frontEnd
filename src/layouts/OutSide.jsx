import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const OutsideLayout = () => {
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);

    return (
        !isAuthenticated ? (
            <>
                <Navbar />
                <Outlet />
            </>
        ) : (
            <Navigate to='/' />
        )
    );
}

export default OutsideLayout;
