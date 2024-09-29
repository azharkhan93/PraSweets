import React from "react";

export const AboutUsSection: React.FC = () => {
  return (
    <section className="bg-AboutBg w-full flex flex-col justify-center items-center my-10 px-5">
      <div className="container w-full text-center flex flex-col justify-center items-center">
        <h1 className=" text-primaryColor text-2xl sm:text-4xl md:text-4xl font-bold mb-4 reveal reveal-from-left">
          Luxury Villa Development in the Heart of
        </h1>
        <h2 className="relative mt-11 text-3xl sm:text-3xl md:text-5xl font-bold text-primaryColor mb-2 reveal reveal-from-right">
          <span className="border-t-2 border-thirdColor w-[90px] lg:w-[120px] h-0 inline-block mr-4 mb-2"></span>
          Meydan
          <span className="border-t-2 border-thirdColor w-[90px] lg:w-[120px] h-0 inline-block ml-3 mb-2"></span>
        </h2>

        <p className="text-l mt-14 lg:mt-16 sm:text-xl md:text-2xl text-primaryColor leading-relaxed max-w-7xl lg:px-16 text-center reveal reveal-from-left">
          Welcome to the pinnacle of luxury living in Meydan, where every detail
          is meticulously crafted to exceed your expectations. Our exclusive
          boutique development offers acollection of 4, 5 and 6 bedroom villas,
          each a masterpiece of design and sophistication.
        </p>
      </div>
    </section>
  );
};
