import Link from "next/link";

type CustomLinkButtonProps = {
  classes?: string;
  label: string;
  href: string;
  border?: string;
};

export const CustomLinkButton: React.FC<CustomLinkButtonProps> = ({
  classes,
  label,
  href,
  border,
}) => {
  let _border;
  switch (border) {
    case "noBorder":
      _border = "";
      break;
    default:
      _border = "border-[2px] border-white rounded-lg";
      break;
  }

  return (
    <Link
      href={`#${href}`}
      className={`${classes} ${_border} text-white tracking-wide text-lg w-fit px-4 py-2 cursor-pointer hover:text-primaryColor hover:bg-secondaryColor hover:border-none hover:scale-125 transition-transform transform ease-in-out`}
    >
      {label}
    </Link>
  );
};
