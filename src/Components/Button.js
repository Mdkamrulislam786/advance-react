import React, { forwardRef } from "react";

const Button = forwardRef(({ type, text, children, ...rest }, ref) => {
  return (
    <button type={type} ref={ref} {...rest}>
      {children}
    </button>
  );
});

export default Button;
