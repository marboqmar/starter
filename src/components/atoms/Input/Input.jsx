import './Input.css';
import { classNames } from '../../../utils/helpers';
import { forwardRef } from 'react';
import { useId } from 'react';
import { FieldWrapper } from '../../molecules/FieldWrapper/FieldWrapper';

/**
 * Input component
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
 *   helperText="This is a helper text"
 *   id="password-showcase-input"
 * />
 *
 * @example
 * // Disabled input
 * <Input disabled id="disabled-showcase-input" value="This input is disabled" />
 */

export const Input = forwardRef(
  (
    { className = '', type = 'text', label, id, helperText, errorHelperText, required, ...rest },
    ref,
  ) => {
    // If the user does not provide an ID, generate a random one.
    const generatedId = useId();
    const inputId = id || generatedId;

    const helperId = !!helperText ? `${inputId}-helperText` : null;
    const errorId = !!errorHelperText ? `${inputId}-errorHelperText` : null;

    const field = (
      <input
        id={inputId}
        className={classNames('input', className, { 'input--error': !!errorHelperText })}
        type={type}
        ref={ref}
        aria-describedby={errorId || helperId || undefined}
        aria-invalid={!!errorHelperText || undefined}
        {...rest}
      />
    );

    return (
      <FieldWrapper
        label={label}
        id={inputId}
        helperText={helperText}
        errorHelperText={errorHelperText}
        required={required}
        errorId={errorId}
        helperId={helperId}
        field={field}
      ></FieldWrapper>
    );
  },
);

Input.displayName = 'Input';
