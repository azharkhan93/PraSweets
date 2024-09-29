import React from "react";
import { MdOutlineVilla } from "react-icons/md";
import { VillaFeaturesData } from "@/app/constants";
import { theme } from "@/app/theme";

export const VillaFeatures = () => {
  return (
    <div className="flex justify-center items-center w-full bg-primaryColor py-16">
      <div className="w-full md:w-[90%] h-full flex flex-col md:flex-row md:justify-center md:items-center">
        <div className="w-full md:w-[50%] flex flex-col justify-center items-center gap-5 text-center lg:text-left reveal reveal-from-left">
          <div className="w-full flex flex-col md:flex-row justify-center md:justify-start items-center md:gap-3 px-3">
            <MdOutlineVilla
              size={40}
              className="hidden md:flex"
              color={theme.colors.secondaryColor}
            />
            <h1 className="text-4xl font-bold  text-secondaryColor">
              Villa Features
            </h1>
            <div className="border-b-[1px] border-secondaryColor w-[70%] md:w-[30%] h-0 "></div>
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-5 md:gap-8 lg:gap-11">
            {VillaFeaturesData.map((data, index) => (
              <div className="px-3" key={index}>
                <p className="text-2xl md:text-3xl text-white">
                  {data.heading}
                </p>
                <p className="text-md md:text-lg text-white">{data.para}</p>
              </div>
            ))}
          </div>
        </div>
        <div
          className="w-full md:w-[30%] h-[600px] reveal reveal-from-right bg-cover bg-center mt-5 md:mt-0"
          style={{ backgroundImage: `url("/assets/images/recta.png")` }}
        ></div>
      </div>
    </div>
  );
};
