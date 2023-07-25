import "../src/stylesheets/style.css";
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Vehicle from './Pages/Vehicle';
import Testimonials from './Pages/Testimonials';
import Teams from './Pages/Teams';
import Contact from './Pages/Contact';
import Signup from './Pages/Signup';
import Booking from './Pages/Booking';
import Login from './Pages/Login';
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Login as LoginIcon } from "@mui/icons-material";
import ProtectedRoutes from "./utils/ProtectedRoutes";


const App = () => {
  const user = { login: false}
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || "en");  // 使用 i18n.language 初始化語言狀態
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  return (
    <div className='title'>
      <Navbar changeLanguage={changeLanguage} currentLanguage={language}/>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/vehicle' element={<Vehicle />}/>
      <Route path='/testimonials' element={<Testimonials />} />
      <Route path='/teams' element={<Teams />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />

      {/* Need to login */}
      <Route element={<ProtectedRoutes user={user}/>}>
      <Route path='/booking' element={<Booking />} />
      </Route>


      </Routes>

    </div>
  )
}

export default App
