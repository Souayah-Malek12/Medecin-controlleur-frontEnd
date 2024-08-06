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
    <div className="flex flex-col items-center justify-center  min-h-screen p-10 bg-gray-100">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <div className="space-y-1 ">
                <div >
                <label htmlFor="fn" className="block text-sm font-medium mb-1 text-gray-600" >Update First Name</label>
                <input
                    type="text"
                    className="w-full border border-gary-300 rounded-md p-2 w-full"
                    value={newFirstName}
                    id="fn"
                    onChange={e => setNewFirstName(e.target.value)}
                />
                </div>
                <div>
                <label htmlFor="ln" className="block text-sm font-medium mb-1 text-gray-600" >Update Last Name</label>
                <input
                    className="w-full border border-gary-300 rounded-md p-2 w-full"
                    type="text"
                    value={newLastName}
                    id="ln"
                    onChange={e => setNewLastName(e.target.value)}
                />
                </div>
                <div>
                <label htmlFor="adr" className="block text-sm font-medium mb-1 text-gray-600">Update Address</label>
                <input
                     className="w-full border border-gary-300 rounded-md p-2 w-full"
                    type="text"
                    value={newAddress}
                    id="adr"
                    onChange={e => setNewAddress(e.target.value)}
                />
                </div>
                <div>

                <label htmlFor="pn" className="block text-sm font-medium mb-1 text-gray-600">Update Phone Number</label>
                <input
                     className="w-full border border-gary-300 rounded-md p-2 w-full"
                    type="text" 
                    value={newPhoneNumber}
                    id="pn"
                    onChange={e => setNewPhoneNumber(e.target.value)}
                />
                </div>
                <div>
                <label htmlFor="rl" className="block text-sm font-medium mb-1 text-gray-600">Update Role</label>
                <input

                     className="w-full border border-gary-300 rounded-md p-2 w-full"
                    type="text"
                    value={newRole}
                    id="rl"
                    onChange={e => setNewRole(e.target.value)}
                />
                </div>
                <div>

                <label htmlFor="est" className="block text-sm font-medium mb-1 text-gray-600">Update Establishment</label>
                <input
                 className="w-full border border-gary-300 rounded-md p-2 w-full"
                    type="text"
                    value={newEstablishment}
                    id="est"
                    onChange={e => setNewEstablishment(e.target.value)}
                />
                </div>
                <div>

                <label htmlFor="em" className="block text-sm font-medium mb-1 text-gray-600">Update Email</label>
                <input
                 className="w-full border border-gary-300 rounded-md p-2 w-full" 
                    type="email"
                    value={newEmail}
                    id="em"
                    onChange={e => setNewEmail(e.target.value)}
                />
                </div>
                <div className="mt-4">
                    <button type="submit" className="w-full bg-blue-500 rounded-md text-white px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Submit</button>
                </div>  
            </div>
            
        </form>
    </div>
    );
}

export default UpdateProfile;
