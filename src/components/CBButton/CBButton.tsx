import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface CBButtonProps {
  title: string;
  buttonIcon?: IconProp;
}

const CBButton = ({ title, buttonIcon }: CBButtonProps) => {
  return (
    <button className="easy-in-out flex w-max items-center gap-2 rounded bg-red-600 py-2 px-8 text-lg text-white duration-300 hover:scale-105 hover:bg-red-400">
      <p className="m-0 font-medium">{title}</p>
      {buttonIcon ? <FontAwesomeIcon icon={buttonIcon} color="white" /> : null}
    </button>
  );
};

export default CBButton;
