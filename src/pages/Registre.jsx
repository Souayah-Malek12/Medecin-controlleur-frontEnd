import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { requestRegistre } from "../store/userSlice";

const Registre = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [role, setRole] = useState("");
    const [establishment, setEstablishment] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [step, setStep] = useState(1);

    const {error} = useSelector((state)=>state.user)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(requestRegistre({ firstName, lastName, address, phoneNumber, role, establishment, email, password, confirmPassword }));
        
        navigate('/login')
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-r from-blue-50 to-blue-100">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-extrabold text-blue-800 mt-10">Inscription</h1>
            </div>
            {step === 1 && (
                <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg border border-gray-300">
                    <form onSubmit={(e) => { e.preventDefault(); nextStep(); }}>
                        <div className="text-center mb-6">
                            <h2 className="text-2xl font-semibold text-blue-700 bg-blue-100 p-3 rounded-md">Step 1: Basic Information</h2>
                        </div>
                        <div className="space-y-5">
                            {["firstName", "lastName", "address", "phoneNumber", "role", "establishment"].map((field) => (
                                <div key={field}>
                                    <label htmlFor={field} className="block text-sm font-medium mb-2 text-gray-700 capitalize">{field.replace(/([A-Z])/g, ' $1').trim()}</label>
                                    <input
                                        type="text"
                                        required
                                        value={eval(field)}
                                        id={field}
                                        onChange={e => eval(`set${field.charAt(0).toUpperCase() + field.slice(1)}(e.target.value)`)}
                                        className="border border-gray-300 rounded-lg p-3 w-full text-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>
                            ))}
                            <div>
                                <button type="submit" className="bg-blue-600 text-white px-5 py-3 rounded-md shadow-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Next Step</button>
                            </div>
                        </div>
                    </form>
                </div>
            )}
            {step === 2 && (
                <div className="w-full max-w-lg mt-8 bg-white p-8 rounded-lg shadow-lg border border-gray-300">
                    <form onSubmit={handleSubmit}>
                        <div className="text-center mb-6">
                            <h2 className="text-2xl font-semibold text-blue-700 bg-blue-100 p-3 rounded-md">Step 2: Account Details</h2>
                        </div>
                        <div className="space-y-5">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">Email</label>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    id="email"
                                    onChange={e => setEmail(e.target.value)}
                                    className="border border-gray-300 rounded-lg p-3 w-full text-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium mb-2 text-gray-700">Password</label>
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    id="password"
                                    onChange={e => setPassword(e.target.value)}
                                    className="border border-gray-300 rounded-lg p-3 w-full text-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2 text-gray-700">Confirm Password</label>
                                <input
                                    type="password"
                                    required
                                    value={confirmPassword}
                                    id="confirmPassword"
                                    onChange={(e => setConfirmPassword(e.target.value))}
                                    className="border border-gray-300 rounded-lg p-3 w-full text-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"

                                />
                            </div>
                            <div className="flex justify-between mt-6">
                                <button type="button" onClick={prevStep} className="bg-gray-600 text-white px-5 py-3 rounded-md shadow-md hover:bg-gray-700 transition-colors">Back</button>
                                <button type="submit" className="bg-blue-600 text-white px-5 py-3 rounded-md shadow-md hover:bg-blue-700 transition-colors">Register</button>
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Registre;
