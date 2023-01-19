import { FC } from "react";
export const Button: FC = () => {
  return (
    <button className="bg-gray-200 px-2 py-1 rounded border border-black active:text-sm active:shadow-inner shadow-black">
      Boop!
    </button>
  );
};
