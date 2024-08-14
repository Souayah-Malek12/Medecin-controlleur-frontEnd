import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
 import { requestConsultCourrier } from "../store/courrierSlice";
 import { InboxIcon } from '@heroicons/react/24/outline';
import { NavLink } from "react-router-dom";


const Courriers = ()=> {

    const {ResCourriers, isLoading, error} = useSelector(state => state.courriers);

    const dispatch = useDispatch();


    useEffect(()=> {

        const fetchCourriers = async()=> {
            try{
                await dispatch(requestConsultCourrier())
            }catch(error){
                return console.log('Error in dispatch')
            }
        }

        fetchCourriers() 
    },[dispatch] )
       
    
        if(isLoading){
            return <h1>Loading ...</h1>
        }

        if(error){
            return (
                <div className='alert alert-danger'>
                    <h3>Error </h3>
                </div>
            )
        }
        if(!ResCourriers || ResCourriers.length === 0){
            return <h1>No courriers availables</h1>
        }


    
    return(
        <div className="bg-gray-50 p-6 w-full flex flex-col items-center p-12">
            
            {ResCourriers.map((courrier) => (
                <div
                    key={courrier.id}
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
                        <NavLink to={`/details/${courrier._id}`} className="text-gray-800 hover:underline">View Details </NavLink>
                    
                        
                    </div>
                </div>
            ))}
        </div>
    
    
    );
}



export default Courriers;