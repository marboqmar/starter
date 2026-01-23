import '../css/pages/showcase.css';
import { Heading } from '../components/atoms/Heading/Heading';
import { CtaShowcase } from '../showcases/molecules/CtaShowcase/CtaShowcase';

export const Molecules = () => {
  return (
    <div className="molecules-page container">
      <Heading level={1} className="margin-bottom-md">
        Molecules
      </Heading>
      <div className="molecules-page__showcases-wrapper showcase-wrapper">
        {/* CTA */}
        <CtaShowcase />
      </div>
    </div>
  );
};
