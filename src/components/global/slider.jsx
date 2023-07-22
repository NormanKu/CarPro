// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export const Slider = ({slides}) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={5}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((slide) => {
        return (
          <SwiperSlide key={slide.title}>
            <img src={slide.image} alt={slide.title} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
