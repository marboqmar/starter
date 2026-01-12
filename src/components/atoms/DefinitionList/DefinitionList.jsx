import './DefinitionList.css';
import { classNames } from '../../../utils/helpers';

/**
 * Definition list component
 *
 * Component props:
 * @param {string} [className] - Additional CSS classes.
 * @param {Object[]} items - Content of the definition list.
 * @param {string|number} items[].id - Unique identifier for React key.
 * @param {string} items[].term - The term to be described (dt).
 * @param {string} items[].description - The description of the term (dd).
 * @param {object} [rest] - Additional props passed.
 *
 * @example
 * const descriptionGroup = [
 *   { id: 1, term: 'Colour', description: 'blue' },
 *   { id: 2, term: 'Material', description: 'cotton' },
 * ]
 *
 * <DefinitionList items={descriptionGroup} />
 */

export const DefinitionList = ({ items = [], className = '', ...rest }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <dl className={classNames('definition-list', className)} {...rest}>
      {items.map(item => (
        <div key={item.id} className="definition-list__group">
          <dt className="definition-list__term">{item.term}</dt>
          <dd className="definition-list__description">{item.description}</dd>
        </div>
      ))}
    </dl>
  );
};
