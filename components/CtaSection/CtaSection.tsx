import React from 'react';
import Image from 'next/image';

export const CtaSection = () => {
  return (
    <section className="relative w-full h-[400px] md:h-[400px] flex justify-center items-center flex-col md:flex-row px-2">
      
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[1]"
        style={{ filter: 'brightness(50%)' }} 
      >
        <source src="/assets/images/home3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      
      <div className="relative flex  items-center justify-between w-full px-1 lg:px-4 md:py-24 z-10 flex-col md:flex-row">
       
        <div className="flex flex-col justify-center items-start text-primaryColor w-full md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold">
            Take Action Today!
          </h1>
          <p className="mt-3 text-lg lg:text-xl">
            Dont miss out on our exclusive offer. Start your journey with us now!
          </p>
          <button className="mt-5 px-6 py-3 bg-primaryColor hover:bg-secondaryColor text-secondaryColor text-lg rounded-lg">
            Get Started
          </button>
        </div>

        <div className=" relative hidden md:flex" >
          <Image
            src="/assets/images/Aristabg.jpg"
            alt="CTA Image"
            width={360}
            height={200}
            className="rounded-lg h-[400px] ml-6"
          />
        </div>
      </div>
    </section>
  );
};


