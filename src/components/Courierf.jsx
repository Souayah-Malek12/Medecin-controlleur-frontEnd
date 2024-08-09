import { InboxIcon } from '@heroicons/react/24/outline';

const Courrierf = ({ Response }) => {


  
  return (
    <div className="bg-gray-50 p-6 w-full flex flex-col items-center p-12">
      {Response && Response.length > 0 ? (
        Response.map((courrier) => (
          <div
            key={courrier._id} // Ensure `_id` is unique for each item
            className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6 mb-4 border border-gray-200 hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-start gap-x-4">
              <InboxIcon className="h-8 w-8 text-blue-500" />
              <div className="flex flex-col flex-grow space-y-2">
                <div className="flex justify-between items-center">
                  <h1 className="text-xl font-semibold text-gray-800">{courrier.sender}</h1>
                  <h2 className="text-lg font-medium text-blue-600">{courrier.status}</h2>
                </div>
                <h3 className="text-lg font-medium text-gray-700">{courrier.subject}</h3>
                <p className="text-sm text-gray-500">{courrier.receivedDate}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h1>No Courriers found</h1> // Message for when there are no courriers
      )}
    </div>
  );
};



export default Courrierf;
