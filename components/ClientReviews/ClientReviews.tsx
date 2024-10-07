"use client";
import React from "react";
import { testimonialsData } from "@/constants";
import { ReviewCards } from "./components/ReviewCards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const ClientReviews: React.FC = () => {
  return (
    <div
    id="testimonials"
     className="w-ful flex items-center justify-center py-10">
      <div className="w-full bg-white  ">
        <div className="flex justify-center items-start md:items-center text-heading flex-col gap-4 w-full px-4 py-10">
          <h1 className="text-secondaryColor text-start md:text-center text-heading">
            What Peoples Are Saying?
          </h1>

          <p className="text-paragraph text-start md:text-center text-secondaryColor md:w-[600px]">
            {`Our customers love sharing their experiences with our treats, and their kind words inspire us to continue delivering excellence. Here's what some of them have to say`}
          </p>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          slidesPerGroup={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          modules={[Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <div className="flex items-center justify-center gap-11 flex-col py-10">
            {testimonialsData.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <ReviewCards
                  image={testimonial.image}
                  name={testimonial.name}
                  text={testimonial.text}
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};
