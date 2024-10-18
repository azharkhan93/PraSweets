"use client";
import React from "react";
import Image from "next/image";

type ProductCardProps = {
  imageSrc: string;
  altText: string;
  buttonText: string;
};

export const ProdCards: React.FC<ProductCardProps> = ({
  imageSrc,
  altText,
  buttonText,
}) => {
  return (
    <div className="relative rounded-md md:w-[245px] w-[250px] h-[370px] border border-gray-200 flex items-center justify-center ">
      <Image
        src={imageSrc}
        alt={altText}
        width={250}
        height={250}
        className="object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 text-center bg-black/60 py-1 rounded cursor-pointer overflow-hidden w-full">
        <p className="text-white">
          <a href="https://mybillbook.in/store/pra_sweets" target="_blank">
            {buttonText}
          </a>
        </p>
      </div>
    </div>
  );
};

