import { useState } from "react";
import { useTranslation } from "react-i18next";


function CarBox({ data, carID }) {
  const { t } = useTranslation();

  const [carLoad, setCarLoad] = useState(true);
  return (
    <>
      {data[carID].map((car, id) => (
        <div key={id} className="boxCars">
          {/* car */}
          <div className="pickCar">
            {carLoad && <span className="loader"></span>}
            <img
              style={{ display: carLoad ? "none" : "block" }}
              src={car.img}
              alt="car_img"
              onLoad={() => setCarLoad(false)}
            />
          </div>
          {/* description */}
          <div className="pickDescription">
            <div className="pickDescription__price">
              <span>${car.price}</span>/ {t("carbox.price")}
            </div>
            <div className="pickDescriptionTable">
              <div className="pickDescriptionTableCol">
                <span>{t("carbox.model")}</span>
                <span>{car.model}</span>
              </div>

              <div className="pickDescriptionTableCol">
                <span>{t("carbox.mark")}</span>
                <span>{car.mark}</span>
              </div>

              <div className="pickDescriptionTableCol">
                <span>{t("carbox.year")}</span>
                <span>{car.year}</span>
              </div>

              <div className="pickDescriptionTableCol">
                <span>{t("carbox.doors")}</span>
                <span>{car.doors}</span>
              </div>

              <div className="pickDescriptionTableCol">
                <span>{t("carbox.ac")}</span>
                <span>{car.air}</span>
              </div>

              <div className="pickDescriptionTableCol">
                <span>{t("carbox.transmission")}</span>
                <span>{car.transmission}</span>
              </div>

              <div className="pickDescriptionTableCol">
                <span>{t("carbox.fuel")}</span>
                <span>{car.fuel}</span>
              </div>
            </div>
            {/* btn cta */}
            <a className="cta-btn" href="#booking-section">
              {t("carbox.book")}
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default CarBox;
