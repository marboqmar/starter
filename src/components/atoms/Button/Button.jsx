import "./Button.css";
import { classNames } from "../../../utils/helpers";

export const Button = ({
  className = "",
  color,
  withoutHover,
  withoutBorderRadius,
  paddingSize,
  borderType,
  component = "button", // Default component is "button"
  isLink,
  role,
  disabled,
  children,
  ...rest
}) => {

  const classes = classNames(
    "btn",
    "font",
    className,
    {
      [`btn--color-${color}`]: color,
      "btn--withoutHover": withoutHover,
      "btn--withoutBorderRadius": withoutBorderRadius,
      [`btn--paddingSize-${paddingSize}`]: paddingSize,
      [`btn--border-${borderType}`]: borderType,
      "btn--link": isLink,
      "btn--disabled": disabled,
    }
  );

  const Component = component;

  // Button-specific props
  const buttonProps = component === "button" 
    ? { 
        type: "button",
        disabled: disabled,
      } 
    : {}; // For non-button elements (like 'a' or 'div'), use an empty object

  return (
    <Component
      className={classes}
      role={role}
      {...buttonProps}
      {...rest}
    >
      {children}
    </Component>
  );
};