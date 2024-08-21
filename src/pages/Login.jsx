import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { requestLogin } from '../store/userSlice';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(requestLogin({ email, password }));
    setSuccess(true);
    console.log(`Email: ${email}`);
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-r from-blue-50 to-blue-100'>
      <form onSubmit={handleSubmit} className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-300'>
        <div className='text-center mb-6'>
          <h1 className='text-4xl font-bold text-blue-800'>Login</h1>
        </div>
        <div className='space-y-5'>
          <div>
            <label htmlFor="email" className='block text-sm font-medium mb-2 text-gray-700'>Email</label>
            <input
              type="email"
              id="email"
              className='border border-blue-300 rounded-lg p-3 w-full text-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className='block text-sm font-medium mb-2 text-gray-700'>Password</label>
            <input
              type="password"
              id="password"
              className='border border-blue-300 rounded-lg p-3 w-full text-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div className='mt-6 flex flex-col'>
          <button
            type="submit"
            className='bg-blue-600 text-white px-5 py-3 rounded-md shadow-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-lg'
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
