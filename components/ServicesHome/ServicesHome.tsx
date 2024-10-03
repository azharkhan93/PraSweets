import { servicesData } from "@/constants";
import React from "react";
import { ServicesCards } from "./components/ServiceCards/ServiceCards";

export const ServicesHome = () => {
  return (
    <div className="flex justify-center items-center flex-col py-20 gap-10 ">
      <div className="flex items-center justify-center flex-col gap-8 w-full px-4">
        <h1 className="text-3xl text-secondaryColor">Our Services</h1>
        <p className="text-l text-secondaryColor l">
          {" "}
          explore vriety of our services at the ease of you homeOur Services
        </p>
      </div>
      <div className="flex items-center justify-center flex-row gap-2 md:gap-11 w-full flex-wrap">
        {servicesData.map((service) => (
          <ServicesCards
            key={service.id}
            name={service.name}
            imageUrl={service.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};
