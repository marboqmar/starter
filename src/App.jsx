import './css/style.css';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Header } from './components/organisms/Header/Header';
import { Footer } from './components/organisms/Footer/Footer';
import { FOOTER_ITEMS, FOOTER_SOCIAL } from './constants/footer.constants';

export const App = () => {
  return (
    <>
      {/* React Router's built-in scroll manager */}
      <ScrollRestoration />
      <Header />
      <main role="main" className="main">
        <Outlet />
      </main>
      <Footer items={FOOTER_ITEMS} socialMedia={FOOTER_SOCIAL} isCompact />
    </>
  );
};
