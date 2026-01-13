import './Input.css';
import { classNames } from '../../../utils/helpers';
import { forwardRef } from 'react';
import { Label } from '../Label/Label';
import { useId } from 'react';
import { HelperText } from '../HelperText/HelperText';

/**
 * Input Component
 * Handles text-based types: text, email, password, tel, number, search, etc.
 * Uses forwardRef to allow the parent component to grab a reference to a DOM node inside a child
 * component.
 *
 * Component props:
 * @param {string} [className] - Additional CSS classes.
 * @param {string} [type="text"] - The input type.
 * @param {string} [label] - The content of the label. Needed to avoid accessibility issues.
 * @param {string} [id=randomId] - The ID to relate label, input, and helper text. If no ID is
 * provided, it defaults to a randomly generated ID.
 * @param {string} [helperText] - Informational text below the input.
 * @param {string} [errorHelperText] - Error message text; turns input border red.
 * @param {boolean} [required] - Adds '*' to the label to indicate this field is required..
 * @param {object} [rest] - Additional props passed.
 *
 * @example
 * <Input
 *   label="Password"
 *   required
 *   type="password"
 *   name="password"
 *   autoComplete="current-password"
 *   id="password-showcase-input"
 * />
 *
 * @example
 * // Helper text
 * <Input
 *   label="With helper text"
 *   id="helper-text-showcase-input"
 *   helperText="This is a helper text"
 * />
 *
 * @example
 * // Disabled input
 * <Input disabled id="disabled-showcase-input" value="This input is disabled" />
 *
 */

export const Input = forwardRef(
  (
    { className = '', type = 'text', label, id, helperText, errorHelperText, required, ...rest },
    ref,
  ) => {
    // If the user does not provide an ID, generate a random one.
    const generatedId = useId();
    const inputId = id || generatedId;

    // If there is an error, display it rather than the helper text.
    const isInvalid = !!errorHelperText;
    const messageToShow = errorHelperText || helperText;

    const errorId = `${inputId}-errorHelperText`;

    const errorProps = !!errorHelperText
      ? {
          'aria-invalid': true,
          'aria-describedby': errorId,
        }
      : {};

    return (
      <div className="input-group">
        {/* Label */}
        {label && (
          <Label htmlFor={inputId} required={required}>
            {label}
          </Label>
        )}

        {/* Input */}
        <input
          id={inputId}
          className={classNames('input', className, { 'input--error': !!errorHelperText })}
          type={type}
          ref={ref}
          {...errorProps}
          {...rest}
        />

        {/* Helper text */}
        {messageToShow && (
          <HelperText id={isInvalid ? errorId : undefined} isErrorText={isInvalid}>
            {messageToShow}
          </HelperText>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';
