import './ButtonShowcase.css';
import { Button } from '../../../components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import { Heading } from '../../../components/atoms/Heading/Heading';

export const ButtonShowcase = () => {
  return (
    <div className="atom-section">
      <Heading>Buttons</Heading>
      <div className="button-atoms grid grid-cols-1 grid-cols-tablet-2 grid-cols-desktop-lg-4 gap-lg">
        {/* Buttons - Colours / States */}
        <div className="button-showcase__item stack gap-sm">
          <Heading level={3}>Colours / States</Heading>
          <Button className="button-showcase__button">Primary</Button>
          <Button className="button-showcase__button" buttonStyle={'secondary'}>
            Secondary
          </Button>
          <Button className="button-showcase__button" disabled>
            Disabled
          </Button>
          <Button className="button-showcase__button button--focused">Focused</Button>
        </div>

        {/* Buttons - Padding */}
        <div className="button-showcase__item stack gap-sm">
          <Heading level={3}>Padding</Heading>
          <Button className="button-showcase__button">Small padding</Button>
          <Button className="button-showcase__button" paddingSize={'large'}>
            Large padding
          </Button>
        </div>

        {/* Buttons - Border radius */}
        <div className="button-showcase__item stack gap-sm">
          <Heading level={3}>Border radius</Heading>
          <Button className="button-showcase__button" borderRadius={'none'}>
            No border radius
          </Button>
          <Button className="button-showcase__button">Small border radius</Button>
          <Button className="button-showcase__button" borderRadius={'large'}>
            Large border radius
          </Button>
        </div>

        {/* Buttons - Link */}
        <div className="button-showcase__item stack gap-sm">
          <Heading level={3}>Links</Heading>
          <Button
            className="button-showcase__button"
            component={Link}
            buttonAppearance
            buttonStyle={'primary'}
            to={'/'}
          >
            Button-looking link
          </Button>
          <Button
            className="button-showcase__button"
            component={Link}
            buttonAppearance
            buttonStyle={'secondary'}
            to={'/'}
          >
            Button-looking link
          </Button>
          <p>
            Lorem ipsum{' '}
            <Button component={Link} to={'/'}>
              inline link
            </Button>
            .
          </p>
        </div>
      </div>
    </div>
  );
};
