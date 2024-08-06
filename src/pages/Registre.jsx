import { useState } from "react";
import { useDispatch } from "react-redux";
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
    const [step, setStep] = useState(1);

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
        dispatch(requestRegistre({ firstName, lastName, address, phoneNumber, role, establishment, email, password }));
        navigate('/login');
    };

    return (    
        <div className="flex flex-col items-center justify-center min-h-screen  mt-8 " >
            <div className="text-center mb-6">
                <h1 className="text-3xl font-bold">Inscription</h1>
            </div>
            {step === 1 && (
                <div className="w-full max-w-md">
                    <form onSubmit={(e) => { e.preventDefault(); nextStep(); }}>
                        <div className="text-center mb-4">
                            <h2 className="text-xl font-semibold bg-blue-100 rounded-md ">First Step</h2>
                        </div>
                        <div className="space-y-4">
                            {["firstName", "lastName", "address", "phoneNumber", "role", "establishment"].map((field) => (
                                <div key={field}>
                                    <label htmlFor={field} className="block text-sm font-medium mb-1">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                                    <input
                                        type="text"
                                        value={eval(field)}
                                        id={field}
                                        onChange={e => eval(`set${field.charAt(0).toUpperCase() + field.slice(1)}(e.target.value)`)}
                                        className="border border-gray-300 rounded-md p-2 w-full"
                                    />
                                </div>
                            ))}
                            <div>
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Next Step</button>
                            </div>
                        </div>
                    </form>
                </div>
            )}
            {step === 2 && (
                <div className="w-full max-w-md mt-6">
                    <form onSubmit={handleSubmit}>
                        <div className="text-center mb-4">
                            <h2 className="text-xl font-semibold bg-blue-100 rounded-md">Second Step</h2>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    id="email"
                                    onChange={e => setEmail(e.target.value)}
                                    className="border border-gray-300 rounded-md p-2 w-full"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    id="password"
                                    onChange={e => setPassword(e.target.value)}
                                    className="border border-gray-300 rounded-md p-2 w-full"
                                />
                            </div>
                            <div className="flex justify-between">
                                <button type="button" onClick={prevStep} className="bg-gray-500 text-white px-4 py-2 rounded-md">Back</button>
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Register</button>
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Registre;
