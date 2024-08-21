import { useState } from "react";
import { useDispatch } from 'react-redux';
import { requestUpdateProfil } from "../store/userSlice";

const UpdateProfile = () => {
    const dispatch = useDispatch();

    const [newFirstName, setNewFirstName] = useState("");
    const [newLastName, setNewLastName] = useState("");
    const [newAddress, setNewAddress] = useState("");
    const [newPhoneNumber, setNewPhoneNumber] = useState("");
    const [newRole, setNewRole] = useState("");
    const [newEstablishment, setNewEstablishment] = useState("");
    const [newEmail, setNewEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(requestUpdateProfil({
            newFirstName,
            newLastName,
            newAddress,
            newPhoneNumber,
            newRole,
            newEstablishment,
            newEmail
        }));
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-10 bg-gradient-to-r from-blue-50 to-blue-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Update Your Profile</h2>
                <div className="space-y-6">
                    <div>
                        <label htmlFor="fn" className="block text-lg font-medium mb-2 text-gray-700">First Name</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-md p-3 text-lg"
                            value={newFirstName}
                            id="fn"
                            onChange={e => setNewFirstName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="ln" className="block text-lg font-medium mb-2 text-gray-700">Last Name</label>
                        <input
                            className="w-full border border-gray-300 rounded-md p-3 text-lg"
                            type="text"
                            value={newLastName}
                            id="ln"
                            onChange={e => setNewLastName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="adr" className="block text-lg font-medium mb-2 text-gray-700">Address</label>
                        <input
                            className="w-full border border-gray-300 rounded-md p-3 text-lg"
                            type="text"
                            value={newAddress}
                            id="adr"
                            onChange={e => setNewAddress(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="pn" className="block text-lg font-medium mb-2 text-gray-700">Phone Number</label>
                        <input
                            className="w-full border border-gray-300 rounded-md p-3 text-lg"
                            type="text"
                            value={newPhoneNumber}
                            id="pn"
                            onChange={e => setNewPhoneNumber(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="rl" className="block text-lg font-medium mb-2 text-gray-700">Role</label>
                        <input
                            className="w-full border border-gray-300 rounded-md p-3 text-lg"
                            type="text"
                            value={newRole}
                            id="rl"
                            onChange={e => setNewRole(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="est" className="block text-lg font-medium mb-2 text-gray-700">Establishment</label>
                        <input
                            className="w-full border border-gray-300 rounded-md p-3 text-lg"
                            type="text"
                            value={newEstablishment}
                            id="est"
                            onChange={e => setNewEstablishment(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="em" className="block text-lg font-medium mb-2 text-gray-700">Email</label>
                        <input
                            className="w-full border border-gray-300 rounded-md p-3 text-lg"
                            type="email"
                            value={newEmail}
                            id="em"
                            onChange={e => setNewEmail(e.target.value)}
                        />
                    </div>
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white rounded-md py-3 text-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                            Update Profile
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default UpdateProfile;
