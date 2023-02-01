import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface CBButtonProps {
  title: string;
  buttonIcon?: IconProp;
  href?: string;
}

const CBButton = ({ title, buttonIcon, href }: CBButtonProps) => {
  return (
    <a
      href={href}
      className="easy-in-out flex w-max items-center gap-2 rounded bg-red-600 py-2 px-8 text-lg text-white no-underline duration-300 hover:scale-105 hover:bg-red-400"
    >
      <p className="m-0 font-medium">{title}</p>
      {buttonIcon ? <FontAwesomeIcon icon={buttonIcon} color="white" /> : null}
    </a>
  );
};

export default CBButton;
