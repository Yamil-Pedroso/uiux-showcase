import React, { forwardRef } from "react";
import { Btn } from "./styles";
import { motion } from "framer-motion";

interface IButton extends React.ComponentPropsWithoutRef<typeof motion.button> {
  title?: string;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const Button = forwardRef<HTMLButtonElement, IButton>(
  ({ className, children, style, ...props }, ref) => {
    return (
      <Btn
        className={className}
        style={style}
        ref={ref} // Ensure ref is passed correctly
        {...props}
      >
        {children}
      </Btn>
    );
  }
);

Button.displayName = "Button"; // Set displayName for better debugging

export default Button;
