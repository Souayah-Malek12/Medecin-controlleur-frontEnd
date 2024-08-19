import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';

const OutsideLayout = () => {
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);

    return (
        isAuthenticated ? 
            (<Navigate to='/' /> )
            : 
            <>
                (<Navbar />
                <Outlet />)
            </>
    );
}

export default OutsideLayout;
