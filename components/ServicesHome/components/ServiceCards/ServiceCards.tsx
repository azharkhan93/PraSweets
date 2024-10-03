import React from "react";
import Image from "next/image";

type ServicesCardProps = {
  name: string;
  imageUrl: string;
};

export const ServicesCards: React.FC<ServicesCardProps> = ({
  name,
  imageUrl,
}) => {
  return (
    <div className="rounded-xl hover:shadow-sm shadow-md border border-l-4 hover:border-secondaryColor relative  border-secondaryColor pb-1 transition duration-200 hover:scale-105 py-2 ">
      <div className="p-2">
        <div className="relative md:w-52 h-40 rounded-tr-full ">
          <Image
            className="rounded-lg "
            src={imageUrl}
            alt={name}
            fill
          />
        </div>
      </div>
      <div className="p-1 bg-black w-44 rounded-tr-full rounded-br-full mt-2 mb-3 px-2">
        <p className="text-white text-sm font-medium tracking-wide">{name}</p>
      </div>
    </div>
  );
};
