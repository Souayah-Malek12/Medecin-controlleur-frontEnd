import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TreatCourrier from "./TreatCourrier";

const CourrierForm = () => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [courrier, setCourrier] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchCourrier = async () => {
            try {
                const token = localStorage.getItem('token');
                const res = await axios.get(`http://localhost:1111/user/details/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setCourrier(res.data.courrier);
                setIsLoading(false);
            } catch (error) {
                setError("Error occurred fetching Courrier details");
                setIsLoading(false);
            }
        };

        fetchCourrier();
    }, [id]);

    if (error) return <div className="text-red-600 text-center mt-10 text-xl font-semibold">{error}</div>;
    if (isLoading) return <div className="text-blue-600 text-center mt-10 text-xl font-semibold">Loading ...</div>;

    return (
        <div className="p-8 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 shadow-lg rounded-lg max-w-4xl mx-auto mt-8">
            <h1 className="text-4xl font-extrabold mb-6 text-indigo-900">Courrier Details</h1>
            <div className="space-y-6">
                <div className="p-6 bg-white shadow-lg rounded-lg border border-gray-300">
                    <p className="text-lg text-gray-700"><strong className="text-gray-900">Sender:</strong> <span className="text-indigo-600 text-xl">{courrier.sender}</span></p>
                    <p className="text-lg text-gray-700"><strong className="text-gray-900">Receiver:</strong> <span className="text-gray-900 text-xl">{courrier.receiver}</span></p>
                    <p className="text-lg text-gray-700"><strong className="text-gray-900">Status:</strong> 
                        <span className={`text-white px-4 py-2 rounded-md ${courrier.status === 'traité' ? 'bg-green-600' : 'bg-yellow-600'}`}>{courrier.status}</span>
                    </p>
                    <p className="text-lg text-gray-700"><strong className="text-gray-900">Subject:</strong> <span className="text-red-600 text-xl">{courrier.subject}</span></p>
                    <p className="text-lg text-gray-700"><strong className="text-gray-900">Content:</strong> <span className="text-gray-800 text-xl">{courrier.content}</span></p>
                    <p className="text-lg text-gray-700"><strong className="text-gray-900">Received Date:</strong> <span className="text-gray-800 text-xl">{courrier.receivedDate}</span></p>
                </div>
                <div className="mt-6 bg-white shadow-lg rounded-lg border border-gray-300">
                    <h4 className="text-2xl font-semibold text-purple-800 p-4 bg-purple-50 rounded-t-lg">Traceability:</h4>
                    {courrier && courrier.traceability && courrier.traceability.length > 0 ? (
                        courrier.traceability.map((trac1, index) => (
                            <div key={index} className="mb-3 p-4 bg-gray-50 rounded-lg shadow-md border border-gray-300">
                                <p className="text-gray-700 text-lg">
                                    <div><strong className="text-blue-600">Action:</strong> <span>{trac1.action}</span></div>
                                    <div><strong className="text-blue-600">On:</strong> <span>{trac1.date}</span></div>
                                    <div><strong className="text-blue-600">By:</strong> <span>{trac1.user}</span></div>
                                </p>
                            </div>
                        ))
                    ) : (
                        <h1 className="text-gray-700 text-center text-lg">No Actions on this courrier</h1>
                    )}
                </div>
                <div className="mt-6">
                    <TreatCourrier courrier={courrier} />
                </div>
            </div>
        </div>
    );
};

export default CourrierForm;
