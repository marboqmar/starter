import './ImageShowcase.css';
import { Image } from '../../../components/atoms/Image/Image';
import { Heading } from '../../../components/atoms/Heading/Heading';
import { Paragraph } from '../../../components/atoms/Paragraph/Paragraph';

export const ImageShowcase = () => {
  return (
    <div className="image-showcase showcase-item">
      <Heading>Images</Heading>
      <div className="stack gap-xl">
        <div className="image-showcase__example showcase-item__example">
          <Heading level={3}>
            Image with descriptive <code>alt</code>
          </Heading>
          <Paragraph>The following image contains a descriptive alternative text.</Paragraph>
          <Image
            src="/assets/images/test-image-sm.png"
            alt={
              'Test image displaying an adult smiling on the background and the word test displayed ' +
              'centred'
            }
          />
        </div>
        <div className="image-showcase__example showcase-item__example">
          <Heading level={3}>
            Image with an empty <code>alt</code>
          </Heading>
          <Paragraph>
            The image component has a default empty <code>alt</code> to avoid accessibility issues,
            and also a default lazy loading.
          </Paragraph>
          <Image src="/assets/images/test-image-sm.png" />
        </div>
        <div className="image-showcase__example showcase-item__example">
          <Heading level={3}>Image with eager loading</Heading>
          <Paragraph>
            When an image is set to be eager loaded, <code>decoding="sync"</code> and{' '}
            <code>fetchPriority="high"</code> are also applied automatically.
          </Paragraph>
          <Image src="/assets/images/test-image-sm.png" loading="eager" />
        </div>
        <div className="image-showcase__example showcase-item__example">
          <Heading level={3}>Responsive images</Heading>
          <Paragraph>
            This component supports responsive image delivery through the attributes{' '}
            <code>srcSet</code> and <code>sizes</code>, allowing the browser to select the most
            efficient image size for the user's device.
          </Paragraph>
          <Image
            src="/assets/images/test-image-sm.png"
            srcSet="
            /assets/images/test-image-sm.png 400w,
            /assets/images/test-image-md.png 800w,
            /assets/images/test-image-lg.png 1200w
          "
            sizes="(max-width: 768px) 100vw, 800px"
            className="responsive-image"
          />
        </div>
      </div>
    </div>
  );
};
