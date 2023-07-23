import Footer from "../components/Footer";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";
import ReactMapGl,{Marker} from "react-map-gl";
import Room from "@mui/icons-material/Room";

const TOKEN = import.meta.env.VITE_APP_MAPBOX_TOKEN;

function Contact() {
  const places = [
    { lat: 25.0418254, long: 121.5149875 , branch: "Taipei" },
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
      <section className="contact-page">
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
            <ReactMapGl
            {...viewPort}
            mapboxApiAccessToken={TOKEN}
            width="100%"
            height="100%"
            transitionDuration={200}
            mapStyle="mapbox://styles/kunorman4/clkf18gac001z01q2eosb971o"
           onViewStateChange={(viewPort) => setViewPort(viewPort)}
           >
             {
              places.map((place) => (
                <Marker
                  key={place.branch}
                  latitude={place.lat}
                  longitude={place.long}
                  offsetLeft={-20}
                  offsetTop={-42}
                >
                  <Room
                    style={{ fontSize:40, color: "tomato" }}
                  />
                </Marker>
              ))
            }
            </ReactMapGl>
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
