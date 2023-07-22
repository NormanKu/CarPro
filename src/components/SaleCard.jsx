import PropTypes from "prop-types";

function SaleCard({ sales }) {
  return (
    <>
      <div className="teamContainerBox">
        <div className="teamContainerBoxImgDiv">
          <img src={sales.img} alt="teamImg" />
        </div>
        <div className="teamContainerBoxDescr">
          <h3>{sales.name}</h3>
          <p>{sales.job}</p>
        </div>
      </div>
    </>
  );
}

export default SaleCard;
