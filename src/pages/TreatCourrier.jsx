import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestTreatCourrier } from "../store/courrierSlice";

const TreatCourrier = ()=> {
    
    const [courrierID, setCourrierID] = useState("");
    const [answer, setAnswer] = useState("")
    const dispatch = useDispatch();
    const {ResCourriers} = useSelector(state=> state.courriers)

    const handleSubmit = async(e)=> {
        e.preventDefault();
        try{
        await dispatch(requestTreatCourrier({courrierID, answer}));
        
        }catch(error) {
            console.error('Error during search:', error);
        }
    }

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" placeholder="Enter Patient Name" value={courrierID} onChange={e=> setCourrierID(e.target.value)} /> 
            </div>
            <div>
                <input type="text" placeholder="Enter answer" value={answer} onChange={e=>setAnswer(e.target.value)}/>
            </div>
            <button type="submit">Send </button>
        </form>
        <div>
  {ResCourriers && ResCourriers.traceability ? (
    ResCourriers.traceability.length > 0 ? (
      <div>
        <h1>{ResCourriers.traceability[ResCourriers.traceability.length - 1].action}</h1>
        <h1>{ResCourriers.traceability[ResCourriers.traceability.length - 1].date}</h1>
      </div>
    ) : (
      <h1>No traceability data available</h1>
    )
  ) : (
    <h1>No courrier</h1>
  )}
</div>

    </div>
    )

}


export default TreatCourrier ;


