import "./Heading.css";
import { classNames } from "../../../utils/helpers";

/**
 * Heading component
 * Renders a semantic heading (h1-h6).
 * 
 * Component props:
 * level: the heading level (number). The default is 2
 * children: the content of the heading (ReactNode)
 * className: additional CSS classes to apply (string)
 * 
 * Example:
 * <Heading level={1}>Main title</Heading>
 * <Heading>This is a heading level 2</Heading>
 */

export const Heading = ({ level, children, className = "" }) => {
  const headingLevel =  level ? level : 2; 
  const HeadingComponent = `h${headingLevel}`;
  return (
    <HeadingComponent className={classNames(`heading-${headingLevel}`, className)}>
      {children}
    </HeadingComponent>
  );
};