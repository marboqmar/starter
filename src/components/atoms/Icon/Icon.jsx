import "./Icon.css";
import { classNames } from "../../../utils/helpers";

/**
 * Icon component
 * 
 * Component props:
 * @param {string} [className] - Additional CSS classes.
 * @param {string} [viewBox="0 0 24 24"] - Position and dimension of the icon.
 * @param {boolean} [isDecorative=false] - 
 * false (default): adds the attributes role img and aria-label.
 * true: adds the attributes aria-hidden true and tabindex -1.
 * @param {string} [ariaLabel] - Required if isDecorative is false. Provides the accessible name.
 * @param {ReactNode} [children] - Icon content.
 * @param {object} [rest] - Supports all standard HTML <svg> attributes.
 *
 * @example
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