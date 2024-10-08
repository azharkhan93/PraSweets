import { ChangeEventHandler, ReactNode } from "react";
type InputBoxProps = {
  label: string;
  placeHolder: string;
  type: string;
  name: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  value: string | number;
  errorBox: boolean;
  errorText: string | ReactNode;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export const InputBox: React.FC<InputBoxProps> = ({
  type,
  label,
  name,
  placeHolder,
  handleChange,
  value,
  errorBox,
  errorText,
  onKeyDown,
}) => {
  return (
    <div className="flex flex-col items-start justify-center gap-2 p-2 rounded-lg z-20 w-full">
      <div className="flex flex-row justify-between w-full">
        <div className="flex justify-center items-center h-[30px]">
          <p
            className="bg-transparent w-fit rounded-lg text-s md:text-base font-bold text-white tracking-wide px-3"
          >
            {label}
          </p>
        </div>
        <div className="flex justify-center items-center h-[30px]">
          {errorBox ? (
            <p className="text-red-500 w-fit h-[30px] text-xs">{errorText}</p>
          ) : null}
        </div>
      </div>
      <input
        type={type}
        name={name}
        id={name}
        onChange={handleChange}
        value={value}
        placeholder={placeHolder}
        onKeyDown={onKeyDown}
        className={`px-3 h-[30px] outline-none w-full bg-transparent placeholder-white text-white
         `
          
        }
      />
      <div className="border-b-[1px] border-white/90 w-full"></div>
    </div>
  );
};

<style>
  {`
    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 30px rgba(34, 197, 94, 0.5) inset; 
      box-shadow: 0 0 0 30px rgba(34, 197, 94, 0.5) inset; 
      transition: background-color 5000s ease-in-out 0s;
    }
  `}
</style>

