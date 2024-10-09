import Image from "next/image";
import { valuesData } from "@/constants";

export const OurValues = () => {
  return (
    <div className="flex flex-col items-center px-4 py-10 w-full bg-white">
      <div className="flex justify-center items-start md:items-center text-heading font-bold flex-col gap-4 w-full">
        <h1 className="text-secondaryColor text-start md:text-center text-heading">
          Why PraSweets?
        </h1>

        <p className="text-paragraph text-start md:text-center text-secondaryColor md:w-[600px]">
          At PraSweets, we are passionate about crafting delicious, high-quality
          sweets that satisfy your cravings and bring joy to every occasion. Our
          selection is made from the finest ingredients.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-16 sm:gap-8 mt-16 sm:mt-24 w-full">
        {valuesData.map((value, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="relative w-20 h-20 md:w-32 md:h-32 left-2">
              <div className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300 shadow flex items-center justify-center">
                <Image
                  src={value.icon}
                  alt={value.title}
                  className="w-1/2 h-1/2"
                />
              </div>
              <div className="absolute inset-0 -translate-x-2 -translate-y-2 bg-black rounded-full "></div>
            </div>
            <h3 className=" text-heading  mt-6 sm:mt-10 text-secondaryColor">
              {value.title}
            </h3>
            <p className=" text-paragraph mt-4 text-secondaryColor">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
