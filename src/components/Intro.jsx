import { Button } from 'react-bootstrap';
import homeImage from '../assets/images/homeImage.png'
import { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";


const Intro = () => {
  const { t } = useTranslation();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleMoreDetailsClick = () => {
    window.location = '#detail';
  }

  useEffect(() => {
    const onPageScroll = () => {
      if (window.pageYOffset > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);
  return (
    <>
    <div className="home">
      <div className="secContainer">

        <div className="homeText">
          <span className="homeSpan">
           {t("intro.homeSpan")}
          </span>
          <h1 className="homeTitle">
            {t("intro.model")}
          </h1>
          <div className="btns flex">
            <button className="btn" onClick={handleMoreDetailsClick}>{t("intro.detail")}</button>
            <Button variant="secondary" className="btn primaryBtn">{t("intro.book")}</Button>
          </div>
        </div>
        <div className="homeImage">
          <img src={homeImage} alt="Home Image" />
        </div>
      </div>
    </div>

  {/* page up */}
  <div onClick={scrollToTop} className={`scroll-up ${goUp ? "show-scroll" : ""}`}>
  <i className="fa-solid fa-up-long"></i>
  </div>
  </>
  );
}

export default Intro;
