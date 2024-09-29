import { PointBox } from "./components";
import { PointSectionData } from "@/app/constants";

export const PointSection = () => {
  return (
    <div className="w-full flex justify-center items-center my-10">
      <div className="w-full flex flex-wrap gap-5 md:gap-32 justify-center relative">
        <div className="absolute w-full h-full flex justify-center items-center">
          <div className="hidden md:flex absolute border-[1px] border-secondaryColor w-[300px]"></div>
          <div className="hidden md:flex absolute border-[1px] border-secondaryColor w-[300px] rotate-90"></div>
        </div>
        {PointSectionData.map((data, index) => (
          <div
            className={`w-full md:w-[37%] ${
              index === 0 && 3
                ? "reveal reveal-from-left"
                : "reveal reveal-from-right"
            }`}
            key={index}
          >
            <PointBox heading={data.heading} para={data.para} />
          </div>
        ))}
      </div>
    </div>
  );
};
