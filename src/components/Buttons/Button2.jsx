import React from "react";

const Button2 = ({ children, className, href, onClick }) => {
  const classes = `button text-xl rounded-md bg-white text-black px-4 py-2 
  active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#9370DB,-0.5rem_-0.5rem_#00BCD4] transition
  ${className || ""}`;

  const renderButton = () => <button className={classes}>{children}</button>;

  const renderLink = () => (
    <a href={href} className={classes}>
      {children}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button2;
