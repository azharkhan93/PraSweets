"use client"
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
    <div className="w-full bg-gray-50 flex items-center justify-center py-5">
      <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-20 text-gray-800">
        <div className="text-center flex flex-col items-center py-5 gap-5">
          <h1 className="text-xl md:text-4xl font-bold text-gray-600 w-full">
            What people are saying.
          </h1>
          <h3 className="text-xl mb-5 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
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
          <div className="flex items-center justify-center gap-11 flex-col">
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



   