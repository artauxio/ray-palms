import React, { ReactNode } from "react";

type Props = {
    children: ReactNode;
    className?: string;
};

const Container = ({ children, className }: Props) => {
  return (
    <div
      className={`w-full max-w-[1280px] px-5 md:px-10 mx-auto ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
