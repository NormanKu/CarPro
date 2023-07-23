import Footer from "../components/Footer";
import SaleCard from "../components/SaleCard";
import Person1 from "../assets/team/person1.jpg";
import Banner from "../components/Banner";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow'

function Teams() {
  const teamPpl = [
    { img: Person1,title:"Salesman", name: "Luke Miller", job: "Salesman" },
    { img: Person1, title:"Business", name: "Michael Diaz", job: "Business Owner" },
    { img: Person1, title:"Photographer", name: "Briana Ross", job: "Photographer" },
    { img: Person1, title:"Car Detailist", name: "Lauren Rivera", job: "Car Detailist" },
    { img: Person1, title:"Mechanic", name: "Martin Rizz", job: "Mechanic" },
    { img: Person1, title:"Menager", name: "Caitlyn Hunt", job: "Menager" },
  ];

  return (
    <>
      <section className="teamPage">
        <div className="container">
          <div className="teamContainer">
            {/* {
              teamPpl.map((teamItem, index) => (
                <SaleCard key={index} sales={teamItem}/>
              ))
            } */}
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 0,
                stretch: 10,
                depth: 600,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
            >
              {teamPpl.map((teamItem, index) => (
                <SwiperSlide key={index}>
                  <SaleCard sales={teamItem} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <Banner />
        <Footer />
      </section>
    </>
  );
}

export default Teams;
