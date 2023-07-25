import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";


const Footer = () => {

  const { t } = useTranslation();

  const [email, setEmail] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const templateParams = {
        to_name: email.split("@")[0], // Assuming the name is the part before @ in the email
        to_email: email,
        from_name: "CarPro",
        message: "Thank you for subscribing to our newsletter!",
      };

      const result = await emailjs.send(
        "service_50kqqok",
        "template_jjsxn4g",
        templateParams,
        "9ZzpsQIOuAuQ93RQe"
      );
      console.log("Email successfully sent!", result);
    } catch (error) {
      console.log("Failed to send email.", error);
    }
  };

  return (
    <div className="footer">
      <div className="footerContainer container">
        <div className="footerMenuDiv grid">
          {/* Single grid1 */}
          <div className="singleGrid">
            <span className="footerTitle">Car Pro</span>
            <ul className="footerUl grid">
              <li className="footerLi">
                {" "}
                <a href="tel:123456789">
                  <i className="fa-solid fa-phone"></i> &nbsp; (123) -456-789
                </a>
              </li>
              <li className="footerLi">
                <a
                  href="mailto:
                carrental@gmail.com"
                >
                  <i className="fa-solid fa-envelope"></i>
                  &nbsp; carrental@gmail.com
                </a>
              </li>
              <li className="footerLi">
                <a
                  style={{ fontSize: "14px" }}
                  target="_blank"
                  rel="noreferrer"
                  href="#"
                >
                  Design by NormanKu
                </a>
              </li>
            </ul>
          </div>
          {/* Single grid2 */}
          <div className="singleGrid">
            <span className="footerTitle">{t("footer.company")}</span>
            <ul className="footerUl grid">
              <li className="footerLi">{t("footer.newyork")}</li>
              <li className="footerLi">{t("footer.taipei")}</li>
              <li className="footerLi">{t("footer.tokyo")}</li>
            </ul>
          </div>
          {/* Single grid3 */}
          <div className="singleGrid">
            <span className="footerTitle">{t("footer.working")}</span>
            <ul className="footerUl grid">
              <li className="footerLi">{t("footer.duration")}: 9:00AM - 9:00PM</li>
              <li className="footerLi">{t("footer.duration2")}: 9:00AM - 19:00PM </li>
              <li className="footerLi">{t("footer.duration3")}: Closed</li>
            </ul>
          </div>
          {/* Single grid4 */}
          <div className="singleGrid">
            <span className="footerTitle">{t("footer.sub")}</span>
            <ul className="footerUl grid">
              <li className="footerLi">
                {t("footer.subcribe")}
              </li>
              <li className="footerLi">
                <input
                  type="email"
                  name="email"
                  className="email"
                  placeholder="Enter Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </li>
              <li className="footerLi">
                <button className="submitEmail" onClick={sendEmail}>
                  {t("footer.submit")}
                </button>
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
