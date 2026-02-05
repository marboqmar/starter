import './Header.css';
import { Button } from '../../atoms/Button/Button';
import { toggleTheme } from '../../../utils/toggleTheme';

export const Header = () => {
  return (
    // tabIndex needed for "scroll to top" button to also get focus to the top of the page
    <header role="banner" className="header" tabIndex="-1">
      <div className="container row gap-lg">
        <h2>Header</h2>
        <Button onClick={toggleTheme}>Temporary button to change site theme</Button>
      </div>
    </header>
  );
};
