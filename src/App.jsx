import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/SideBar';

import NotFound from './pages/NotFound';
import Login from './pages/Login';
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
import Tracability from './pages/Tracability';
import About from './pages/About';
import InsideLayout from './layouts/InsideLayout';
import NeutralLayout from './layouts/NeutralLayout';
import OutsideLayout from './layouts/OutSide';

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Navbar />
        <Sidebar />
        <div className="flex-1">
          <Routes>
            
            <Route element={<OutsideLayout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/registre" element={<Registre />} />
            </Route>

            <Route element={<InsideLayout />}>
              <Route path="/updpass" element={<UpdatePass />} />
              <Route path="/updprofil" element={<UpdateProfile />} />
              <Route path="/courrier" element={<Courriers key="courriers" />} />
              <Route path="/profil" element={<Profil />} />
              <Route path="/Namesearch" element={<CourrierSearchForm key="Namesearch" />} />
              <Route path="/Datesearch" element={<SearchByDate key="Datesearch" />} />
              <Route path="/treat" element={<TreatCourrier key="treat" />} />
              <Route path="/details/:id" element={<CourrierForm />} />
              <Route path="/allcourrier" element={<AllCourrier />} />
              <Route path="/trac" element={<Tracability />} />
            </Route>

            <Route element={<NeutralLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
