import '../css/pages/showcase.css';
import { Heading } from '../components/atoms/Heading/Heading';
import { CtaShowcase } from '../showcases/molecules/CtaShowcase/CtaShowcase';
import { FormShowcase } from '../showcases/molecules/FormShowcase/FormShowcase';
import { MediaObjectShowcase } from '../showcases/molecules/MediaObjectShowcase/MediaObjectShowcase';
import { SearchBoxShowcase } from '../showcases/molecules/SearchBoxShowcase/SearchBoxShowcase';

export const Molecules = () => {
  return (
    <div className="molecules-page container">
      <Heading level={1} className="margin-bottom-md">
        Molecules
      </Heading>
      <div className="molecules-page__showcases-wrapper showcase-wrapper">
        {/* CTA */}
        <CtaShowcase />

        {/* Form */}
        <FormShowcase />

        {/* Media object */}
        <MediaObjectShowcase />

        {/* Search box */}
        <SearchBoxShowcase />
      </div>
    </div>
  );
};
