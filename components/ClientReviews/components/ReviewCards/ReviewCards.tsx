/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"; 

interface TestimonialCardProps {
  image: string;
  name: string;
  text: string;
}

export const ReviewCards: React.FC<TestimonialCardProps> = ({
  image,
  name,
  text,
}) => {
  return (
    <div className="w-[350px] md:w-[400px]">
      <div
        className="w-full flex flex-col items-start gap-5 rounded-lg bg-white border border-gray-200 text-gray-800 font-light py-2 px-3"
        style={{ borderBottom: "3px solid red", borderTop: "3px solid red" }}
      >
        <div className="w-full flex items-center py-3">
          <div className="overflow-hidden rounded-full w-20 h-18 bg-gray-50 border border-gray-200">
            <Image
              src={image}
              alt={name}
              width={40}
              height={40}
              className="rounded-full w-20 h-20"
            />
          </div>
          <div className="flex items-center flex-col px-2 gap-2">
            <h6 className="font-bold text-sm uppercase text-gray-600">{name}</h6>
            <h6 className="text-sm text-gray-600">Regular client</h6>
          </div>
        </div>
        <div className="w-full">
          <p className="text-sm leading-noneflex items-center">
            <FaQuoteLeft className="text-lg leading-none italic font-bold text-gray-400 mr-1 mb-3" />
            {text}
            <FaQuoteRight className="text-lg leading-none italic font-bold text-gray-400 ml-[280px] md:ml-[340px]" />
          </p>
        </div>
      </div>
    </div>
  );
};


