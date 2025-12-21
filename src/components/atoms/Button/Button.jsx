import "./Button.css";
import { classNames } from "../../../utils/helpers";

/**
 * Button component 
 * Customizable button that can render as a button or link.
 * 
 * Defaults are automatically applied for buttons (not links):
 * - colour: "primary"
 * - paddingSize: "small"
 * - borderRadius: "small"
 * 
 * Component props:
 * className: additional CSS classes to apply (string)
 * colour: colour variant (string). Options: 
 *  - "primary" (default for buttons)
 *  - "secondary"
 * paddingSize: padding size variant (string). Options: 
 *  - "small" (default for buttons)
 *  - "large"
 * borderRadius: border radius variant (string). Options: 
 *  - "small" (default for buttons)
 *  - "large"
 * component: HTML element or React component to render (string). Options:
 *  - "button" (default)
 *  - "Link"
 * isLink: adds "button--link" class (boolean)
 * type: button type (string). Only applies to button elements. Options: 
 *  - "button" (default for buttons)
 *  - "submit"
 *  - "reset"
 * to: route path for Link component (string)
 * role: ARIA role attribute (string)
 * disabled: whether the button is disabled (boolean)
 * children - Button content (ReactNode)
 * rest: additional props to pass to the underlying component (object)
 * 
 * Examples:
 * Basic button with defaults:
 * <Button>Button text</Button>
 * 
 * Button with secondary colour
 * <Button colour="secondary">Submit</Button>
 * 
 * Link
 * <Button component={Link} isLink to="/about">About</Button>
 * 
 * Button with extra classes and attributes:
 * <Button type="button" className="extra-class" aria-label="Close"><svg>...</svg></Button>
 */

export const Button = ({
  className = "",
  colour,
  paddingSize,
  borderRadius,
  component = "button",
  isLink,
  type,
  to,
  role,
  disabled,
  children,
  ...rest
}) => {
  const Component = component;

  const isButtonComponent = Component === "button";
  
  // Apply defaults only for buttons (not links)
  const finalColour = isButtonComponent ? (colour || "primary") : colour;
  const finalPaddingSize = isButtonComponent ? (paddingSize || "small") : paddingSize;
  const finalBorderRadius = isButtonComponent ? (borderRadius || "small") : borderRadius;

  // Button-specific props
  const buttonProps = isButtonComponent 
    ? { 
        type: "button",
        disabled: disabled,
      } 
    : {};

  const classes = classNames(
    "button",
    className,
    {
      [`button--${finalColour}`]: finalColour,
      [`button__padding-size--${finalPaddingSize}`]: finalPaddingSize,
      [`button__border-radius--${finalBorderRadius}`]: finalBorderRadius,
      "button--link": isLink,
      "button--disabled": disabled,
    }
  );

  return (
    <Component
      className={classes}
      role={role}
      to={to}
      {...buttonProps}
      type={type}
      {...rest}
    >
      {children}
    </Component>
  );
};