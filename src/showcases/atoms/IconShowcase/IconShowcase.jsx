import './IconShowcase.css';
import { Icon } from '../../../components/atoms/Icon/Icon';
import { Heading } from '../../../components/atoms/Heading/Heading';

export const IconShowcase = () => {
  return (
    <div className="atom-section">
      <Heading>Icon</Heading>
      <div className="stack gap-sm margin-bottom-md">
        <Heading level={3}>Decorative icon</Heading>
        <p>
          The following icon contains the HTML attributes <code>aria-hidden="true"</code>,{' '}
          <code>tabindex="-1"</code>, and <code>focusable="false"</code>.
        </p>
        <Icon isDecorative>
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
        </Icon>
      </div>
      <div className="stack gap-sm margin-bottom-md">
        <Heading level={3}>Non decorative icon</Heading>
        <p>
          The following icon contains the HTML attributes <code>role="img"</code> and{' '}
          <code>aria-label</code>.
        </p>
        <Icon ariaLabel={'check mark'}>
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
        </Icon>
      </div>
      <div className="stack gap-sm margin-bottom-md">
        <Heading level={3}>Different colours and sizes</Heading>
        <p>
          The colour and size of the icon component can be modified using CSS, as demonstrated in
          the following icon.
        </p>
        <Icon isDecorative className="large-coloured">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
        </Icon>
      </div>
      <div className="stack gap-sm margin-bottom-md">
        <Heading level={3}>Icon from an SVG file</Heading>
        <p>
          The icon component also allows to use icons from an external SVG sprite. These icons can
          also be modified using CSS.
        </p>
        <Icon className="large-coloured" name="checkmark"></Icon>
      </div>
    </div>
  );
};
