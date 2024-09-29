import React from "react";
import Image from "next/image";
import { FooterData } from "@/constants";


export const FooterSection = () => {
  return (
    <footer className="bg-primaryColor text-white flex flex-col gap-5 md:gap-10 py-10 reveal reveal-from-bottom">
      <div className="flex items-center justify-center">
        <Image
          src="/assets/images/arista-logo.png"
          alt="Logo"
          width={170}
          height={120}
        />
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center items-center md:justify-between">
        {FooterData.map((data, index) => (
          <div
            className="w-full md:w-[24%] flex flex-col items-center"
            key={index}
          >
            <h1 className="text-thirdColor text-xl font-bold tracking-wide mb-2 text-center">
              {data.heading}
            </h1>
            <p className="text-secondaryColor text-lg tracking-wide text-center">
              {data.line1}
            </p>
            <p className="text-secondaryColor text-lg tracking-wide mb-2 text-center">
              {data.line2}
            </p>
          </div>
        ))}
      </div>
    </footer>
  );
};
