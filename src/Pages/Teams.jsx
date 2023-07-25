import Footer from "../components/Footer";
import SaleCard from "../components/SaleCard";
import Banner from "../components/Banner";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow'
import 'swiper/css/autoplay';
import { TEAM_DATA } from "../components/data/TeamData";
import { Pagination, Autoplay } from 'swiper/modules';


function Teams() {

  return (
    <>
      <section className="teamPage">
        <div className="container">
          <div className="teamContainer">
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
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              pagination={true}
              modules={[ Pagination,Autoplay]}

            >
              {TEAM_DATA.map((teamItem, index) => (
                <SwiperSlide key={index}>
                  <SaleCard teamItem={teamItem} />
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
