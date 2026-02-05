import './css/style.css';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Header } from './components/organisms/Header/Header';
import { Footer } from './components/organisms/Footer/Footer';
import { FOOTER_ITEMS, FOOTER_SOCIAL } from './constants/footer.constants';
import { scrollToTop } from './utils/scroll.helpers';
import { Button } from './components/atoms/Button/Button';
import { Icon } from './components/atoms/Icon/Icon';

export const App = () => {
  return (
    <>
      {/* React Router's built-in scroll manager */}
      <ScrollRestoration />
      <Header />
      <main role="main" className="main">
        <Outlet />
        <div className="back-to-top-wrapper container">
          <Button
            className="back-to-top"
            buttonStyle="tertiary"
            hasIcon
            onClick={() => scrollToTop(true)}
          >
            <Icon href="/assets/icons/chevron-double-up.svg" isDecorative />
            <span>Back to top</span>
          </Button>
        </div>
      </main>
      <Footer items={FOOTER_ITEMS} socialMedia={FOOTER_SOCIAL} isCompact />
    </>
  );
};
