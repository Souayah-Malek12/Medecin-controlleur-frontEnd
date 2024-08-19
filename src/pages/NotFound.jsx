import { NavLink } from 'react-router-dom';
import img1 from '../img/img404.png';

function NotFound() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen text-center">
            <h1 className="text-4xl mb-4">Not Found</h1>
            <img src={img1} alt="Not Found" className="max-w-full h-auto mb-6" />
            <NavLink to="/" className="text-blue-500 hover:text-blue-700 text-lg">
                Go Home
            </NavLink>
        </div>
    );
}

export default NotFound;
