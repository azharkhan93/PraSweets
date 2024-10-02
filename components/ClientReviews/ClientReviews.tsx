
import { testimonials } from '@/constants';
import React from 'react';
import { ReviewCards } from './components/ReviewCards';


export const ClientReviews: React.FC = () => {
  return (
    <section className="py-10 w-full flex items-center justify-center flex-col gap-9">
      <h1 className="text-3xl font-bold text-center text-secondaryColor">What Our Clients Say</h1>
      <p className="text-xl text-center text-secondaryColor mb-5 w-ful md:w-[700px]">
        We value our clients feedback and continually strive to improve our services based on their insights. 
        Here are some testimonials from our satisfied clients.
      </p>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((item, index) => (
          <ReviewCards key={index} testimonial={item} />
        ))}
      </div>
    </section>
  );
};


