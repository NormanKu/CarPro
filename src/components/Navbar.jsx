import { useState } from "react";
import "../stylesheets/Navbar.css";
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "../stylesheets/App.css";
import { useTranslation } from "react-i18next";

function Navbar() {
  // Invoke useTranslation and destructure `t` and `i18n` for translation
  const { t, i18n } = useTranslation();

  // Initialize the selectedLanguage state with default value 'en'
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  // Statement to hold the state of the navbar
  const [navbar, setNavbar] = useState("navbar");
  const [link, setLink] = useState(false);

  // Array of menu items
  const menuItems = [
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Vehicle",
      path: "/vehicle",
    },
    {
      name: "Testimonials",
      path: "/testimonials",
    },
    {
      name: "Sales",
      path: "/sales",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  // Array of language options
  const lang = [
    {
      name: "繁中",
      lng: "zh",
    },
    {
      name: "日語",
      lng: "jp",
    },
    {
      name: "EN",
      lng: "en",
    },
  ];

  const changeLanguage = (lng) => {
    // Sets the selected language
    setSelectedLanguage(lng);
    // Changes the language translation
    i18n.changeLanguage(lng);
  };

  const linkPage = () => {
    setLink(!link);
  };

  const showNavbar = () => {
    setNavbar("navbar showNavbar");
  };

  const removeNavbar = () => {
    setNavbar("navbar");
  };

  // const [header, setHeader] = useState('header');
  // const addBackground = () => {
  //   if( window.scrollY >= 20){
  //     setHeader('header addBackground');
  // };

  return (
    <>
      <div className="header">
        <div className="logoDiv">
          <Link onClick={linkPage} to="/" className="link">
            <img src={logo} alt="logo" className="logo" />
          </Link>
        </div>

        <div className={navbar}>
          <ul className="menu">
            {menuItems.map((item) => (
              <li onClick={removeNavbar} key={item.name} className="listItem">
                <Link onClick={linkPage} to={item.path} className="link">
                  {t(item.name)}
                </Link>
              </li>
            ))}
          </ul>
          <IoIosCloseCircle className="icon closeIcon" onClick={removeNavbar} />
        </div>
        <div className="signUp flex">
          <Button variant="secondary" className="text">
            Sign Up
          </Button>
          <div id="langMenu">
            <ul className="lang">
              {lang.map((item) => (
                <li
                  key={item.name}
                  className={selectedLanguage === item.lng ? "active" : ""}
                >
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      changeLanguage(item.lng);
                    }}
                  >
                    {t(item.name)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <i className="fa-solid fa-globe fa-xl"></i>
          <TbGridDots className="icon toggleNavbarIcon" onClick={showNavbar} />
        </div>
      </div>
    </>
  );
}

export default Navbar;
