import { Box } from "./components";
import { MultiBoxData } from "@/app/constants";

export const MultiBoxSection = () => {
  return (
    <div className="w-full flex justify-center my-10" id="multi-box-section">
      <div className="w-[90%] flex flex-wrap justify-center gap-5">
        {MultiBoxData.map((data, index) => (
          <div
            className={`w-fit ${
              index === 0 && 1
                ? "reveal reveal-from-left"
                : "reveal reveal-from-right"
            }`}
            key={index}
          >
            <Box heading={data.heading} para={data.para} />
          </div>
        ))}
      </div>
    </div>
  );
};
