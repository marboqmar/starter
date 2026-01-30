import '../css/pages/showcase.css';
import { Breadcrumbs } from '../components/molecules/Breadcrumbs/Breadcrumbs';
import { Heading } from '../components/atoms/Heading/Heading';

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
      <div className="organisms-page__showcases-wrapper showcase-wrapper"></div>
    </div>
  );
};
