import { useState } from "react";
import { useTranslation } from "react-i18next";


function Faq() {
  const { t } = useTranslation();

  const [activeQ, setActiveQ] = useState("q1");

  const openQ = (id) => {
    setActiveQ(activeQ === id ? "" : id);
  };

  const getClassAnswer = (id) => {
    return activeQ === id ? "active-answer" : "";
  };

  const getClassQuestion = (id) => {
    return activeQ === id ? "active-question" : "";
  };

  return (
    <>
      <section className="faqSection">
        <div className="container">
          <div className="faqContent">
            <div className="faqContentTitle">
              <h5>{t("faq.title")}</h5>
              <h2>{t("faq.subtitle")}</h2>
              <p>
                {t("faq.description")}
              </p>
            </div>

            {/* alltheQuestions */}
            <div className="allQuestions">
              {/* faqBox */}
              <div className="faqBox">
                {/* faqQuestion */}
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faqBoxQuestion  ${getClassQuestion("q1")}`}
                >
                  <p>{t("faq.question1")}</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                {/* faqAnswer */}
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faqBoxAnswer ${getClassAnswer("q1")}`}
                >
                  {t("faq.answer1")}
                </div>
              </div>
              {/* faqBox */}
              <div className="faqBox">
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faqBoxQuestion ${getClassQuestion("q2")}`}
                >
                  <p>{t("faq.question2")}</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faqBoxAnswer ${getClassAnswer("q2")}`}
                >
                  {t("faq.answer2")}
                </div>
              </div>
              {/* faqBox */}
              <div className="faqBox">
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faqBoxQuestion ${getClassQuestion("q3")}`}
                >
                  <p>{t("faq.question3")}</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faqBoxAnswer ${getClassAnswer("q3")}`}
                >
                  {t("faq.answer3")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
