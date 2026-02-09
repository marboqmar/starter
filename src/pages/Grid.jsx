import { GridShowcase } from '../showcases/grid/GridShowcase/GridShowcase';
import { Heading } from '../components/atoms/Heading/Heading';

export const Grid = () => {
  return (
    <div className="grid-page showcase-page container">
      <Heading level={1} className="showcase-page__title">
        Grid
      </Heading>
      <GridShowcase />
    </div>
  );
};
