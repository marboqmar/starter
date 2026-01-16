import './Checkbox.css';
import { classNames } from '../../../utils/helpers';
import { forwardRef } from 'react';
import { Icon } from '../Icon/Icon';
import { Label } from '../Label/Label';
import { useId } from 'react';
import { HelperText } from '../HelperText/HelperText';

/**
 * Checkbox component
 * Uses forwardRef to allow the parent component to grab a reference to a DOM node inside a child
 * component.
 *
 * Component props:
 * @param {string} [className] - Additional CSS classes.
 * @param {string} [label] - The content of the label. Needed to avoid accessibility issues.
 * @param {string} [id=randomId] - The ID to relate label, input, and helper text. If no ID is
 * provided, it defaults to a randomly generated ID.
 * @param {string} [helperText] - Informational text below the input.
 * @param {string} [errorHelperText] - Error message text; turns input border red.
 * @param {boolean} [required] - Adds '*' to the label to indicate this field is required..
 * @param {object} [rest] - Additional props passed.
 *
 * @example
 * <Checkbox label="Checkbox" />
 *
 * @example
 * // Disabled checkbox
 * <Checkbox disabled label="Disabled checkbox" />
 */

export const Checkbox = forwardRef(
  ({ className = '', label, id, helperText, errorHelperText, required, ...rest }, ref) => {
    // If the user does not provide an ID, generate a random one.
    const generatedId = useId();
    const inputId = id || generatedId;

    // If there is an error, display it rather than the helper text.
    const isInvalid = !!errorHelperText;
    const messageToShow = errorHelperText || helperText;

    const errorId = `${inputId}-errorHelperText`;

    const errorProps = isInvalid
      ? {
          'aria-invalid': true,
          'aria-describedby': errorId,
        }
      : {};

    return (
      <div className="checkbox-wrapper">
        <div className="checkbox-field">
          {/* Input */}
          <div className="checkbox-control">
            <input
              id={inputId}
              className={classNames('checkbox', className, {
                'checkbox--error': isInvalid,
              })}
              type="checkbox"
              ref={ref}
              {...errorProps}
              {...rest}
            />

            <Icon name="checkmark" className="checkbox-icon" aria-hidden="true" isDecorative />
          </div>

          <div className="checkbox-content">
            {/* Label */}
            {label && (
              <Label htmlFor={inputId} required={required}>
                {label}
              </Label>
            )}

            {/* Helper text */}
            {messageToShow && (
              <HelperText id={isInvalid ? errorId : undefined} isErrorText={isInvalid}>
                {messageToShow}
              </HelperText>
            )}
          </div>
        </div>
      </div>
    );
  },
);

Checkbox.displayName = 'Checkbox';
