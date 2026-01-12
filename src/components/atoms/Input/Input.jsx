import "./Input.css";
import { classNames } from "../../../utils/helpers";
import { forwardRef } from "react";

/**
 * Input Component
 * Handles text-based types: text, email, password, tel, number, search, etc.
 * Uses forwardRef to allow the parent component to grab a reference to a DOM node inside a child 
 * component. 
 * 
 * Component props:
 * @param {string} [className] - Additional CSS classes.
 * @param {string} type - The input type.
 * @param {object} [rest] - Additional props passed.
 * 
 * @example
 * <Input disabled id="disabled-input" />
 * 
 * @example
 * <Input 
 *   type={"password"} 
 *   name="password" 
 *   autocomplete="current-password" 
 *   id="password-showcase-input" 
 * />
 */

export const Input = forwardRef(({
  className = "",
  type = "text",
  ...rest
}, ref) => {
  return (
    <input
      className={classNames("input", className)}
      type={type}
      ref={ref}
      {...rest}
    />
  )
});

Input.displayName = "Input";
