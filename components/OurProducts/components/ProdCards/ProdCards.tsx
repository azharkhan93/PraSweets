"use client";
import React from "react";
import Image from "next/image";

type ProductCardProps = {
  imageSrc: string;
  altText: string;
  buttonText: string;
};

export const ProdCards: React.FC<ProductCardProps> = ({ imageSrc, altText, buttonText }) => {
  return (
    <div className="relative rounded-md md:w-[245px] w-[175px] shadow-sm shadow-black flex items-center justify-center">
      <Image
        src={imageSrc}
        alt={altText}
        width={240}
        height={0}
       
      />
      <div className="absolute bottom-[0px]  left-0 right-0 text-center bg-black/60 py-1 rounded cursor-pointer overflow-hidden w-full">
        <p className="text-white">
          <a href="https://mybillbook.in/store/pra_sweets" target="_blank">
            {buttonText}
          </a>
        </p>
      </div>
    </div>
  );
};
