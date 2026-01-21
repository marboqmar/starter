import './Paragraph.css';
import { classNames } from '../../../utils/helpers';

/**
 * Paragraph component
 *
 * Component props:
 * @param {string} [className] - Additional CSS classes.
 * @param {'small | 'large'} [fontSize] - Modifies font size from "base" to the stated value.
 * @param {'semibold' | 'bold'} [fontWeight] - Modifies the font weight from "regular" to the
 * stated value.
 * @param {boolean} isInvertedColour - Adds class to invert text colour.
 * @param {node} children - Paragraph content.
 * @param {object} [rest] - Additional props passed.
 */

export const Paragraph = ({
  className = '',
  fontSize,
  fontWeight,
  isInvertedColour,
  children,
  ...rest
}) => {
  const classes = classNames('paragraph', className, {
    [`paragraph--font-size-${fontSize}`]: fontSize,
    [`paragraph--font-weight-${fontWeight}`]: fontWeight,
    'paragraph--colour-inverted': isInvertedColour,
  });

  return (
    <p className={classes} {...rest}>
      {children}
    </p>
  );
};
