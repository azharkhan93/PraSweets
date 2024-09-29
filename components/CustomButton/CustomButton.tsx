type CustomButtonProps = {
  onClick?: () => void;
  classes?: string;
  label: string;
};

export const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  classes,
  label,
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg border-[2px] border-white ${classes}`}
    >
      {label}
    </button>
  );
};
