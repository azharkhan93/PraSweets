
import React from "react";
import Image from "next/image";

export const AboutUsSection: React.FC = () => {
  return (
    <section className=" w-full flex flex-col justify-center items-center py-20 px-5">
    
      <div className="container w-full text-center flex flex-col md:flex-row justify-center items-center gap-11">
        <div className="relative hidden md:block">
          <Image
            src="/assets/images/img45.webp"
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
              src="/assets/images/ai32.jpg"
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
