import "./DefinitionList.css"
import { classNames } from "../../../utils/helpers";

/**
 * Definition list component
 * Renders a semantic definition list (dl) with terms and descriptions.
 * 
 * Component props:
 * items: array of objects, each containing:
 *   - id: unique identifier for React key (string or number)
 *   - term: the term to be described (string)
 *   - description: the description of the term (string)
 * className: additional CSS classes to apply (string)
 * 
 * Example:
 * const descriptions = [
 *   { id: 1, term: 'Colour', description: 'Blue' },
 *   { id: 2, term: 'Material', description: 'Cotton' },
 *   { id: 3, term: 'Size', description: 'Small' }
 * ]
 * 
 * <DefinitionList items={descriptions} />
 */
export const DefinitionList = ({ items = [], className = '' }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <dl className={classNames("definition-list", className)}>
      {items.map((item) => (
        <div key={item.id} className="definition-list__group">
          <dt className="definition-list__term">{item.term}</dt>
          <dd className="definition-list__description">{item.description}</dd>
        </div>
      ))}
    </dl>
  );
}
