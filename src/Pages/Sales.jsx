import Footer from "../components/Footer";

function Sales() {
  return (
    <>
      <section className="Sales-page">
        {/* <HeroPages name="Sales" /> */}
        <div className="container">
          <div className="Sales-main">
            {/* <img
              className="Sales-main__img"
              src={SalesMain}
              alt="car-renting"
            /> */}
            <div className="Sales-main__text">
              <h3>Sales Company</h3>
              <h2>You start the engine and your adventure begins</h2>
              <p>
                Certain but she but shyness why cottage. Guy the put instrument
                sir entreaties affronting. Pretended exquisite see cordially the
                you. Weeks quiet do vexed or whose. Motionless if no to
                affronting imprudence no precaution. My indulged as disposal
                strongly attended.
              </p>
              <div className="Sales-main__text__icons">
                <div className="Sales-main__text__icons__box">
                  {/* <img src={Box1} alt="car-icon" /> */}
                  <span>
                    <h4>20</h4>
                    <p>Car Types</p>
                  </span>
                </div>
                <div className="Sales-main__text__icons__box">
                  {/* <img src={Box2} alt="car-icon" /> */}
                  <span>
                    <h4>85</h4>
                    <p>Rental Outlets</p>
                  </span>
                </div>
                <div className="Sales-main__text__icons__box">
                  {/* <img src={Box3} alt="car-icon" className="last-fk" /> */}
                  <span>
                    <h4>75</h4>
                    <p>Repair Shop</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* <PlanTrip /> */}
        </div>
      </section>
      <div className="book-banner">
        <div className="book-banner__overlay"></div>
        <div className="container">
          <div className="text-content">
            <h2>Book a car by getting in touch with us</h2>
            <span>
              <i className="fa-solid fa-phone"></i>
              <h3>(123) 456-7869</h3>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Sales;
