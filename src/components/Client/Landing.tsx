import Navbar from "./Navbar";
import { useState } from "react";
import LoginModal from "./modals/LoginModal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Landing: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      {/* flex flex-col items-center h-screen py-[120px] */}
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
          <div className="bg-img1 object-fill w-full h-screen bg-cover bg-no-repeat">
            <div className="flex flex-col items-center h-screen py-[120px]">
              <h1 className="max-w-[810px] font-lexend font-medium text-white text-center text-[69px] leading-[81px] -tracking-[0.02em] dark:text-white-100">
                Bringing the{" "}
                <span className="text-primary-light text-white dark:text-primary-dark relative z-10">
                  magic of
                </span>{" "}
                movies to you
              </h1>
              <h3 className="max-w-[600px] font-inter text-white text-center text-[17px] leading-[30px] -tracking-[0.01em] mt-5 mb-10">
                Step inside and be transported to a world of your choosing
              </h3>
              <div className="flex flex-row gap-5">
                <Link
                  to={"/availableFilms"}
                  className="font-inter font-medium text-sm leading-[17px] text-black bg-white rounded-full px-5 py-4 border-white border-2 dark:text-[#0F172A] dark:bg-white-100"
                >
                  Browse Films
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    sessionStorage.getItem("userId")
                      ? navigate("/myReservations")
                      : setOpen(true);
                  }}
                  className="font-inter font-medium text-sm leading-[17px] text-black bg-white rounded-full border px-5 py-4 border-cool-gray-200 flex flex-row flex-nowrap items-center gap-2.5 dark:text-cool-gray-600 dark:bg-primary-dark"
                >
                  View my reservations
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-img2 object-fill w-full h-screen bg-cover bg-no-repeat">
            <div className="flex flex-col items-center h-screen py-[120px]">
              <h1 className="max-w-[810px] font-lexend font-medium text-white text-center text-[69px] leading-[81px] -tracking-[0.02em] dark:text-white-100">
                Bringing the{" "}
                <span className="text-primary-light text-white dark:text-primary-dark relative z-10">
                  magic of
                </span>{" "}
                movies to you
              </h1>
              <h3 className="max-w-[600px] font-inter text-white text-center text-[17px] leading-[30px] -tracking-[0.01em] mt-5 mb-10">
                Step inside and be transported to a world of your choosing
              </h3>
              <div className="flex flex-row gap-5">
                <Link
                  to={"/availableFilms"}
                  className="font-inter font-medium text-sm leading-[17px] text-black bg-white rounded-full px-5 py-4 border-white border-2 dark:text-[#0F172A] dark:bg-white-100"
                >
                  Browse Films
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    sessionStorage.getItem("userId")
                      ? navigate("/myReservations")
                      : setOpen(true);
                  }}
                  className="font-inter font-medium text-sm leading-[17px] text-black bg-white rounded-full border px-5 py-4 border-cool-gray-200 flex flex-row flex-nowrap items-center gap-2.5 dark:text-cool-gray-600 dark:bg-primary-dark"
                >
                  View my reservations
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-img3 object-fill w-full h-screen bg-cover bg-no-repeat">
            <div className="flex flex-col items-center h-screen py-[120px]">
              <h1 className="max-w-[810px] font-lexend font-medium text-white text-center text-[69px] leading-[81px] -tracking-[0.02em] dark:text-white-100">
                Bringing the{" "}
                <span className="text-primary-light text-white dark:text-primary-dark relative z-10">
                  magic of
                </span>{" "}
                movies to you
              </h1>
              <h3 className="max-w-[600px] font-inter text-white text-center text-[17px] leading-[30px] -tracking-[0.01em] mt-5 mb-10">
                Step inside and be transported to a world of your choosing
              </h3>
              <div className="flex flex-row gap-5">
                <Link
                  to={"/availableFilms"}
                  className="font-inter font-medium text-sm leading-[17px] text-black bg-white rounded-full px-5 py-4 border-white border-2 dark:text-[#0F172A] dark:bg-white-100"
                >
                  Browse Films
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    sessionStorage.getItem("userId")
                      ? navigate("/myReservations")
                      : setOpen(true);
                  }}
                  className="font-inter font-medium text-sm leading-[17px] text-black bg-white rounded-full border px-5 py-4 border-cool-gray-200 flex flex-row flex-nowrap items-center gap-2.5 dark:text-cool-gray-600 dark:bg-primary-dark"
                >
                  View my reservations
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {open ? <LoginModal open={open} setOpen={setOpen} /> : ""}
    </>
  );
};

export default Landing;
