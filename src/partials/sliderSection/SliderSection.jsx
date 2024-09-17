import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import sliderOne from "../../../public/images/sliderSectionGallery/slider1.png";
import sliderTwo from "../../../public/images/sliderSectionGallery/slider2.png";
import sliderThree from "../../../public/images/sliderSectionGallery/slider3.png";
import ProjectButton from "../../components/projectButton/ProjectButton";
import styles from "./SliderSection.module.css";
const { container_slider } = styles;
const SliderSection = () => {
  return (
    <>
      <Swiper
        className={[container_slider].join(" ")}
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        breakpoints={{
          // when window width is >= 640px
          360: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <img src={sliderOne} alt="First Slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderTwo} alt="Second Slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderThree} alt="Third Slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderOne} alt="First Slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderTwo} alt="Second Slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderThree} alt="Third Slider" />
        </SwiperSlide>
      </Swiper>
      <ProjectButton />
    </>
  );
};
export default SliderSection;
