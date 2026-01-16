import './Heading.css';
import { classNames } from '../../../utils/helpers';

/**
 * Heading component
 *
 * Component props:
 * @param {string} [className] - Additional CSS classes.
 * @param {1 | 2 | 3 | 4 | 5 | 6} [level=2] - Heading level. Values outside 1-6 fallback to 2.
 * @param {node} children - Heading content.
 * @param {object} [rest] - Additional props passed.
 *
 * @example
 * <Heading level={1}>Main title</Heading>
 */

export const Heading = ({ level = 2, children, className = '', ...rest }) => {
  const levelToNumber = Number(level);
  const headingLevel = levelToNumber >= 1 && levelToNumber <= 6 ? levelToNumber : 2;
  const HeadingComponent = `h${headingLevel}`;

  return (
    <HeadingComponent className={classNames(`heading--${headingLevel}`, className)} {...rest}>
      {children}
    </HeadingComponent>
  );
};
