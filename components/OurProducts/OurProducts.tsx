"use client";
import React from "react";
import { productsData } from "@/constants";
import { ProdCards } from "./components/ProdCards";

const slideAnimation = `
  @keyframes slide {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-90%);
    }
  }
`;

export const OurProducts: React.FC = () => {
  return (
    <div className="w-full bg-white flex items-center justify-center flex-col gap-8 py-10">
      <style jsx>{`
        ${slideAnimation}
        .slide-track {
          display: flex;
          gap: 30px; 
          width: calc((250px + 30px) * ${productsData.length});
          animation: slide 50s linear infinite;
        }
        .slide {
          width: 250px; 
        }
        .slide-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="flex justify-center items-start md:items-center text-heading font-bold flex-col gap-4 w-full px-4">
        <h1 className="text-secondaryColor text-center text-heading">
          Craving For Authentic BARFI
        </h1>

        <p className="text-paragraph text-center md:text-center text-secondaryColor md:w-[500px]">
          {`Whether you prefer classic flavors or adventurous combinations, we have something for everyone. Celebrate life’s moments with our delightful Barfi!`}
        </p>
      </div>

      <h1 className="text-lg text-white bg-secondaryColor text-center rounded-md cursor-pointer px-4 py-2">
        <a href="/assets/images/NutritionalValues.pdf" target="_blank" rel="noopener noreferrer">
          Download Nutritional Facts
        </a>
      </h1>

      <div className="w-[100%] md:w-[85%] overflow-hidden">
        <div className="slide-track">
          {productsData.map((product, index) => (
            <div className="slide" key={index}>
              <ProdCards
                imageSrc={product.imageSrc}
                altText={product.altText}
                buttonText={product.buttonText}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


