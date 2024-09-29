type BoxProps = {
  heading: string;
  para: string;
};

export const Box: React.FC<BoxProps> = ({ heading, para }) => {
  return (
    <div className="w-[320px] h-auto md:w-[600px] md:h-[250px] bg-primaryColor rounded-lg text-white flex items-center gap-2 text-center px-5 py-5">
      <div className="flex flex-col justify-start items-center h-[70%]">
        <h1 className="text-[26px] md:text-[32px] font-bold">{heading}</h1>
        <h1 className="text-[15px] md:text-[20px]">{para}</h1>
      </div>
    </div>
  );
};
