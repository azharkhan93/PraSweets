import { CardData, cardData } from "@/constants";
import React from "react";
import Image from "next/image";

export const AboutUsSection: React.FC = () => {
  return (
    <section className=" w-full flex flex-col justify-center items-center my-10 px-5">
      <div className="w-full flex items-center justify-between flex-row md:flex-row py-11 md:py-24  px-0 md:px-32 gap-6 md:gap-20 flex-wrap md:flex-nowrap">
        {cardData.map((card: CardData, index: number) => (
          <div
            key={index}
            className="bg-secondaryColor flex items-center justify-center rounded-full flex-col gap-3 md:gap-6 py-2 w-[155px] md:w-[320px] md:h-[250px] h-[200px] flex-wrap px-1 border-4 border-white  "
          >
            <div
              className="bg-primaryColor flex items-center justify-center rounded-full py-4 px-4"
              style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.8)" }}
            >
              <card.icon size={50} className="text-secondaryColor" />
            </div>
            <h1 className="text-xl text-primaryColor text-center">
              {card.title}
            </h1>
          </div>
        ))}
      </div>
      <div className="container w-full text-center flex flex-col md:flex-row justify-center items-center gap-11">
        <div className="relative hidden md:block">
          <Image
            src="/assets/images/aristabg.jpg"
            alt="Description of the image"
            width={360}
            height={300}
            className="rounded-md h-[600px] w-[400px]"
          />
        </div>
        <div className="relative  flex-col items-center justify-center w-full md:w-[800px] space-y-11 py-11">
          <h1 className=" text-start  text-secondaryColor text-2xl sm:text-4xl md:text-2xl  reveal reveal-from-left leading-relaxed">
            Premium Level Luxury Skin Care Services & Beauty Services
          </h1>
          <p className="text-l sm:text-xl md:text-xl text-secondaryColor leading-relaxed text-start reveal reveal-from-left px-0 md:px-1 ">
            Welcome to the pinnacle of luxury saloon, where every detail is
            meticulously crafted to exceed your expectations. Our exclusive
            boutique development offers acollection of 4, 5 and 6 star ratings,
            each a masterpiece of design and sophistication.
          </p>
          <div className="relative">
            <Image
              src="/assets/images/aristabg.jpg"
              alt="Description of the image"
              width={400}
              height={390}
              className="rounded h-[280px] md:h-[370px] md:w-[770px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
