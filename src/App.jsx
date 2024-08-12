
import Login from './pages/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Registre from './pages/Registre';
import UpdatePass from './pages/updPassword';
import UpdateProfile from './pages/updProfil';
import Courriers from './pages/Courriers';
import Profil from './pages/ConsultProfil';
import CourrierSearchForm from './pages/CourrierSearchName';
import SearchByDate from './pages/CourrierSearchDate';
import TreatCourrier from './pages/TreatCourrier';


function App() {
      
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path='/registre' element={ <Registre />} />
            <Route path='/updpass' element={ <UpdatePass />} />
            <Route path='/updprofil' element ={ <UpdateProfile />} />
            <Route path='/courrier' element ={ <Courriers />} />
            <Route   path='/profil' element={ <Profil /> } />
            <Route path='/Namesearch' element={  <CourrierSearchForm />} />
            <Route path='/Datesearch' element={ <SearchByDate />} />
            <Route path='/treat' element ={ <TreatCourrier />} />
          </Routes>
      </BrowserRouter>
        
    </>
  )
}

export default App
