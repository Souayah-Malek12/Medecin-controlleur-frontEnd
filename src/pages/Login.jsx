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
    <div className='flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100'>
      <form onSubmit={handleSubmit} className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
        <div className='text-center mb-6'>
          <h1 className='text-3xl font-bold text-gray-800'>Login</h1>
        </div>
        <div className='space-y-4'>
          <div>
            <label htmlFor="email" className='block text-sm font-medium mb-1 text-gray-600'>Email</label>
            <input
              type="email"
              id="email"
              className='border border-gray-300 rounded-md p-2 w-full'
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className='block text-sm font-medium mb-1 text-gray-600'>Password</label>
            <input
              type="password"
              id="password"
              className='border border-gray-300 rounded-md p-2 w-full'
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div className='mt-6 flex flex-col'>
          <button
            type="submit"
            className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
