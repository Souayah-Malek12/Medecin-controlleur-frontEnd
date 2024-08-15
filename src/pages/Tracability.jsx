import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestConsultCourrier } from "../store/courrierSlice";

const Tracability = () => {
    const { ResCourriers, isLoading, error } = useSelector((state) => state.courriers);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchTrace = () => {
            try {
                dispatch(requestConsultCourrier());
            } catch (error) {
                console.log('Error in dispatch:', error);
            }
        };

        fetchTrace();
    }, [dispatch]);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <h1 className="text-2xl font-semibold text-gray-700">Loading...</h1>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <h1 className="text-2xl font-semibold text-red-500">Error fetching data.</h1>
            </div>
        );
    }
    
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Couriers Traceability</h1>
            {ResCourriers && ResCourriers.length > 0 ? (
                ResCourriers.map((courrier, index) => (
                    <div key={index} className="mb-8 p-6 bg-white rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">Sender: {courrier.sender}</h2>
                        {courrier.traceability && courrier.traceability.length > 0 ? (
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-gray-700">Traceability Records:</h3>
                                {courrier.traceability.map((trace, tIndex) => (
                                    <div
                                        key={tIndex}
                                        className="p-4 bg-gray-50 border border-gray-200 rounded-md shadow-sm"
                                    >
                                        <p className="text-gray-800">
                                            <span className="font-medium text-red-500">Action:</span> {trace.action}
                                        </p>
                                        <p className="text-gray-800">
                                            <span className="font-medium text-green-500">Date:</span> {new Date(trace.date).toLocaleDateString()}
                                        </p>
                                        <p className="text-gray-800">
                                            <span className="font-medium text-purple-500">User:</span> {trace.user}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-600">No traceability records available.</p>
                        )}
                    </div>
                ))
            ) : (
                <p className="text-center text-gray-700">No couriers available.</p>
            )}
        </div>
    );
};

export default Tracability;
