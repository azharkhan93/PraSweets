import { CSSProperties } from "react";

type FullWidthBarProps = {
  children?: React.ReactNode;
  style?: CSSProperties;
};
export const FullWidthBar: React.FC<FullWidthBarProps> = ({
  children,
  style,
}) => {
  return (
    <div
      className="w-full bg-primaryColor p-4 flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10 relative z-10"
      style={style}
    >
      {children}
    </div>
  );
};
