import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../stylesheets/components/carcard.css"

function CarCard({ car }) {
  return (
    <>
      <div className="modelsDivBox">
        <div className="modelsDivBoxImg">
          <img src={car.img} alt="" />
          <div className="modelsDivBoxDescr">
            <div className="modelsDivBoxDescrNamePrice">
              <div className="modelsDivBoxDescrNamePriceName">
                <p>{car.name}</p>
                <span>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </span>
              </div>
              <div className="modelsDivBoxDescrNamePricePrice">
                <h4>{car.price}</h4>
                <p>per day</p>
              </div>
            </div>
            <div className="modelsDivBoxDescrNamePriceDetails">
              <span>
                <i className="fa-solid fa-car-side"></i> &nbsp; VW
              </span>
              <span style={{ textAlign: "right" }}>
                4/5 &nbsp; <i className="fa-solid fa-car-side"></i>
              </span>
              <span>
                <i className="fa-solid fa-car-side"></i> &nbsp; Manual
              </span>
              <span style={{ textAlign: "right" }}>
                Diesel &nbsp; <i className="fa-solid fa-car-side"></i>
              </span>
            </div>
            <div className="modelsDivBoxDescrNamePriceBtn">
              <Link onClick={() => window.scrollTo(0, 0)} to="/">
                Book Ride
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

CarCard.propTypes = {
  car: PropTypes.shape({
    name: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.string,
    details: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default CarCard;
