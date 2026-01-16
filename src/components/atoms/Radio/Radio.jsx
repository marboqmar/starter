import './Radio.css';
import { classNames } from '../../../utils/helpers';
import { forwardRef } from 'react';
import { Icon } from '../Icon/Icon';
import { useId } from 'react';
import { SelectionControlWrapper } from '../../molecules/SelectionControlWrapper/SelectionControlWrapper';

/**
 * Radio component
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
 * @param {object} [rest] - Additional props passed.
 *
 * @example
 * <Radio name="radio-test" label="Radio" />
 *
 * @example
 * // Disabled radio
 * <Radio name="radio-test" disabled label="Disabled radio" />
 */

export const Radio = forwardRef(
  ({ className = '', label, id, helperText, errorHelperText, name, ...rest }, ref) => {
    // If the user does not provide an ID, generate a random one.
    const generatedId = useId();
    const radioId = id || generatedId;

    const isInvalid = !!errorHelperText;

    const errorId = `${radioId}-errorHelperText`;

    const errorProps = isInvalid
      ? {
          'aria-invalid': true,
          'aria-describedby': errorId,
        }
      : {};

    const selector = (
      <>
        <input
          id={radioId}
          className={classNames('radio', className, {
            'radio--error': isInvalid,
          })}
          type="radio"
          name={name}
          ref={ref}
          {...errorProps}
          {...rest}
        />
        <Icon name="radio-button" className="radio__icon" aria-hidden="true" isDecorative />
      </>
    );

    return (
      <SelectionControlWrapper
        label={label}
        id={radioId}
        helperText={helperText}
        errorHelperText={errorHelperText}
        selector={selector}
        errorId={errorId}
      ></SelectionControlWrapper>
    );
  },
);

Radio.displayName = 'Radio';
