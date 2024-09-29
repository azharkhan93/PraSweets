
import { CustomLinkButton } from "..";
import MobileMenu from "../MobileMenu/mobileMenu";
import Link from "next/link";

export const HeroSection : React.FC = () => {
  return (
    <div
      className="w-full h-[100vh] md:h-[100vh] flex flex-col justify-center items-center gap-10 relative overflow-hidden"
      
    >
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/images/bg2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/70 bg-opacity-50 z-10" />

      <div className="absolute top-0 left-0 w-full h-[10%] flex justify-center items-center px-[5%] z-30">
        <div className="hidden md:flex justify-center items-center gap-20 text-primaryColor text-[20px] w-full">
          <Link className="hover:scale-[110%]" href={"/"}>
            Home
          </Link>
          <Link className="hover:scale-[110%]" href={"/blog"}>
            About
          </Link>
          <Link className="hover:scale-[110%]" href={"/"}>
            Contact
          </Link>
        </div>
        <div className="w-full md:hidden flex flex-row justify-start items-center">
          <MobileMenu />
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center z-20 py-11">
        <div className="w-full flex flex-col justify-end items-center gap-10 reveal reveal reveal-from-top border-red-950">
          <h1 className=" leading-relaxed text-[27px] md:text-[35px] text-secondaryColor text-center w-full md:w-[900px] reveal reveal-from-bottom ">
            Welcome To The World Of Troubles Here we Will Try Welcome To
          </h1>
          <p className=" text-[16px] md:text-[18px] text-secondaryColor text-center w-full md:w-[610px] leading-relaxed">
            Welcome To The World Of Troubles Here we Will Try Welcome To Welcome
            To The World Of Troubles Here we Will Try Welcome To Welcome To The
            World Of Troubles Here we Will Try
          </p>
          <div className="w-full flex justify-center">
            <CustomLinkButton
              label="Enquire Now"
              href="form-section"
              classes="bg-primaryColor"
              border="noBorder"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
