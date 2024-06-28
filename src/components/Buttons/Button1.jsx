import React from "react";

const Button1 = ({
  className,
  href,
  onClick,
  hovertext,
  hovertextClass,
  children,
  px,
  animation,
}) => {
  const classes = `button overflow-hidden relative p-2 bg-white text-black rounded-xl text-xl cursor-pointer relative z-10 group
     ${px || "px-4"} ${className || ""}`;

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      {children}
      <span
        className={`${
          !animation ||
          "absolute w-36 h-32 -top-8 -left-2 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"
        }`}
      ></span>
      <span
        className={`${
          !animation ||
          "absolute w-36 h-32 -top-8 -left-2 bg-sky-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"
        }`}
      ></span>
      <span
        className={`${
          !animation ||
          "absolute w-36 h-32 -top-8 -left-2 bg-sky-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"
        }`}
      ></span>
      <span
        className={`${
          !animation ||
          "group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
        } ${hovertextClass || ""}`}
      >
        {hovertext}
      </span>
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      {children}
      <span
        className={`${
          !animation ||
          "absolute w-36 h-32 -top-8 -left-2 bg-purple-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"
        }`}
      ></span>
      <span
        className={`${
          !animation ||
          "absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"
        }`}
      ></span>
      <span
        className={`${
          !animation ||
          "absolute w-36 h-32 -top-8 -left-2 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"
        }`}
      ></span>
      <span
        className={`${
          !animation ||
          "group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
        } ${hovertextClass || ""}`}
      >
        {hovertext}
      </span>
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button1;
