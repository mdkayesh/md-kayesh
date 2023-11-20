"use client";

import Link from "next/link";
import React, { ReactNode } from "react";

type buttonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
} & (linkType | btnType);

type linkType = {
  tag: "a" | "link";
  href: string;
  target?: "_blank" | "_parent" | "_self" | "_top";
};

type btnType = {
  tag: "button";
  type: "submit" | "button" | "reset";
};

const Button = (props: buttonProps) => {
  const { children, className, onClick, tag } = props;

  if (tag === "button") {
    const { type } = props;

    return (
      <button className={`btn ${className}`} type={type} onClick={onClick}>
        {children}
      </button>
    );
  } else if (tag === "a") {
    const { href, target } = props;
    return (
      <a
        href={href}
        target={target}
        onClick={onClick}
        className={`btn ${className}`}
      >
        {children}
      </a>
    );
  } else {
    const { href } = props;
    <Link href={href} onClick={onClick} className={`btn ${className}`}>
      {children}
    </Link>;
  }
};

export default Button;
