type PointBoxProps = {
  heading: string;
  para: string;
};

export const PointBox: React.FC<PointBoxProps> = ({ heading, para }) => {
  return (
    <div className="w-full flex flex-col justify-start items-center gap-5 text-secondaryColor text-center px-7">
      <h1 className="text-[26px] md:text-[32px] font-bold">{heading}</h1>
      <h1 className="text-[15px] md:text-[22px]">{para}</h1>
    </div>
  );
};
