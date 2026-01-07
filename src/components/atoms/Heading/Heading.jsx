import "./Heading.css";
import { classNames } from "../../../utils/helpers";

/**
 * Heading component
 * Renders a semantic heading (h1-h6).
 * 
 * Component props:
 * level: the heading level (number). Minimum 1 and maximum 6, defaults to 2
 * children: the content of the heading (ReactNode)
 * className: additional CSS classes to apply (string)
 * 
 * Examples:
 * <Heading level={1}>Main title</Heading>
 * <Heading>This is a heading level 2</Heading>
 */

export const Heading = ({ level, children, className = "" }) => {
  const convertLevelToNumber = Number(level);
  const headingLevel = (convertLevelToNumber >= 1 && convertLevelToNumber <= 6) ? convertLevelToNumber : 2;
  const HeadingComponent = `h${headingLevel}`;

  return (
    <HeadingComponent className={classNames(`heading-${headingLevel}`, className)}>
      {children}
    </HeadingComponent>
  );
};