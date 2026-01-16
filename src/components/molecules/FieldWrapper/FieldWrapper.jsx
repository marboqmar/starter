import { Label } from '../../atoms/Label/Label';
import { HelperText } from '../../atoms/HelperText/HelperText';

export const FieldWrapper = ({
  label,
  id,
  helperText,
  errorHelperText,
  required,
  errorId,
  field,
}) => {
  // If there is an error, display it rather than the helper text.
  const isInvalid = !!errorHelperText;
  const messageToShow = errorHelperText || helperText;

  return (
    <div className="field-wrapper">
      {/* Label */}
      {label && (
        <Label htmlFor={id} required={required}>
          {label}
        </Label>
      )}

      {/* Field */}
      {field}

      {/* Helper text */}
      {messageToShow && (
        <HelperText id={isInvalid ? errorId : undefined} isErrorText={isInvalid}>
          {messageToShow}
        </HelperText>
      )}
    </div>
  );
};
