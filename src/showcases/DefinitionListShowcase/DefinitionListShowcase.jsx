import { DefinitionList } from "../../components/atoms/DefinitionList/DefinitionList";
import { Heading } from "../../components/atoms/Heading/Heading";

const descriptions = [
  { id: 1, term: 'Colour', description: 'blue' },
  { id: 2, term: 'Material', description: 'cotton' },
  { id: 3, term: 'Size', description: 'small' }
]

export const DefinitionListShowcase = () => {
  return (
    <div className="component-section">
      <Heading>Definition list</Heading>
      <DefinitionList items={descriptions} />
    </div>
  )
}