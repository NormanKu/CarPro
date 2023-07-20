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
  // Use the useTranslation hook to get translation function `t` and instance `i18n`
  const { t, i18n } = useTranslation();

  // Maintain a state for selected language, defaulted to 'en'
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  // Maintain states for Navbar's display, defaulted to 'navbar'
  const [navbar, setNavbar] = useState("navbar");

  // Maintain states for Link's display, defaulted to false
  const [link, setLink] = useState(false);

  // Maintain states for language menu's display, defaulted to 'langMenu'
  const [langMenu, setLangMenu] = useState("langMenu");

  // Define menu items array
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
      name: "Teams",
      path: "/teams",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  // Define language options array
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

  // Function to change the language
  const changeLanguage = (lng) => {
    // Update selected language state
    setSelectedLanguage(lng);
    // Change the language in the i18n instance
    i18n.changeLanguage(lng);
  };

  // Function to toggle link state
  const linkPage = () => {
    setLink(!link);
  };

  // Function to show the navbar
  const showNavbar = () => {
    setNavbar("navbar showNavbar");
  };

  // Function to hide the navbar
  const removeNavbar = () => {
    setNavbar("navbar");
  };

  // Function to show the language menu
  const showLangMenu = () => {
    setLangMenu("langMenu showLangMenu");
  };

  // Function to hide the language menu
  const removeLangMenu = () => {
    setLangMenu("langMenu");
  };

  // Render the component
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
          <div className={langMenu}>
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
            <IoIosCloseCircle className="icon closeIcon" onClick={removeLangMenu} />
          </div>
          <a onClick={showLangMenu}><i className="fa-solid fa-globe fa-xl" ></i></a>
          <TbGridDots className="icon toggleNavbarIcon" onClick={showNavbar} />
        </div>
      </div>
    </>
  );
}

export default Navbar;
