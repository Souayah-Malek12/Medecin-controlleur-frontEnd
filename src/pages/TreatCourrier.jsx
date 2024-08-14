  import { useState } from "react";
  import { useSelector, useDispatch } from "react-redux";
  import { requestTreatCourrier } from "../store/courrierSlice";

  const TreatCourrier = ({courrier})=> {
      
      
      const [answer, setAnswer] = useState("")
      const dispatch = useDispatch();
      const {ResCourriers} = useSelector(state=> state.courriers)
      const courrierID = courrier._id;
      const handleSubmit = async(e)=> {
          e.preventDefault();
          try{
          await dispatch(requestTreatCourrier({courrierID, answer}));
          
          }catch(error) {
              console.error('Error during search:', error);
          }
      }

      return (
        <div className="p-6 bg-gray-50 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <input
                    type="text"
                    placeholder="Enter answer"
                    value={answer}
                    onChange={e => setAnswer(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Send
            </button>
        </form>
        <div className="mt-6">
            {ResCourriers && ResCourriers.traceability ? (
                ResCourriers.traceability.length > 0 ? (
                    <div className="space-y-4">
                        <h2 className="text-lg font-semibold text-gray-800">Latest Traceability:</h2>
                        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                            <p className="text-gray-700">
                                <strong className="font-medium text-red-400">Action:</strong> {ResCourriers.traceability[ResCourriers.traceability.length - 1].action}
                            </p>
                            <p className="text-gray-700">
                                <strong className="font-medium text-green-400">Date:</strong> {ResCourriers.traceability[ResCourriers.traceability.length - 1].date}
                            </p>
                            <p className="text-gray-700">
                                <strong className="font-medium text-purple-500 ">User:</strong> {ResCourriers.traceability[ResCourriers.traceability.length - 1].user}
                            </p>
                        </div>
                    </div>
                ) : (
                    <h1 className="text-gray-700">No traceability data available</h1>
                )
            ) :  <h1>No Trace</h1>}
        </div>
    </div>
    
      )

  }


  export default TreatCourrier ;


