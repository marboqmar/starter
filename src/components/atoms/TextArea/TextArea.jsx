import './TextArea.css';
import { classNames } from '../../../utils/helpers';
import { forwardRef } from 'react';
import { useId } from 'react';
import { FieldWrapper } from '../../molecules/FieldWrapper/FieldWrapper';

export const TextArea = forwardRef(
  ({ className = '', id, label, required, helperText, errorHelperText, ...rest }, ref) => {
    const generateId = useId();
    const textAreaId = id || generateId;

    const errorId = `${textAreaId}-errorHelperText`;

    const errorProps = !!errorHelperText
      ? {
          'aria-invalid': true,
          'aria-describedby': errorId,
        }
      : {};

    const field = (
      <textarea
        className={classNames('text-area', { 'text-area--error': errorHelperText }, className)}
        id={textAreaId}
        ref={ref}
        {...errorProps}
        {...rest}
      ></textarea>
    );

    return (
      <FieldWrapper
        label={label}
        id={textAreaId}
        helperText={helperText}
        errorHelperText={errorHelperText}
        required={required}
        errorId={errorId}
        field={field}
      ></FieldWrapper>
    );
  },
);

TextArea.displayName = 'TextArea';
