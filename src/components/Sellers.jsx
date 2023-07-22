import sellerImage1 from "../assets/images/sellerImage1.jpg";

const Sellers = () => {
  return (
    <div className="sellers section">
      <div className="secContainer container">
        <div className="secHeading grid">
          <h3 className="secTitle">Explore top sellers in town</h3>

          <p>
            Joseph Samuel Girard holds the Guinness World Record for being the
            greatest salesman in the world
          </p>
        </div>

        <div className="sellersContainer grid">
          {/* Single Seller */}
          <div className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={sellerImage1} alt="" className="img" />
            </div>
            <span className="info">
              <h4 className="name">Toyota</h4>
              <p>from $40k</p>
            </span>
          </div>
          {/* Single Seller */}
          <div className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={sellerImage1} alt="" className="img" />
            </div>
            <span className="info">
              <h4 className="name">Toyota</h4>
              <p>from $40k</p>
            </span>
          </div>
          {/* Single Seller */}
          <div className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={sellerImage1} alt="" className="img" />
            </div>
            <span className="info">
              <h4 className="name">Toyota</h4>
              <p>from $40k</p>
            </span>
          </div>
          {/* Single Seller */}
          <div className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={sellerImage1} alt="" className="img" />
            </div>
            <span className="info">
              <h4 className="name">Toyota</h4>
              <p>from $40k</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sellers;
