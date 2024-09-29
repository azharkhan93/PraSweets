"use client";
import { useState } from "react";
import OffCanvasMenu from "./OffCanvasMenu";
import { CgMenuLeft } from "react-icons/cg";
import { theme } from "@/theme";


export default function MobileMenu() {
  const [visible, setVisible] = useState(false);
  const handleClick = (newState: boolean) => {
    setVisible(newState);
  };

  return (
    <div className="">
      <div className="cursor-pointer">
        <CgMenuLeft
          onClick={() => handleClick(true)}
          size={40}
          color={theme.colors.secondaryColor}
        />
      </div>
      <OffCanvasMenu
        hideMenu={() => handleClick(false)}
        cssProperty={{
          left: visible ? 0 : "-100%",
          transition: "0.4s ease-in-out ",
        }}
        cssPropertyParent={{
          left: visible ? 0 : "-100%",
          transition: "0.3s ease-in-out",
        }}
      />
    </div>
  );
}
