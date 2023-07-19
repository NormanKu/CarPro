import "./stylesheets/App.css";
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Vehicle from './Pages/Vehicle';
import Testimonials from './Pages/Testimonials';
import Sales from './Pages/Sales';
import Contact from './Pages/Contact';
import { useTranslation } from "react-i18next";
import { useState } from "react";

const App = () => {
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
      <Route path='/sales' element={<Sales />} />
      <Route path='/contact' element={<Contact />} />
      </Routes>

    </div>
  )
}

export default App
