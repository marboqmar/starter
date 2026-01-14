import './HelperText.css';
import { classNames } from '../../../utils/helpers';
import { Icon } from '../../../components/atoms/Icon/Icon';

/**
 * HelperText component
 *
 * Component props:
 * @param {string} [className] - Additional CSS classes.
 * @param {boolean} isErrorText - If the helper text is an error message.
 * @param {node} children - Helper text content.
 * @param {object} [rest] - Additional props passed.
 *
 * @example
 * <HelperText>This is a helper text</HelperText>
 *
 * @example
 * // Error text
 * <HelperText isErrorText>This is an error message</HelperText>
 */

export const HelperText = ({ className = '', isErrorText, id, children, ...rest }) => {
  return (
    <div className="helper-text-wrapper">
      {isErrorText && (
        <div className="helper-text--error-icon-wrapper">
          <Icon className="helper-text--error-icon" name="error" isDecorative />
        </div>
      )}

      <span
        className={classNames('helper-text', { 'helper-text--error': isErrorText }, className)}
        id={id}
        {...rest}
      >
        {children}
      </span>
    </div>
  );
};
