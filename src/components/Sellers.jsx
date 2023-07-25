import { useTranslation } from "react-i18next";
import Benz from "../assets/brand/Benz.png";
import Tesla from "../assets/brand/Tesla.png";
import Toyota from "../assets/brand/Toyota.png";
import Volvo from "../assets/brand/Volvo.png";

const Sellers = () => {
  const { t } = useTranslation();

  return (
    <div className="sellers section">
      <div className="secContainer container">
        <div className="secHeading grid">
          <h3 className="secTitle">{t("seller.title")}Explore top sellers in town</h3>

          <p>
            {t("seller.desc")}
          </p>
        </div>

        <div className="sellersContainer grid">
          {/* Single Seller */}
          <div className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={Volvo} alt="" className="img" />
            </div>
            <span className="info">
              <h4 className="name">Volvo</h4>
              <p>{t("seller.price1")}</p>
            </span>
          </div>
          {/* Single Seller */}
          <div className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={Benz} alt="" className="img" />
            </div>
            <span className="info">
              <h4 className="name">Mercedes-Benz</h4>
              <p>{t("seller.price2")}</p>
            </span>
          </div>
          {/* Single Seller */}
          <div className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={Tesla} alt="" className="img" />
            </div>
            <span className="info">
              <h4 className="name">Tesla</h4>
              <p>{t("seller.price3")}</p>
            </span>
          </div>
          {/* Single Seller */}
          <div className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={Toyota} alt="" className="img" />
            </div>
            <span className="info">
              <h4 className="name">Toyota</h4>
              <p>{t("seller.price4")}</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sellers;
