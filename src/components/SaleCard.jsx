import PropTypes from "prop-types";


function SaleCard({ teamItem }) {
  return (
    <>
      <div className="teamContainerBox">
        <div className="teamContainerBoxImgDiv">
          <img src={teamItem.img} alt="teamImg" />
        </div>
        <div className="teamContainerBoxDescr">
          <div className="teamContainerBoxDescrTitle">
            <p>{teamItem.title}</p>
          </div>
          <div className="teamContainerBoxDescrName">
          <h3>{teamItem.name}</h3>

          </div>
          <div className="teamContainerBoxDescrJob">
          <p>{teamItem.job}</p>
          </div>
        </div>
      </div>
    </>
  );
}
SaleCard.propTypes = {
  teamItem: PropTypes.shape({
    img: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
    job: PropTypes.string,
  }).isRequired,
};

export default SaleCard;
