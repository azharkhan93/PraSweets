// TestimonialCard.tsx
import React from 'react';
import Image from 'next/image';
import { Testimonial } from '@/constants';


interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const ReviewCards: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="flex items-center justify-center px-5 py-5">
      <div className="w-full max-w-xl px-5 pt-5 pb-10 mx-auto text-primaryColor bg-secondaryColor rounded-lg shadow-lg dark:bg-gray-800 dark:text-gray-50">
        <div className="w-full pt-1 pb-5 mx-auto -mt-16 text-center">
          <a href="#" className="relative block">
            <Image
              alt="profile"
              src={testimonial.imageUrl}
              className="mx-auto object-cover rounded-full"
              width={80} 
              height={80} 
            />
          </a>
        </div>
        <div className="w-full mb-10">
          <div className="h-3 text-3xl leading-tight text-left text-primaryColor">“</div>
          <p className="px-5 text-sm text-center text-text-primaryColor  dark:text-primaryColor">
            {testimonial.testimonial}
          </p>
          <div className="h-3 -mt-3 text-3xl leading-tight text-right text-primaryColor ">”</div>
        </div>
        <div className="w-full">
          <p className="font-bold text-center text-primaryColor text-md">{testimonial.name}</p>
          <p className="text-xs text-center text-primaryColor dark:text-gray-300">{testimonial.username}</p>
        </div>
      </div>
    </div>
  );
};




