import Banner from "../components/Banner";
import Footer from "../components/Footer";
import CarCard from "../components/CarCard";
import {Car} from "../components/data/Car";
function Vehicle() {

  return (
        <>
      <section className="modelsSection">
        <div className="container">
          <div className="modelsDiv">

          {Car.map((carItem, index) => (
            <CarCard key={index} car={carItem} />
          ))}

          </div>
        </div>
        <Banner />
        <Footer />
      </section>
    </>
  );
}

export default Vehicle;
