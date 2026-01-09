import "./Icon.css";
import { classNames } from "../../../utils/helpers";

/**
 * Icon component
 * 
 * Component props:
 * @param {string} [className] - Additional CSS classes.
 * @param {string} [viewBox="0 0 24 24"] - Position and dimension of the icon.
 * @param {string} [href] - Path to an external SVG sprite (e.g., "/icons.svg#menu").
 * @param {boolean} [isDecorative=false] - 
 * false (default): adds the attributes role img and aria-label.
 * true: adds the attributes aria-hidden true and tabindex -1.
 * @param {string} [ariaLabel] - Required if isDecorative is false. Provides the accessible name.
 * @param {ReactNode} [children] - Icon content.
 * @param {object} [rest] - Additional props passed.
 *
 * @example
 * <Icon isDecorative>
 *   <path d="M9..." />
 * </Icon>
 */

export const Icon = ({ 
  className = "",
  viewBox = "0 0 24 24",
  href,
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

  console.log(href);

  const content = href ? <use href={href} xlinkHref={href} /> : children;

  return (
    <svg 
      viewBox={viewBox}
      className={classNames("icon", className)}
      {...accessibilityProps}
      {...rest}
    >
      {content}
    </svg>
  )
};
