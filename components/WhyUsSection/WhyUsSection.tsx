import { CardData, cardData } from "@/constants";
import React from "react";
export const WhyUsSection: React.FC = () => {
  return (
    <section className="text-gray-700 body-font py-11">
      <div className="flex justify-center text-4xl font-regular">
        Why Adore?
      </div>

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
    </section>
  );
};
