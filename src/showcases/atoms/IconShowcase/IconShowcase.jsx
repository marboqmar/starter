import './IconShowcase.css';
import { Icon } from '../../../components/atoms/Icon/Icon';
import { Heading } from '../../../components/atoms/Heading/Heading';
import { Paragraph } from '../../../components/atoms/Paragraph/Paragraph';

export const IconShowcase = () => {
  return (
    <div className="icon-showcase showcase-item">
      <Heading>Icons</Heading>
      <div className="stack gap-md">
        <div className="icon-showcase__example stack gap-sm">
          <Heading level={3}>Decorative icon</Heading>
          <Paragraph>
            The following icon contains the HTML attributes <code>aria-hidden="true"</code>,{' '}
            <code>tabindex="-1"</code>, and <code>focusable="false"</code>.
          </Paragraph>
          <Icon isDecorative>
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </Icon>
        </div>
        <div className="icon-showcase__example stack gap-sm">
          <Heading level={3}>Non decorative icon</Heading>
          <Paragraph>
            The following icon contains the HTML attributes <code>role="img"</code> and{' '}
            <code>aria-label</code>.
          </Paragraph>
          <Icon ariaLabel={'check mark'}>
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </Icon>
        </div>
        <div className="icon-showcase__example stack gap-sm">
          <Heading level={3}>Different colours and sizes</Heading>
          <Paragraph>
            The colour and size of the icon component can be modified using CSS, as demonstrated in
            the following icon.
          </Paragraph>
          <Icon isDecorative className="icon-showcase--large-coloured">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </Icon>
        </div>
        <div className="icon-showcase__example stack gap-sm">
          <Heading level={3}>Icon from an SVG file</Heading>
          <Paragraph>
            The icon component also allows to use icons from an external SVG sprite. These icons can
            also be modified using CSS.
          </Paragraph>
          <Icon className="icon-showcase--large-coloured" name="checkmark"></Icon>
        </div>
      </div>
    </div>
  );
};
