import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import aboutMain from "../assets/about/aboutMain.jpg";
import "../stylesheets/Pages/About/About.css";

function About() {
  // Invoke useTranslation and destructure `t` for translation
  const { t } = useTranslation();

  return (
    <>
      <section className="about">
        {/* <HeroPages name="About" /> */}
        <div className="container">
          <div className="aboutMain">
            <img
              className="aboutMainImg"
              src={aboutMain}
              alt="carRenting"
            />
            <div className="aboutContainer">
              <h3>{t("about.title")}</h3>
              <h2>{t("about.slogan")}</h2>
              <p>  {t("about.passage")}
              </p>
              <div className="aboutMainTextIcons">
                <div className="aboutMainTextIconsBox">
                  {/* <img src={Box1} alt="car-icon" /> */}
                  <span>
                    <h4>20</h4>
                    <p>{t("about.type")}</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  {/* <img src={Box2} alt="car-icon" /> */}
                  <span>
                    <h4>85</h4>
                    <p>{t("about.spot")}</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  {/* <img src={Box3} alt="car-icon" className="last-fk" /> */}
                  <span>
                    <h4>75</h4>
                    <p>{t("repair")}</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* <PlanTrip /> */}
        </div>
      </section>
      {/* <Banner /> */}
      <Footer />
    </>
  );
}

export default About;
