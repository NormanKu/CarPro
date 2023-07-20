import "../stylesheets/Trending.css";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import car1 from "../assets/images/car1.jpg";
import car2 from "../assets/images/car2.jpg";
import car3 from "../assets/images/car3.jpg";

const Trending = () => {
      // Invoke useTranslation and destructure `t` for translation
      const { t } = useTranslation();

  return (
    <div className='trending section'>
      <div className="secContainer container">
       <div className="secHeading flex">
        <h3 className="secTitle">
          {t("trending.title")}
        </h3>

        <div className="navBtns flex">
          <BsArrowLeftShort className="icon leftIcon" />
          <BsArrowRightShort className="icon rightIcon" />
        </div>
       </div>

       <div className="carContainer grid">
          {/* Single Car Div */}
          <div className="singleCar grid">
            <div className="imgDiv">
              <img src={car1} alt="Car Image" />
            </div>
            <h5 className="carTitle">
              {t("trending.carTitle")} 2019 Audi S4 Premium Plus
            </h5>
            <span className="miles">
              11457 {t("trending.miles")}
            </span>
            <span className="AWD">
              AWD 4-Cylinder Turbo
            </span>

            <div className="price_seller flex">
              <span className="price">
                $41,200
              </span>
              <span className="seller">
                {t("trending.seller")}

              </span>
            </div>
          </div>

          {/* Single Car Div */}
          <div className="singleCar grid">
            <div className="imgDiv">
              <img src={car2} alt="Car Image" />
            </div>
            <h5 className="carTitle">
            {t("trending.carTitle")} 2019 Audi S4 Premium Plus
            </h5>
            <span className="miles">
              11457 {t("trending.miles")}
            </span>
            <span className="AWD">
              AWD 4-Cylinder Turbo
            </span>

            <div className="price_seller flex">
              <span className="price">
                $41,200
              </span>
              <span className="seller">
              {t("trending.seller")}
              </span>
            </div>
          </div>

          {/* Single Car Div */}
          <div className="singleCar grid">
            <div className="imgDiv">
              <img src={car3} alt="Car Image" />
            </div>
            <h5 className="carTitle">
              {t("trending.carTitle")} 2019 Audi S4 Premium Plus
            </h5>
            <span className="miles">
              11457 {t("trending.miles")}
            </span>
            <span className="AWD">
              AWD 4-Cylinder Turbo
            </span>

            <div className="price_seller flex">
              <span className="price">
                $41,200
              </span>
              <span className="seller">
              {t("trending.seller")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trending
