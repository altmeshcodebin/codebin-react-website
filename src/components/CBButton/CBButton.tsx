import React from "react";

interface CBButtonProps {
  title: string;
}

const CBButton = ({title}: CBButtonProps) => {
  return (
    <button className="py-2 hover:bg-red-400 hover:scale-105 duration-300 easy-in-out px-8 w-max bg-red-600 rounded text-white">
      <p className="m-0 font-medium">{title}</p>
    </button>
  );
};

export default CBButton;
