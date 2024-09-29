
import { FormSectionData } from "@/constants";
import { Form } from "../Form";
import Image from "next/image";

export const FormSection = () => {
  return (
    <div
      className="w-full bg-primaryColor flex flex-col-reverse md:flex-row justify-center gap-10 md:gap-0 p-10"
      id="form-section"
    >
      <div className="w-full md:w-[40%] flex flex-col gap-5 reveal reveal-from-left">
        <div className="w-full h-[32%] flex flex-row justify-center items-center">
          <Image
            src={"/assets/images/arista-logo.png"}
            alt={"logo"}
            width={100}
            height={100}
          />
        </div>
        <div className="w-full h-[32%] p-5 flex flex-col md:flex-row justify-center items-center gap-5">
          {FormSectionData.map((data, index) => (
            <div className="" key={index}>
              <h1 className="text-[24px] text-center text-thirdColor tracking-wide">
                {data.bedroom}
              </h1>
              <h1 className="text-[20px] text-center text-secondaryColor">
                {data.bua}
              </h1>
            </div>
          ))}
        </div>
        <div className="w-full h-[32%] flex flex-col justify-center items-center">
          <h1 className="text-[24px] text-secondaryColor text-center">
            Offer Starts From
          </h1>
          <h1 className="text-[28px] text-center text-thirdColor tracking-wide">
            {" "}
            {`AED 13,500,000`}
          </h1>
        </div>
      </div>
      <div className="w-full md:w-[40%] md:px-[2%] reveal reveal-from-right">
        <Form />
      </div>
    </div>
  );
};
