import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestNameSearch } from '../store/courrierSlice';
import Courrierf from '../components/Courierf'; // Import Courrierf component

const CourrierSearchForm = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch(); 

  const { ResCourriers, isLoading, error } = useSelector(state => state.courriers); // Adjust based on your state

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(requestNameSearch({ name }));
    } catch (error) {
      console.error('Error in dispatch:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Search by name"
        />
        <button type="submit">Search</button>
      </form>

      {isLoading && <h1>Loading...</h1>}

      {error && <h1>{`Error: ${error}`}</h1>}

      {/* Pass courriers as 'props' */}
      <Courrierf props={ResCourriers} />
    </div>
  );
};

export default CourrierSearchForm;
