import './MobileMenu.css';
import { BurgerButton } from '../../atoms/Button/BurgerButton/BurgerButton';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../../atoms/Button/Button';
import { Icon } from '../../atoms/Icon/Icon';
import { useScrollLock } from '../../../hooks/useScrollLock';
import { FocusTrap } from '../../utils/FocusTrap/FocusTrap';
import { Backdrop } from '../../atoms/internal/Backdrop/Backdrop';

export const MobileMenu = ({ items }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleMenu = () => setIsExpanded(!isExpanded);
  const safeItems = Array.isArray(items) ? items : [];

  // Lock the scroll when the menu is open
  useScrollLock(isExpanded);

  return (
    <div className={`mobile-menu ${isExpanded ? 'mobile-menu--expanded' : ''}`}>
      <BurgerButton isExpanded={isExpanded} onClick={toggleMenu} />
      <Backdrop isVisible={isExpanded} onClick={toggleMenu} />
      <FocusTrap isActive={isExpanded}>
        <div className="mobile-menu__content">
          <Button
            onClick={toggleMenu}
            isIconOnly
            isRound
            buttonStyle="transparent"
            ariaLabel="Close menu"
          >
            <Icon isDecorative href="/assets/icons/x-mark.svg" />
          </Button>
          <nav className="mobile-menu__nav">
            {safeItems.map((link, index) => (
              <NavLink
                className="mobile-menu__link header__link button button--link"
                key={`link-${index}`}
                to={link.url}
                onClick={() => setIsExpanded(false)}
              >
                {link.text}
              </NavLink>
            ))}
          </nav>
        </div>
      </FocusTrap>
    </div>
  );
};
