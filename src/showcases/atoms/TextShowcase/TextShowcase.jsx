import './TextShowcase.css';
import { Heading } from '../../../components/atoms/Heading/Heading';
import { Paragraph } from '../../../components/atoms/Paragraph/Paragraph';

export const TextShowcase = () => {
  return (
    <div className="text-showcase showcase-item">
      <Heading>Texts</Heading>
      <div className="text-showcase__wrapper showcase-item__wrapper">
        <div className="text-showcase__example-group">
          <Heading level={3}>Headings</Heading>
          <div className="text-showcase__example showcase-item__example text-showcase__example-bg">
            <Heading level={1}>H1 - The quick brown fox jumps over the lazy dog</Heading>
            <Heading>H2 - The quick brown fox jumps over the lazy dog</Heading>
            <Heading level={3}>H3 - The quick brown fox jumps over the lazy dog</Heading>
            <Heading level={4}>H4 - The quick brown fox jumps over the lazy dog</Heading>
            <Heading level={5}>H5 - The quick brown fox jumps over the lazy dog</Heading>
            <Heading level={6}>H6 - The quick brown fox jumps over the lazy dog</Heading>
          </div>
        </div>
        <div className="text-showcase__example-group">
          <Heading level={3}>Paragraphs</Heading>
          <div className="text-showcase__example showcase-item__example">
            <Heading level={4}>Regular</Heading>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius sagittis
              fermentum. Mauris at augue diam. Ut vel rhoncus ante, ut egestas justo. Sed luctus
              luctus erat, in aliquet ipsum pretium vel. Proin et risus libero.
            </Paragraph>
          </div>
          <div className="text-showcase__example showcase-item__example">
            <Heading level={4}>Large and bold</Heading>
            <Paragraph fontSize="large" fontWeight="bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius sagittis
              fermentum. Mauris at augue diam. Ut vel rhoncus ante, ut egestas justo. Sed luctus
              luctus erat, in aliquet ipsum pretium vel. Proin et risus libero.
            </Paragraph>
          </div>

          <div className="text-showcase__example showcase-item__example">
            <Heading level={4}>Inverted colour</Heading>
            <div className="text-showcase__example-bg text-showcase__example--inverted">
              <Paragraph isInvertedColour>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius sagittis
                fermentum. Mauris at augue diam. Ut vel rhoncus ante, ut egestas justo. Sed luctus
                luctus erat, in aliquet ipsum pretium vel. Proin et risus libero.
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
