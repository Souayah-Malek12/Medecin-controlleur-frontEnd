import axios from "axios";
import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import TreatCourrier from "./TreatCourrier";

const CourrierForm = () => {

    const {id} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [courrier, setCourrier] = useState('');
    const [error, setError] = useState('');

    useEffect(()=> {

        const fetchCourrier = async() =>{
       try{
        
        const token = localStorage.getItem('token');

        const res = await axios.get(`http://localhost:1111/user/details/${id}`, 
            {
                headers : {
                    Authorization : `Bearer ${token}`
                }
            }
        );
        console.log("id", id);
        console.log(res.data)
        setCourrier(res.data.courrier);
        setIsLoading(false);
       
       }catch(error){
        setError("error occured  fetching Courrier details ")
        setIsLoading(false)
       }
       
    }
    fetchCourrier();

    },[id])

    if(error) <h1>{error}</h1>
    if(isLoading) <h1>Loading ...</h1>

    return (
        <div className="p-6 bg-white shadow-lg rounded-lg max-w-lg mx-auto mt-8">
    <h1 className="text-2xl font-bold mb-6 text-gray-800">Courrier Details</h1>
    <div className="space-y-4">
        <p><strong className="text-gray-700">Sender:</strong> <span className="text-blue-600 text-2xl p-2">{courrier.sender}</span></p>
        <p><strong className="text-gray-700">Receiver:</strong> <span className="text-gray-900 text-2xl p-2">{courrier.receiver}</span></p>
        <p><strong className="text-gray-700">Status:</strong> <span className={`text-white px-2 py-1 rounded ${courrier.status === 'traité' ? 'bg-green-500' : 'bg-yellow-500'}`}>{courrier.status}</span></p>
        <p><strong className="text-gray-700">Subject:</strong> <span className="text-red-500 text-2xl p-2">{courrier.subject}</span></p>
        <p><strong className="text-gray-700">Content:</strong> <span className="text-gray-900 text-2xl p-2">{courrier.content}</span></p>
        <p><strong className="text-gray-700">Received Date:</strong> <span className="text-gray-900 text-2xl p-2">{courrier.receivedDate}</span></p>
    </div>
    <div className="mt-6">
        <h4 className=" font-semibold text-purple-800 text-2xl p-3 bg-gray-100 m-3">Traceability:</h4>
        {courrier && courrier.traceability ? (
            courrier.traceability.map((trac1, index) => (
                <div key={index} className="mb-2 p-4 bg-gray-100 rounded-lg shadow-sm">
                    <p className="text-gray-700"><div ><strong className="text-blue-500">Action:</strong><span>{trac1.action}</span></div> <div><strong className="text-blue-500"> On :</strong> <span >{trac1.date}</span> </div>  <div><strong className="text-blue-500">By :</strong><span>{trac1.user}</span></div></p>
                </div>
            ))
        ) : (
            <h1 className="text-gray-700">No Action on this courrier</h1>
        )}
    </div>
    
        <div className="mt-6">
                <TreatCourrier courrier={courrier} />
        </div>
    
</div>

    );
};

export default CourrierForm;
