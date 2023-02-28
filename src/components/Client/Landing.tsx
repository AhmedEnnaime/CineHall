import Navbar from "./Navbar";
import Slide from "./Slide";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";

const Landing: React.FC = () => {
  return (
    <>
      <Navbar />

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide bg_img={"bg-img1"} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide bg_img={"bg-img2"} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide bg_img={"bg-img3"} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Landing;
