
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer container">
        <div className="footerMenuDiv grid">
          {/* Single grid1 */}
          <div className="singleGrid">
            <span className="footerTitle">
              Car Pro
            </span>
            <ul className="footerUl grid">
              <li className="footerLi"> <a href="tel:123456789">
                  <i className="fa-solid fa-phone"></i> &nbsp; (123) -456-789
                </a></li>
              <li className="footerLi"><a
                  href="mailto:
                carrental@gmail.com"
                >
                  <i className="fa-solid fa-envelope"></i>
                  &nbsp; carrental@gmail.com
                </a></li>
              <li className="footerLi"><a
                  style={{ fontSize: "14px" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://xpeedstudio.com/"
                >
                  Design by XpeedStudio
                </a></li>
            </ul>
          </div>
          {/* Single grid2 */}
          <div className="singleGrid">
            <span className="footerTitle">Company</span>
            <ul className="footerUl grid">
              <li className="footerLi">New York</li>
              <li className="footerLi">Taipei</li>
              <li className="footerLi">Tokyo</li>
            </ul>
          </div>
          {/* Single grid3 */}
          <div className="singleGrid">
            <span className="footerTitle">WORKING HOURS</span>
            <ul className="footerUl grid">
              <li className="footerLi">Mon - Fri: 9:00AM - 9:00PM</li>
              <li className="footerLi">Sat: 9:00AM - 19:00PM </li>
              <li className="footerLi">Sun: Closed</li>
            </ul>
          </div>
          {/* Single grid4 */}
          <div className="singleGrid">
            <span className="footerTitle">Subscription</span>
            <ul className="footerUl grid">
              <li className="footerLi">
                Subscribe your Email address for latest news & updates.
              </li>
              <li className="footerLi"></li>
              <li className="footerLi">
                {" "}
                <input type="email" placeholder="Enter Email Address" />
              </li>
              <li className="footerLi">
                <button className="submit-email">Submit</button>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Lower section */}
        <div className="lowerSection grid">
          copyright {new Date().getFullYear()}. allRightsReserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
