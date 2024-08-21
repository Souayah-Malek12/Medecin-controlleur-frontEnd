import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

const InsideLayout = () => {
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);

    console.log('InsideLayout isAuthenticated:', isAuthenticated); // Debugging line

    return (
        isAuthenticated ? (
            <>
                <Outlet />
            </>
        ) : (
            <Navigate to='/login' />
        )
    );
}

export default InsideLayout;
