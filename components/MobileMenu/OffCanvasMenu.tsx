import { TfiClose } from "react-icons/tfi";
import Link from "next/link";
import { theme } from "@/theme";


interface OffCanvasMenuProps {
  hideMenu: () => void; 
  cssProperty: React.CSSProperties; 
  cssPropertyParent: React.CSSProperties; 
}

export default function OffCanvasMenu({
  hideMenu,
  cssProperty,
  cssPropertyParent,
}: OffCanvasMenuProps) {
  return (
    <div
      style={cssPropertyParent}
      className="w-[100%] h-[100vh] bg-black/60 fixed top-0 z-50"
    >
      
      <div
        className="w-full md:w-[40%] h-[100vh] bg-secondaryColor fixed top-0"
        style={cssProperty}
      >
        <div className={`flex justify-end px-[10%] py-[10%] items-center`}>
          <TfiClose
            onClick={hideMenu}
            color={theme.colors.primaryColor}
            className="hover:animate-spin cursor-pointer w-[30px] h-[30px]"
          />
        </div>
        <div className=" text-white w-full py-20 flex flex-col justify-start items-start gap-10 md:gap-10 text-xl md:text-3xl px-4">
          
          <Link href="/" className="hover:scale-[105%] hover:shadow-xl">
            Home
          </Link>
          <Link href="#about" className="hover:scale-[105%] hover:shadow-xl">
            About
          </Link>
          <Link href="#contact" className="hover:scale-[105%] hover:shadow-xl">
            Contact
          </Link>
          <Link href="#testimonials" className="hover:scale-[105%] hover:shadow-xl">
            Testimonials
          </Link>
        </div>
        
     
      </div>
    </div>
  );
}

