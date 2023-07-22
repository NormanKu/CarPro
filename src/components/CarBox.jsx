import { useState } from "react";

function CarBox({ data, carID }) {
  const [carLoad, setCarLoad] = useState(true);
  return (
    <>
      {data[carID].map((car, id) => (
        <div key={id} className="box-cars">
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
              <span>${car.price}</span>/ rent per day
            </div>
            <div className="pickDescription__table">
              <div className="pickDescription__table__col">
                <span>Model</span>
                <span>{car.model}</span>
              </div>

              <div className="pickDescription__table__col">
                <span>Mark</span>
                <span>{car.mark}</span>
              </div>

              <div className="pickDescription__table__col">
                <span>Year</span>
                <span>{car.year}</span>
              </div>

              <div className="pickDescription__table__col">
                <span>Doors</span>
                <span>{car.doors}</span>
              </div>

              <div className="pickDescription__table__col">
                <span>AC</span>
                <span>{car.air}</span>
              </div>

              <div className="pickDescription__table__col">
                <span>Transmission</span>
                <span>{car.transmission}</span>
              </div>

              <div className="pickDescription__table__col">
                <span>Fuel</span>
                <span>{car.fuel}</span>
              </div>
            </div>
            {/* btn cta */}
            <a className="cta-btn" href="#booking-section">
              Book Now
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default CarBox;
