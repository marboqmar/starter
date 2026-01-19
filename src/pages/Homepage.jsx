import { Heading } from '../components/atoms/Heading/Heading';
import { Button } from '../components/atoms/Button/Button';
import { Link } from 'react-router-dom';

export const Homepage = () => {
  return (
    <div className="homepage container">
      <Heading level={1}>Starter project</Heading>
      <p>Explanation about the project</p>
      <p>It uses the atomic design system. See how the components display</p>
      <div className="components-classification stack gap-md margin-top-md margin-bottom-md">
        <Button component={Link} buttonAppearance buttonStyle={'primary'} to="/grid">
          Grid
        </Button>
        <Button component={Link} buttonAppearance buttonStyle={'primary'} to="/atoms">
          Atoms
        </Button>
        <Button component={Link} buttonAppearance buttonStyle={'primary'} to="/molecules">
          Molecules
        </Button>
        <Button component={Link} buttonAppearance buttonStyle={'primary'} to="/organisms">
          Organisms
        </Button>
      </div>
    </div>
  );
};
