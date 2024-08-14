
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
import HomePage from './pages/Home';
import CourrierForm from './pages/CourrierForm';
import AllCourrier from './pages/AllCourrier';


function App() {
      
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={ <HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path='/registre' element={ <Registre />} />
            <Route path='/updpass' element={ <UpdatePass />} />
            <Route path='/updprofil' element ={ <UpdateProfile />} />
            <Route path='/courrier' element ={ <Courriers />} />
            <Route   path='/profil' element={ <Profil /> } />
            <Route path='/Namesearch' element={  <CourrierSearchForm />} />
            <Route path='/Datesearch' element={ <SearchByDate />} />
            <Route path='/treat' element ={ <TreatCourrier />} />
            <Route path="/details/:id" element ={ <CourrierForm />} />
            <Route path="/allcourrier" element={ <AllCourrier />} />
          </Routes>
      </BrowserRouter>
        
    </>
  )
}

export default App
