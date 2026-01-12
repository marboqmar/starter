import { DefinitionList } from '../../../components/atoms/DefinitionList/DefinitionList';
import { Heading } from '../../../components/atoms/Heading/Heading';

const descriptionGroup = [
  { id: 1, term: 'Colour', description: 'blue' },
  { id: 2, term: 'Material', description: 'cotton' },
  { id: 3, term: 'Size', description: 'small' },
];

export const DefinitionListShowcase = () => {
  return (
    <div className="atom-section">
      <Heading>Definition list</Heading>
      <DefinitionList items={descriptionGroup} />
    </div>
  );
};
