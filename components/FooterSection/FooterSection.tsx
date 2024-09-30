import React from "react";
import Image from "next/image";
import { FooterData } from "@/constants";


export const FooterSection = () => {
  return (
    <footer className="bg-secondaryColor text-white flex flex-col gap-5 md:gap-10 py-10 reveal reveal-from-bottom">
      <div className="flex items-center justify-center" style={{opacity: "0"}}>
        <Image
          src="/assets/images/arista-logo.png"
          alt="Logo"
          width={170}
          height={120}
        />
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center items-center md:justify-between gap-8 md:gap-2">
        {FooterData.map((data, index) => (
          <div
            className="w-full md:w-[24%] flex flex-col items-center gap-4"
            key={index}
          >
            <h1 className="text-primaryColor text-xl font-bold tracking-wide mb-2 text-center">
              {data.heading}
            </h1>
            <p className="text-primaryColor  text-lg tracking-wide text-center">
              {data.line1}
            </p>
            <p className="text-primaryColor text-lg tracking-wide mb-2 text-center">
              {data.line2}
            </p>
          </div>
        ))}
      </div>
    </footer>
  );
};
