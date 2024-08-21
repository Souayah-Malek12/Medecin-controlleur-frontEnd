import { useState } from "react";
import { useDispatch } from "react-redux";
import { requestUpdatePass } from "../store/userSlice";

const UpdatePass = ()=> {

    const dispatch = useDispatch();

    const [oldPassword, setOldPass] = useState("");
    const [newPassword, setNewPass] = useState("");
    const [success, setSuccess] = useState(false)

    const handleSubmit = (e)=> {
        e.preventDefault();
        dispatch(requestUpdatePass({oldPassword, newPassword}));
    }

    return (
        <div className='flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-r from-blue-50 to-blue-100'>
      <form onSubmit={handleSubmit} className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
        <div className='text-center mb-6'>
          <h1 className='text-3xl font-bold text-gray-800  '>Change Password</h1>
        </div>
        <div className='space-y-4'>
          <div>
            <label htmlFor="oldp" className='block text-sm font-medium mb-1 text-gray-600'>Old Password</label>
            <input
              type="password"
              id="oldp"
              className='border border-gray-300 rounded-md p-2 w-full'
              value={oldPassword}
              onChange={e => setOldPass(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="newp" className='block text-sm font-medium mb-1 text-gray-600'>New Password</label>
            <input
              type="password"
              id="newp"
              className='border border-gray-300 rounded-md p-2 w-full'
              value={newPassword}
              onChange={e => setNewPass(e.target.value)}
              required
            />
          </div>
        </div>
        <div className='mt-6 flex  flex-col '>
          <button
            type="submit"
            className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
          >
            Change Password
          </button>
        </div>
      </form>
    </div>
        
    )
}

export default UpdatePass;