
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer container">
        <div className="footerMenuDiv grid">
          {/* Single grid1 */}
          <div className="singleGrid">
            <span className="footerTitle">
              Car <p>Pro</p>
            </span>
            <ul className="footerUl grid">
              <li className="footerLi">How it works</li>
              <li className="footerLi">Careers</li>
              <li className="footerLi">Affliates</li>
              <li className="footerLi">Media</li>
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
