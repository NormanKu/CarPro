import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import aboutMain from "../assets/about/aboutMain.jpg";
import About1 from "../assets/about/about1.png";
import About2 from "../assets/about/about2.png";
import About3 from "../assets/about/about3.png";

function About() {
  // Invoke useTranslation and destructure `t` for translation
  const { t } = useTranslation();

  return (
    <>
      <section className="about">
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
                  <img src={About1} alt="car-icon" className="CarIcon" />
                  <span>
                    <h4>20</h4>
                    <p>{t("about.type")}</p>
                  </span>
                </div>
                <div className="aboutMainTextIconsBox">
                  <img src={About2} alt="car-icon" className="CarIcon"/>
                  <span>
                    <h4>85</h4>
                    <p>{t("about.spot")}</p>
                  </span>
                </div>
                <div className="aboutMainTextIconsBox">
                  <img src={About3} alt="car-icon" className="CarIcon" />
                  <span>
                    <h4>75</h4>
                    <p>{t("about.repair")}</p>
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
