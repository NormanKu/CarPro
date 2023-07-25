import Footer from "../components/Footer";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";
import ReactMapGl, { Marker } from "react-map-gl";
import Room from "@mui/icons-material/Room";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const TOKEN = import.meta.env.VITE_APP_MAPBOX_TOKEN;

function Contact() {
  const { t } = useTranslation();

  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        "service_50kqqok",
        "template_jjsxn4g",
        form.current,
        "9ZzpsQIOuAuQ93RQe"
      );
      console.log(result.text);
    } catch (error) {
      console.log(error.text);
    }
  };

  const places = [
    { lat: 25.0418254, long: 121.5149875, branch: "Taipei" },
    { lat: 40.613099, long: -74.036969, branch: "New York" },
    { lat: 35.594519, long: 139.651665, branch: "Tokyo" },
  ];
  const [viewPort, setViewPort] = useState({
    latitude: 25.0418254,
    longitude: 121.5149875,
    zoom: 3,
  });

  return (
    <>
      <section className="contactPage">
        <div className="container">
          <div className="contactDiv">
            <div className="contactDivMap">
              <ReactMapGl
                {...viewPort}
                mapboxApiAccessToken={TOKEN}
                width="100%"
                height="100%"
                transitionDuration={200}
                mapStyle="mapbox://styles/kunorman4/clkf18gac001z01q2eosb971o"
                onViewStateChange={(viewPort) => setViewPort(viewPort)}
              >
                {places.map((place) => (
                  <Marker
                    key={place.branch}
                    latitude={place.lat}
                    longitude={place.long}
                    offsetLeft={-20}
                    offsetTop={-42}
                  >
                    <Room style={{ fontSize: 40, color: "tomato" }} />
                  </Marker>
                ))}
              </ReactMapGl>
            </div>
            <div className="contactDivForm">
              <form ref={form} onSubmit={sendEmail}>
                <label>
                  {t("contact.name")} <b>*</b>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder='E.g: "Joe Shmoe"'
                ></input>

                <label>
                  Email <b>*</b>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="youremail@example.com"
                ></input>

                <label>
                  {t("contact.message")}
                  <b>*</b>
                </label>
                <textarea name="message" placeholder="Write Here.."></textarea>

                <button type="submit" value="Send">
                  <i className="fa-solid fa-envelope-open-text"></i>&nbsp;{" "}
                  {t("contact.submit")}
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
