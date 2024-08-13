import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestNameSearch } from '../store/courrierSlice';
import { InboxIcon } from '@heroicons/react/24/outline';
import { NavLink } from "react-router-dom";


const CourrierSearchForm = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const { ResCourriers, isLoading, error } = useSelector(state => state.courriers);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(requestNameSearch(name));
    } catch (err) {
      console.error('Error during search:', err);
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen p-6">
      <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 mb-8">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Search Courriers</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name to search"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition"
          >
            Search
          </button>
        </form>
      </div>

      {isLoading && <h1 className="text-center text-xl font-semibold text-gray-700">Loading ...</h1>}
      {error && (
        <div className="alert alert-danger text-center text-red-600 mt-4">
          <h3 className="text-lg font-semibold">Error: {error}</h3>
        </div>
      )}
      {ResCourriers && ResCourriers.length > 0 && (
        <div className="bg-white p-6 max-w-4xl mx-auto rounded-lg shadow-md mt-8">
          {ResCourriers.map((courrier) => (
            <div
              key={courrier._id}
              className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm mb-4 p-4 hover:bg-gray-100 transition"
            >
              <div className="flex items-start gap-x-4">
                <InboxIcon className="h-8 w-8 text-blue-500" />
                <div className="flex flex-col flex-grow space-y-2">
                  <div className="flex justify-between items-center">
                    <h1 className="text-xl font-semibold text-gray-800">{courrier.sender}</h1>
                    <h2 className="text-lg font-medium text-blue-600">{courrier.status}</h2>
                  </div>
                  <h3 className="text-lg font-medium text-gray-700">{courrier.subject}</h3>
                  <p className="text-sm text-gray-500">{new Date(courrier.receivedDate).toLocaleDateString()}</p>
                  <NavLink to={`/details/${courrier._id}`} className="text-blue-800 hover:underline">View Details </NavLink>

                </div>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default CourrierSearchForm;
