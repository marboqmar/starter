import './TextShowcase.css';
import { Heading } from '../../../components/atoms/Heading/Heading';
import { Paragraph } from '../../../components/atoms/Paragraph/Paragraph';

export const TextShowcase = () => {
  return (
    <div className="atom-section">
      <Heading>Texts</Heading>
      <div className="stack gap-md">
        <Heading level={3}>Headings</Heading>
        <div className="heading-examples stack gap-sm">
          <Heading level={1}>The quick brown fox jumps over the lazy dog</Heading>
          <Heading>The quick brown fox jumps over the lazy dog</Heading>
          <Heading level={3}>The quick brown fox jumps over the lazy dog</Heading>
          <Heading level={4}>The quick brown fox jumps over the lazy dog</Heading>
          <Heading level={5}>The quick brown fox jumps over the lazy dog</Heading>
          <Heading level={6}>The quick brown fox jumps over the lazy dog</Heading>
        </div>
        <Heading level={3}>Paragraphs</Heading>
        <div className="stack gap-sm">
          <Heading level={4}>Regular</Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius sagittis
            fermentum. Mauris at augue diam. Ut vel rhoncus ante, ut egestas justo. Sed luctus
            luctus erat, in aliquet ipsum pretium vel. Proin et risus libero.
          </Paragraph>
        </div>
        <div className="stack gap-sm">
          <Heading level={4}>Large and bold</Heading>
          <Paragraph fontSize="large" fontWeight="bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius sagittis
            fermentum. Mauris at augue diam. Ut vel rhoncus ante, ut egestas justo. Sed luctus
            luctus erat, in aliquet ipsum pretium vel. Proin et risus libero.
          </Paragraph>
        </div>

        <div className="stack gap-sm">
          <Heading level={4}>Light colour</Heading>
          <Paragraph className="paragraph-dark-bg" isLightColour>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius sagittis
            fermentum. Mauris at augue diam. Ut vel rhoncus ante, ut egestas justo. Sed luctus
            luctus erat, in aliquet ipsum pretium vel. Proin et risus libero.
          </Paragraph>
        </div>
      </div>
    </div>
  );
};
