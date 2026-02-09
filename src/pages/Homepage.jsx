import '../css/pages/Homepage.css';
import { Heading } from '../components/atoms/Heading/Heading';
import { Button } from '../components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import { Paragraph } from '../components/atoms/Paragraph/Paragraph';

export const Homepage = () => {
  return (
    <div className="homepage container">
      <Heading level={1}>Starter project</Heading>
      <Paragraph>Explanation about the project</Paragraph>
      <Paragraph>It uses the atomic design system. See how the components display</Paragraph>
      <div className="components-classification stack gap-md margin-top-md margin-bottom-md">
        <Button component={Link} buttonAppearance style={'primary'} to="/grid">
          Grid
        </Button>
        <Button component={Link} buttonAppearance style={'primary'} to="/atoms">
          Atoms
        </Button>
        <Button component={Link} buttonAppearance style={'primary'} to="/molecules">
          Molecules
        </Button>
        <Button component={Link} buttonAppearance style={'primary'} to="/organisms">
          Organisms
        </Button>
      </div>
    </div>
  );
};
