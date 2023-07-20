import Footer from "../components/Footer";
import SaleCard from "../components/SaleCard";
import Person1 from "../assets/team/person1.jpg";
import "../stylesheets/Pages/Teams/Teams.css";

function Teams() {
  const teamPpl = [
    { img: Person1, name: "Luke Miller", job: "Salesman" },
    { img: Person1, name: "Michael Diaz", job: "Business Owner" },
    { img: Person1, name: "Briana Ross", job: "Photographer" },
    { img: Person1, name: "Lauren Rivera", job: "Car Detailist" },
    { img: Person1, name: "Martin Rizz", job: "Mechanic" },
    { img: Person1, name: "Caitlyn Hunt", job: "Menager" },
  ];

  return (
    <>
      <section className="teamPage">
        {/* <HeroPages name="Our Team" /> */}
        <div className="container">
          <div className="teamContainer">
            {
              teamPpl.map((teamItem, index) => (
                <SaleCard key={index} sales={teamItem}/>
              ))
            }

          </div>
        </div>
        {/* <Banner /> */}
        <Footer />
      </section>
    </>
  );
}

export default Teams;
