import './ButtonShowcase.css';
import { Button } from '../../../components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import { Heading } from '../../../components/atoms/Heading/Heading';

export const ButtonShowcase = () => {
  return (
    <div className="button-showcase showcase-item">
      <Heading>Buttons</Heading>
      <div className="button-showcase__wrapper grid gap-md">
        {/* Buttons - styles */}
        <div className="button-showcase__column">
          <Heading level={3}>Styles</Heading>
          <Button className="button-showcase__button">Primary</Button>
          <Button className="button-showcase__button" buttonStyle="secondary">
            Secondary
          </Button>
          <Button className="button-showcase__button" buttonStyle="tertiary">
            Tertiary
          </Button>
        </div>

        {/* Buttons - states */}
        <div className="button-showcase__column">
          <Heading level={3}>States</Heading>
          <Button className="button-showcase__button" disabled>
            Disabled
          </Button>
          <Button className="button-showcase__button button-showcase__example--focused">
            Focused
          </Button>
        </div>

        {/* Buttons - border radius */}
        <div className="button-showcase__column">
          <Heading level={3}>Border radius</Heading>
          <Button className="button-showcase__button" borderRadius="none">
            No border radius
          </Button>
          <Button className="button-showcase__button">Small border radius</Button>
          <Button className="button-showcase__button" borderRadius="large">
            Large border radius
          </Button>
        </div>

        {/* Buttons - padding */}
        <div className="button-showcase__column">
          <Heading level={3}>Padding</Heading>
          <Button className="button-showcase__button" paddingSize="small">
            Small padding
          </Button>
          <Button className="button-showcase__button" paddingSize="large">
            Large padding
          </Button>
        </div>

        {/* Buttons - link */}
        <div className="button-showcase__column">
          <Heading level={3}>Links</Heading>
          <Button
            className="button-showcase__button"
            component={Link}
            buttonAppearance
            buttonStyle="primary"
            to={'/'}
          >
            Button-looking link
          </Button>
          <Button
            className="button-showcase__button"
            component={Link}
            buttonAppearance
            buttonStyle="secondary"
            to={'/'}
          >
            Button-looking link
          </Button>
          <p className="button-showcase__button">
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
