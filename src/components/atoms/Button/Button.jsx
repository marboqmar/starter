import "./Button.css";
import { classNames } from "../../../utils/helpers";

/**
 * Button component that can render as a button or link
 * 
 * Component props:
 * @param {string} [className] - Additional CSS classes.
 * @param {'primary' | 'secondary'} [colour] - Button styling. Defaults to 'primary' for <button>.
 * @param {'small' | 'large'} [paddingSize] - Padding variant. Defaults to 'small' for <button>.
 * @param {'small' | 'large'} [borderRadius] - Border radius. Defaults to 'small' for <button>.
 * @param {ElementType} [component="button"] - The element to render (e.g., 'button', 'a', or Link).
 * @param {boolean} [isLink=false] - Applies the 'button--link' styling class.
 * @param {'button' | 'submit' | 'reset'} [type="button"] - HTML type attribute (buttons only).
 * @param {string} [to] - Target URL if component is Link.
 * @param {string} [role] - ARIA role.
 * @param {boolean} [disabled] - Disables the button and adds disabled styling.
 * @param {node} [children] - Button content.
 * @param {object} [rest] - Additional props passed.
 *
 * @example
 * // Button with secondary colour and large padding
 * <Button colour="secondary" paddingSize="large">Text</Button>
 * 
 * @example
 * // Link
 * <Button component={Link} isLink to="/about">About</Button>
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