import "../stylesheets/Home.css";
import { Button } from 'react-bootstrap';
import homeImage from '../assets/images/homeImage.png'
import { useEffect, useState } from 'react';

const Intro = () => {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
            Meet your new car
          </span>
          <h1 className="homeTitle">
            Honda Civic Type R
          </h1>
          <div className="btns flex">
            <button className="btn">More Details</button>
            <Button variant="secondary" className="btn primaryBtn">Test Drive</Button>
          </div>
        </div>

        <div className="homeImage">
          <img src={homeImage} alt="Home Image" />
        </div>
      </div>
    </div>

  {/* page up */}
  <div onClick={scrollToTop} className={`scroll-up ${goUp ? "show-scroll" : ""}`}>
  <i className="fa-solid fa-angle-up">Up</i>
  </div>
  </>
  );
}

export default Intro;
