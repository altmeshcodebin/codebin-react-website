import React from "react";

interface SectionHeadingProps {
  title: string;
}

const SectionHeading = ({ title }: SectionHeadingProps) => {
  return <h2 className="my-8 text-4xl font-bold capitalize">{title}</h2>;
};

export default SectionHeading;
