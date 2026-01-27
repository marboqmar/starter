import './Button.css';
import { classNames } from '../../../utils/helpers';

/**
 * Button component that can render as a button or link
 *
 * Component props:
 * @param {string} [className] - Additional CSS classes.
 * @param {'primary' | 'secondary' | 'tertiary'} [buttonStyle] - Button styling. Defaults to 'primary' for
 * <button>.
 * @param {'sm' | 'lg'} [paddingSize] - Padding variant. Defaults to 'sm' for <button>.
 * @param {'sm' | 'lg'} [borderRadius] - Border radius. Defaults to 'sm' for <button>.
 * @param {ElementType} [component="button"] - The element to render (e.g., 'button', 'a', or Link).
 * @param {boolean} [buttonAppearance] - Applies the 'button-appearance' styling class.
 * @param {'button' | 'submit' | 'reset'} [type="button"] - HTML type attribute (buttons only).
 * @param {string} [to] - Target URL if component is Link.
 * @param {string} [role] - ARIA role.
 * @param {boolean} [disabled] - Disables the button and adds disabled styling.
 * @param {boolean} [hasIcon] - Adds class to style a button containing text and an icon.
 * @param {boolean} [isIconOnly] - Adds class to style a button containing only an icon.
 * @param {string} [ariaLabel] - Required if isIconOnly. Provides the accessible name.
 * @param {node} children - Button content.
 * @param {object} [rest] - Additional props passed.
 *
 * @example
 * // Button with secondary color and large padding
 * <Button buttonStyle="secondary" paddingSize="lg">Text</Button>
 *
 * @example
 * // Link that looks like a button
 * <Button component={Link} to="/about" buttonAppearance buttonStyle="primary">About</Button>
 *
 * @example
 * // Standard text link (not a button)
 * <Button component={Link} to="/contact">Contact</Button>
 *
 * @example
 * // Button with icon and text
 * <Button className="button-showcase__button" hasIcon>
 *   <span>Text and icon</span>
 *   <Icon isDecorative name="icon-calendar" />
 * </Button>
 *
 * @example
 * // Icon only button
 * <Button isIconOnly ariaLabel="Open Calendar">
 *   <Icon isDecorative name="icon-calendar" />
 * </Button>
 */

export const Button = ({
  className = '',
  buttonStyle,
  paddingSize,
  borderRadius,
  component = 'button',
  buttonAppearance,
  type,
  to,
  role,
  disabled,
  hasIcon,
  isIconOnly,
  ariaLabel,
  children,
  ...rest
}) => {
  const Component = component;
  const isButtonComponent = Component === 'button';

  // Apply styling default only for buttons (not links).
  const finalStyling = isButtonComponent ? buttonStyle || 'primary' : buttonStyle;

  // Apply link styling.
  const hasButtonAppearance = !isButtonComponent && buttonAppearance;
  const notButtonAppearance = !isButtonComponent && !hasButtonAppearance;

  // Button-specific props.
  const buttonProps = isButtonComponent
    ? {
        type: type || 'button',
        disabled: disabled,
      }
    : {};

  const classes = classNames('button', className, `button--${finalStyling}`, {
    [`button--padding-${paddingSize}`]: paddingSize,
    [`button--radius-${borderRadius}`]: borderRadius,
    'button-appearance': hasButtonAppearance,
    'button--link': notButtonAppearance,
    'button--disabled': disabled,
    'button--icon': hasIcon,
    'button--icon-only': isIconOnly,
  });

  return (
    <Component
      className={classes}
      role={role}
      to={to}
      aria-label={ariaLabel}
      {...buttonProps}
      {...rest}
    >
      {children}
    </Component>
  );
};
