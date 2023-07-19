import "../stylesheets/Review.css";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import car1 from "../assets/images/car1.jpg";
import user1 from "../assets/images/user1.png";

const Review = () => {
  return (
    <div className="review section">
      <div className="secContainer container">

        <div className="secHeading flex">
          <h3 className="secTitle">
            Recent Reviews
          </h3>

          <div className="navBtns flex">
          <BsArrowLeftShort className="icon leftIcon" />
          <BsArrowRightShort className="icon rightIcon" />
          </div>
        </div>

        {/* review container */}
        <div className="reviewContainer grid">
          {/* single review */}
          <div className="singleReview grid">
            <div className="imgDiv">
              <img src={car1} alt="" />
            </div>
            <h5 className="reviewTitle">
              2023 Cadiallac
            </h5>
            <span className="className">
              Good cars are safe, fast, affordable to purchase, economical to
              purchase, economical to operate, reliable, comfortable, and attractive.
            </span>

            <div className="reviewerDiv flex">
              <div className="leftDiv flex">
                <div className="reviewerImage">
                  <img src={user1} alt="Reviewer Image" />
                </div>
                  <div className="aboutReviewer">
                    <span className="name">
                      Jakline Nelson
                    </span>
                    <p>Chief Editor</p>
                  </div>
              </div>
              <div className="rightDiv">
                <AiFillStar className="icon" />
                <blockquote>4.84</blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review
