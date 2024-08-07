
import Login from './pages/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Registre from './pages/Registre';
import UpdatePass from './pages/updPassword';
import UpdateProfile from './pages/updProfil';
import Courriers from './pages/Courriers';
import Profil from './pages/ConsultProfil';


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
            <Routes path='/profil' element={ <Profil /> } />
          </Routes>
      </BrowserRouter>
        
    </>
  )
}

export default App
