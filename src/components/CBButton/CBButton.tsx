import React from "react";
import Button from "react-bootstrap/Button";

interface CBButtonProps {
  title: string;
}

const CBButton = ({title}: CBButtonProps) => {
  return (
    <button className="py-2 px-8 w-max bg-red-600 rounded text-white">
      <p className="m-0 font-medium">{title}</p>
    </button>
  );
};

export default CBButton;
