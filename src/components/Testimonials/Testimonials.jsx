import React from "react";
import "./Testimonials.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import engineer from "../../assets/engineer.png";

function Testimonials() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper2"
      >
        <SwiperSlide className="swiper-slide2">
          <div className="testimonial">
            <h1 className="testimonial-heading">
              We are adored by our students!
            </h1>
            <img src={engineer} alt="Loading.." className="testimonial-img" />
            <p className="testimonial-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sit,
              mollitia asperiores veritatis nihil ipsam non animi esse officiis
              quaerat, quibusdam officia voluptatibus consequatur libero ducimus
              sequi molestiae impedit maxime. At vero quis nostrum doloribus
              ipsa, corporis culpa. Dolore, quibusdam sit numquam pariatur odio
              voluptas aperiam explicabo nihil illum quas atque iure aut quidem
              earum placeat fugiat quo nisi et?
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide2">
          <div className="testimonial">
            <h1 className="testimonial-heading">
              We are adored by our students!
            </h1>
            <img src={engineer} alt="Loading.." className="testimonial-img" />
            <p className="testimonial-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sit,
              mollitia asperiores veritatis nihil ipsam non animi esse officiis
              quaerat, quibusdam officia voluptatibus consequatur libero ducimus
              sequi molestiae impedit maxime. At vero quis nostrum doloribus
              ipsa, corporis culpa. Dolore, quibusdam sit numquam pariatur odio
              voluptas aperiam explicabo nihil illum quas atque iure aut quidem
              earum placeat fugiat quo nisi et?
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Testimonials;
