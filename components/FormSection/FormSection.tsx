import { FormSectionData } from "@/constants";
import { Form } from "../Form";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

export const FormSection = () => {
  return (
    <div
      className="w-full flex flex-col-reverse md:flex-row justify-center gap-10 md:gap-11 py-10"
      id="form-section"
    >
      <div className="w-full md:w-[50%] flex flex-col gap-8 reveal reveal-from-left">
        <div className="w-full h-[32%]  flex-row justify-center items-center hidden md:flex">
          <Image
            src={"/assets/images/logo3.png"}
            alt={"logo"}
            width={160}
            height={100}
          />
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-3 md:gap-8 flex-wrap">
          {FormSectionData.map((data, index) => (
            <div className=" py-3 gap-3 " key={index}>
              <h1 className="text-subHeading  text-center text-secondaryColor tracking-wide">
                {data.bedroom}
              </h1>
              <h1 className="text-subHeading  text-center text-secondaryColor">
                {data.bua}
              </h1>
            </div>
          ))}
        </div>
        <div className="w-full h-[32%] flex flex-col justify-center items-center gap-4">
          <h1 className=" text-subHeading  text-secondaryColor text-center">
            Follow Us On
          </h1>

          <div className="text-[28px] text-center text-secondaryColor tracking-wide flex gap-6">
            <FaInstagram />
            <FaFacebook />
            <FaLinkedin />
          </div>
        </div>
      </div>
      <div className="w-full md:w-[40%] md:px-[2%] reveal reveal-from-right px-3">
        <Form />
      </div>
    </div>
  );
};
