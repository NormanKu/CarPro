import Footer from "../components/Footer";
import Banner from "../components/Banner";
import ReviewCard from "../components/ReviewCard";
import Car1 from "../assets/images/car1.jpg";
import person1 from "../assets/images/user1.png";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

function Testimonials() {
  const reviews = [
    {
      car: Car1,
      name: "2023 Cadillac",
      price: "$45",
      details: "Good cars are safe, fast, affordable to purchase, economical to purchase, economical to operate, reliable, comfortable, and attractive.",
      userImg: person1,
      user: "Jakline Nelson",
      title: "Chief Editor",
      rating: 4.84
    },
    {
      car: Car1,
      name: "2024 Tesla",
      price: "$50",
      details: "Electric cars are quiet, fun-to-drive, and offer feature-rich cabins.",
      userImg: person1,
      user: "John Doe",
      title: "Senior Editor",
      rating: 4.5
    },
    {
      car: Car1,
      name: "2022 BMW",
      price: "$60",
      details: "BMW cars have been meticulously engineered to deliver precise handling.",
      userImg: person1,
      user: "Emma Watson",
      title: "Content Writer",
      rating: 4.6
    },
    {
      car: Car1,
      name: "2023 Mercedes",
      price: "$70",
      details: "Mercedes cars are known for their luxury features and smooth ride.",
      userImg: person1,
      user: "Robert Downey Jr.",
      title: "Product Analyst",
      rating: 4.7
    },
    {
      car: Car1,
      name: "2023 Audi",
      price: "$80",
      details: "Audi cars are well-known for their sleek designs and top-quality interiors.",
      userImg: person1,
      user: "Scarlett Johansson",
      title: "Quality Analyst",
      rating: 4.8
    }
  ];


  return (
    <>
      <section className="testimonialsPage">
        {/* <HeroPages name="Testimonials" /> */}
        <div className="container">
          <div className="testimonialsContent">
            <div className="testimonialsContentTitle">
              <h3>Inspected by the Masses</h3>
              <h2>Reflections from our Customers</h2>
              <p>
                Uncover the significant strides we&apos;ve undertaken for our
                patrons through their reflections. They&apos;ve embraced our
                services and witnessed the outcomes, and they&apos;re zealous to
                convey their affirmative experiences with you.
              </p>

            </div>
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 10,
                modifier: 300,
              }}
              pagination={{ el: '.swiper-pagination', clickable: true }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                clickable: true,
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="swiperContainer"
            >
              {
                reviews.map((reviewItem, index) => (
                  <SwiperSlide key={index}>
                    <ReviewCard reviews={reviewItem}/>
                  </SwiperSlide>
                ))
              }
              <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
            </Swiper>
          </div>
          {/* <PlanTrip /> */}
        </div>
      </section>
      <Banner />
      <Footer />
    </>
  );
}

export default Testimonials;
