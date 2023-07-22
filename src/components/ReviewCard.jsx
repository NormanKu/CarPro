import PropTypes from "prop-types";
import { AiFillStar } from "react-icons/ai";

function ReviewCard({ reviews }) {
  return (
    <>
          {/* single review */}
          <div className="singleReview grid">
            <div className="imgDiv">
              <img src={reviews.car} alt="" />
            </div>
            <h5 className="reviewTitle">
              {reviews.name}
            </h5>
            <span className="className">
              {reviews.details}
            </span>

            <div className="reviewerDiv flex">
              <div className="leftDiv flex">
                <div className="reviewerImage">
                  <img src={reviews.userImg} alt="Reviewer Image" />
                </div>
                  <div className="aboutReviewer">
                    <span className="name">
                      {reviews.user}
                    </span>
                    <p>{reviews.title}</p>
                  </div>
              </div>
              <div className="rightDiv">
                <AiFillStar className="icon" />
                <blockquote>{reviews.rating}</blockquote>
              </div>
            </div>
          </div>

    </>
  );
}

ReviewCard.propTypes = {
  reviews: PropTypes.shape({
    car: PropTypes.string,
    name: PropTypes.string,
    details: PropTypes.string,
    userImg: PropTypes.string,
    user: PropTypes.string,
    title: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};


export default ReviewCard;
