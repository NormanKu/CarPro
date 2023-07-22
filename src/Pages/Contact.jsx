import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <section className="contact-page">
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">

            </div>
            <div className="contact-div__form">
              <form>
                <label>
                  Full Name <b>*</b>
                </label>
                <input type="text" placeholder='E.g: "Joe Shmoe"'></input>

                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="youremail@example.com"></input>

                <label>
                  Tell us about it <b>*</b>
                </label>
                <textarea placeholder="Write Here.."></textarea>

                <button type="submit">
                  <i className="fa-solid fa-envelope-open-text"></i>&nbsp; Send
                  Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
}

export default Contact;
