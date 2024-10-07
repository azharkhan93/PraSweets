"use client";
import React from "react";
import Image from "next/image";

type ProductCardProps = {
  imageSrc: string;
  altText: string;
  buttonText: string;
}

export const ProdCards: React.FC<ProductCardProps> = ({ imageSrc, altText, buttonText }) => {
  return (
    <div className="relative rounded-md md:w-[244px] w-[180px] shadow-md shadow-black">
      <Image
        src={imageSrc}
        alt={altText}
        width={250}
        height={200}
        className="rounded-lg"
      />
      <div className="absolute bottom-[1px] left-0 right-0 text-center bg-black/60 py-1 rounded-md md:w-[240px] overflow-hidden cursor-pointer">
        <p className="text-white font-semibold">{buttonText}</p>
      </div>
    </div>
  );
};