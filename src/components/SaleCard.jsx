import PropTypes from "prop-types";


function SaleCard({ sales }) {
  return (
    <>
      <div className="teamContainerBox">
        <div className="teamContainerBoxImgDiv">
          <img src={sales.img} alt="teamImg" />
        </div>
        <div className="teamContainerBoxDescr">
          <div className="teamContainerBoxDescrTitle">
            <p>{sales.title}</p>
          </div>
          <div className="teamContainerBoxDescrName">
          <h3>{sales.name}</h3>

          </div>
          <div className="teamContainerBoxDescrJob">
          <p>{sales.job}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SaleCard;
