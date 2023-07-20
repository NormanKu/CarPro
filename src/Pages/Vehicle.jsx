import Banner from "../components/Banner";
import Footer from "../components/Footer";
import CarCard from "../components/CarCard";
import Car1 from "../assets/images/car1.jpg";
import "../stylesheets/Pages/Vehicle/Vehicle.css";

function Vehicle() {
  const car = [
    {
      name: "Audi A1",
      img: Car1,
      price: "$45",
      details: ['Audi','Manual','Diesel']
    },
    {
      name: "BMW X3",
      img: Car1,
      price: "$55",
      details: ['BMW', 'Automatic', 'Petrol']
    },
    {
      name: "Mercedes-Benz C200",
      img: Car1,
      price: "$65",
      details: ['Mercedes-Benz', 'Automatic', 'Diesel']
    },
    {
      name: "Tesla Model 3",
      img: Car1,
      price: "$75",
      details: ['Tesla', 'Automatic', 'Electric']
    },
    {
      name: "Porsche Taycan",
      img: Car1,
      price: "$85",
      details: ['Porsche', 'Automatic', 'Electric']
    }
  ]


  return (
        <>
      <section className="modelsSection">
        {/* <HeroPages name="Vehicle Models" /> */}
        <div className="container">
          <div className="modelsDiv">

          {car.map((carItem, index) => (
            <CarCard key={index} car={carItem} />
          ))}

          </div>
        </div>
        {/* <Banner /> */}
        <Footer />
      </section>
    </>
  );
}

export default Vehicle;
