import { CustomLinkButton } from "..";
import Image from "next/image";

export const HeroSection: React.FC = () => {
  return (
    <div className="w-full h-[100vh] md:h-[100vh] flex flex-col justify-center items-center gap-10 relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/images/diwali.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 bg-opacity-50 z-10" />

      <div className="absolute top-0 left-0 w-full flex justify-center items-center z-30 py-3 " >
        <div className="">
          <Image
            src="/assets/images/logo3.png"
            alt="Logo"
            width={280}
            height={200}
          />
        </div>
        {/* Commentd for future release purpose */}
        {/* <div className="hidden md:flex justify-center items-center md:h-[100px] gap-20 text-primaryColor text-[20px] w-full">
          <Link className="hover:scale-[110%]" href={"/"}>
            Home
          </Link>
          <Link className="hover:scale-[110%]" href={"#about"}>
            About
          </Link>
          <Link className="hover:scale-[110%]" href={"#contact"}>
            Contact
          </Link>
          {/* <Link className="hover:scale-[110%]" href={"#testimonials"}>
            Testimonials
          </Link>
        </div>
        <div className="w-full md:hidden flex flex-row justify-start items-center">
          <MobileMenu />
        </div> */}
      </div>

      <div className="w-full flex flex-col justify-center items-center z-20 py-10">
        <div className="w-full flex flex-col justify-end items-center gap-10 reveal reveal-from-top">
          <h1 className="text-heading md:text-heroheading leading-relaxed text-white md:text-center w-full md:w-[950px] reveal reveal-from-bottom px-3 text-center">
            Indulge in Sweet Delights Experience Flavor & Joy in Every Bite!
          </h1>
          <p className="text-paragraph text-white text-center md:text-center w-full md:w-[610px] px-3">
            Discover the finest selection of handmade sweets, crafted with love
            and care to tantalize your taste buds. Perfect for every occasion!
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
  );
};
