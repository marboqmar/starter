import './Button.css';
import { classNames } from '../../../utils/helpers';

/**
 * Button component that can render as a button or link
 *
 * Component props:
 * @param {string} [className] - Additional CSS classes.
 * @param {'primary' | 'secondary'} [buttonStyle] - Button styling. Defaults to 'primary' for
 * <button>.
 * @param {'small' | 'large'} [paddingSize] - Padding variant. Defaults to 'small' for <button>.
 * @param {'small' | 'large'} [borderRadius] - Border radius. Defaults to 'small' for <button>.
 * @param {ElementType} [component="button"] - The element to render (e.g., 'button', 'a', or Link).
 * @param {boolean} [buttonAppearance] - Applies the 'button-appearance' styling class.
 * @param {'button' | 'submit' | 'reset'} [type="button"] - HTML type attribute (buttons only).
 * @param {string} [to] - Target URL if component is Link.
 * @param {string} [role] - ARIA role.
 * @param {boolean} [disabled] - Disables the button and adds disabled styling.
 * @param {node} children - Button content.
 * @param {object} [rest] - Additional props passed.
 *
 * @example
 * // Button with secondary colour and large padding
 * <Button buttonStyle="secondary" paddingSize="large">Text</Button>
 *
 * @example
 * // Link that looks like a button
 * <Button component={Link} to="/about" buttonAppearance buttonStyle={'primary'}>About</Button>
 *
 * @example
 * // Standard text link (not a button)
 * <Button component={Link} to="/contact">Contact</Button>
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
        type: 'button',
        disabled: disabled,
      }
    : {};

  const classes = classNames('button', className, {
    [`button--${finalStyling}`]: finalStyling,
    [`button__padding-size--${paddingSize}`]: paddingSize,
    [`button__border-radius--${borderRadius}`]: borderRadius,
    'button-appearance': hasButtonAppearance,
    'button--link': notButtonAppearance,
    'button--disabled': disabled,
  });

  return (
    <Component
      className={classes}
      role={role}
      to={to}
      {...buttonProps}
      {...(type && { type })}
      {...rest}
    >
      {children}
    </Component>
  );
};
