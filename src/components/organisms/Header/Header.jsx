import './Header.css';
import { Button } from '../../atoms/Button/Button';
import { toggleTheme } from '../../../utils/toggleTheme';

export const Header = () => {
  return (
    <header role="banner" className="header">
      <div className="container row gap-lg">
        <h2>Header</h2>
        <Button onClick={toggleTheme}>Temporary button to change site theme</Button>
      </div>
    </header>
  );
};
