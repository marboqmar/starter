import '../css/pages/showcase.css';
import { Breadcrumbs } from '../components/molecules/Breadcrumbs/Breadcrumbs';
import { Heading } from '../components/atoms/Heading/Heading';
import { AccordionShowcase } from '../showcases/organisms/AccordionShowcase/AccordionShowcase';
import { CardShowcase } from '../showcases/organisms/CardShowcase/CardShowcase';
import { CardGridShowcase } from '../showcases/organisms/CardGridShowcase/CardGridShowcase';
import { FooterShowcase } from '../showcases/organisms/FooterShowcase/FooterShowcase';
import { HeaderShowcase } from '../showcases/organisms/HeaderShowcase/HeaderShowcase';

const breadcrumbsInfo = [
  { label: 'Home', href: '/' },
  { label: 'Organisms', href: '/organisms' },
];

export const Organisms = () => {
  return (
    <div className="organisms-page container">
      <Breadcrumbs items={breadcrumbsInfo} />
      <Heading level={1} className="showcase-page__title">
        Organisms
      </Heading>
      <div className="organisms-page__showcases-wrapper showcase-wrapper">
        {/* Accordion */}
        <AccordionShowcase />

        {/* Card */}
        <CardShowcase />

        {/* Card grid */}
        <CardGridShowcase />

        {/* Footer */}
        <FooterShowcase />

        {/* Header */}
        <HeaderShowcase />
      </div>
    </div>
  );
};
