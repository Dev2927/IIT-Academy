import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Home.css";
import img from "../../assets/main.png";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import engineer from "../../assets/engineer.png";
import doctor from "../../assets/doctor.png";
import foundation from "../../assets/foundation.png";
import Testimonials from "../Testimonials/Testimonials";
import { AccordionComponent } from "../Accordian/Accordian";

export default function Home() {
  return (
    <section className="home-container">
      <div className="home-img">
        <img src={img} alt="Loading..." />
      </div>

      {/* Slider */}
      <div className="slider-container">
      <p className="slide-heading">Popular Courses</p>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          
          <SwiperSlide className="swiper-slide">
            <div className="slider">
              <div>
                <img src={engineer} alt="Loading..." className="slider-img" />
              </div>
              <h2 className="slider-heading">Engineering</h2>
              <p className="slider-para">
                • One Year Power Step Classroom Course for JEE (Main and
                Advanced)
              </p>

              <p className="slider-para">
                • Two Year Integrated Classroom Course for JEE (Main and
                Advanced)
              </p>
              <div className="slider-btn">
                <button className="slider-btns">Check More</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="slider">
              <div>
                <img src={doctor} alt="Loading..." className="slider-img" />
              </div>

              <h2 className="slider-heading">Medical</h2>
              <p className="slider-para">
                • One Year Regular Medical Classroom Course for NEET
              </p>

              <p className="slider-para">
                • Two Year Regular Medical Classroom Course for NEET
              </p>
              <div className="slider-btn">
                <button className="slider-btns">Check More</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="slider">
              <div>
                <img src={foundation} alt="Loading..." className="slider-img" />
              </div>

              <h2 className="slider-heading">Foundation</h2>
              <p className="slider-para">
                • One Year Integrated Classroom Course for Olympiads, NTSE &
                Class X
              </p>

              <p className="slider-para">
                • Two Year Integrated Classroom Course for Olympiads, NTSE &
                Class IX to X
              </p>
              <div className="slider-btn">
                <button className="slider-btns">Check More</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Testimonial */}
      <Testimonials />

      {/* Accordian */}
      <AccordionComponent />
    </section>
  );
}
