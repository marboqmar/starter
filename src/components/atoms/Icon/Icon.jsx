import "./Icon.css";
import { classNames } from "../../../utils/helpers";

/**
 * Icon component
 * Renders an SVG.
 * 
 * Component props:
 * viewBox: position and dimension of the icon. Defaults to "0 0 24 24"
 * isDecorative: adds aria-hidden true and tabindex -1 if true, and role img and aria-label if false (boolean)
 * ariaLabel: icon's accessible name (string). It is only added if isDecorative is false
 * rest: additional props to pass to the underlying component (object)
 * 
 * Example:
 * <Icon isDecorative>
 *   <path d="M9..." />
 * </Icon>
 */

export const Icon = ({ 
  className = "",
  viewBox = "0 0 24 24",
  isDecorative = false,
  ariaLabel,
  children,
  ...rest
}) => {
  const accessibilityProps = isDecorative
    ? {
      "aria-hidden": "true",
      tabIndex: -1,
      focusable: "false",
      }
    : {
      role: "img",
      "aria-label": ariaLabel,
    } ;

  return (
    <svg 
      viewBox={viewBox}
      className={classNames("icon", className)}
      {...accessibilityProps}
      {...rest}
    >
      {children}
    </svg>
  )
};