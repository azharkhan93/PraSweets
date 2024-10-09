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
    <div className="relative rounded-md md:w-[244px] w-[175px] shadow-sm shadow-grey">
      <Image
        src={imageSrc}
        alt={altText}
        width={240}
        height={0}
        objectFit="fill"
        style={{ width: "100%", height: "auto", maxHeight: "100%" }}
        className="rounded-lg"
      />
      <div className="absolute bottom-[5px] left-1 right-0 text-center bg-black/60 py-1 rounded-sm md:w-[234px] overflow-hidden cursor-pointer">
        <p className="text-white font-semibold">{buttonText}</p>
      </div>
    </div>
  );
};