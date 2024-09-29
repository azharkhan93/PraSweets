import { FeaturedVillaData } from "@/constants";
import { PictureCard } from "./components";


export const FeaturedSection = () => {
  return (
    <div className="w-full mt-10">
      <div className="hidden md:flex flex-col">
        <div className="w-full">
          <div className="w-full flex justify-center items-center">
            <h1 className="text-[36px] font-bold text-primaryColor">
              Our Featured Luxury
            </h1>
          </div>
          <div className="flex flex-row justify-center items-center gap-[1%]">
            <div className="w-[10%] border-b-[2px] h-0 border-thirdColor"></div>
            <div>
              <h1 className="text-[48px] font-extrabold text-primaryColor">
                Projects
              </h1>
            </div>
            <div className="w-[10%] border-b-[2px] h-0 border-thirdColor"></div>
          </div>
        </div>
        <div className="w-full p-5 flex flex-wrap justify-center gap-2">
          {FeaturedVillaData.map((data, index) => (
            <div className={`w-fit reveal reveal-from-top`} key={index}>
              <PictureCard
                image={data.image}
                hotelName={data.hotelName}
                hotelPlace={data.hotelPlace}
                key={index}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="md:hidden flex flex-col">
        <div className="w-full">
          <div className="w-full flex justify-center items-center">
            <h1 className="text-[28px] font-bold text-primaryColor">
              Our Featured Luxury
            </h1>
          </div>
          <div className="flex flex-row justify-center items-center gap-[3%]">
            <div className="w-[20%] border-b-[2px] h-0 border-thirdColor"></div>
            <div>
              <h1 className="text-[48px] font-extrabold text-primaryColor">
                Villas
              </h1>
            </div>
            <div className="w-[20%] border-b-[2px] h-0 border-thirdColor"></div>
          </div>
        </div>
        <div className="w-full p-5 flex flex-wrap justify-center gap-2">
          {FeaturedVillaData.map((data, index) => (
            <div
              className={`w-fit ${
                index === 0 && 2 && 4 && 6
                  ? "reveal reveal-from-top"
                  : "reveal reveal-from-bottom"
              }`}
              key={index}
            >
              <PictureCard
                image={data.image}
                hotelName={data.hotelName}
                hotelPlace={data.hotelPlace}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
