import React from "react";
import Image from "next/image";
import { CustomLinkButton } from "../CustomLinkButton";

export const OurAgenda = () => {
  return (
    <section 
    id="about"
    className="overflow-hidden pt-4 md:pt-20 md:px-8 py-10">
      <div className="flex flex-wrap items-center justify-between -mx-4 flex-col-reverse  md:flex-row">
        <div className="w-[590px] px-4 hidden md:flex ">
              <div className="py-3 sm:py-4">
                <Image
                  src="/assets/images/ai32.jpg"
                  alt="Image 2"
                  width={500}
                  height={350}
                  className="w-full rounded-2xl"
                />
              </div>
        </div>

        <div className="w-full px-4  md:w-[680px]">
          <div className="mt-10 md:mt-0 px-4">
            <span className="block mb-4 text-lg font-semibold text-secondaryColor">
              Why Choose Us
            </span>
            <h2 className="mb-5 text-3xl font-bold text-secondaryColor sm:text-[40px]/[48px]">
              Make your customers happy by giving services.
            </h2>
            <p className="mb-5 text-base text-secondaryColor ">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less.
            </p>
            <p className="mb-8 text-base text-secondaryColor ">
              A domain name is one of the first steps to establishing your
              brand. Secure a consistent brand image with a domain name that
              matches your business.
            </p>
            <div className="w-full flex justify-center rounded-md">
            <CustomLinkButton
              label="Enquire Now"
              href="form-section"
              classes="bg-secondaryColor"
              border="noBorder"
            />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};
