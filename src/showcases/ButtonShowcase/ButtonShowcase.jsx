import './ButtonShowcase.css';
import { Button } from '../../components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import { Heading } from '../../components/atoms/Heading/Heading';

export const ButtonShowcase = () => {
  return (
    <div className="component-section">
      <Heading>Buttons</Heading>
      <div className="button-components stack gap-md">
        {/* Buttons - Colours / States */}
        <div className="button-examples stack gap-sm">
          <Heading level={3}>Colours / States</Heading>
          <div className="button-group stack gap-sm">
            <Button>Primary</Button>
            <Button buttonStyle={'secondary'}>Secondary</Button>
            <Button disabled>Disabled</Button>
            <Button className="button--focused">Focused</Button>
          </div>
        </div>

        {/* Buttons - Padding */}
        <div className="button-examples stack gap-sm">
          <Heading level={3}>Padding</Heading>
          <div className="button-group stack gap-sm">
            <Button>Small padding</Button>
            <Button paddingSize={'large'}>Large padding</Button>
          </div>
        </div>

        {/* Buttons - Border radius */}
        <div className="button-examples stack gap-sm">
          <Heading level={3}>Border radius</Heading>
          <div className="button-group stack gap-sm">
            <Button borderRadius={'none'}>No border radius</Button>
            <Button>Small border radius</Button>
            <Button borderRadius={'large'}>Large border radius</Button>
          </div>
        </div>
      </div>
      {/* Buttons - Link */}
      <div className="link-group stack gap-sm margin-top-md">
        <Heading level={3}>Links</Heading>
        <Button component={Link} buttonAppearance buttonStyle={'primary'} to={'/'}>
          Button-looking link
        </Button>
        <Button component={Link} buttonAppearance buttonStyle={'secondary'} to={'/'}>
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
  );
};
