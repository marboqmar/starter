import './css/style.css';
import { Outlet } from 'react-router-dom';
import { Header } from './components/organisms/Header/Header';
import { Footer } from './components/organisms/Footer/Footer';
import { FOOTER_ITEMS, FOOTER_SOCIAL } from './constants/footer.constants';

export const App = () => {
  return (
    <>
      <Header />
      <main role="main" className="main">
        <Outlet />
      </main>
      <Footer items={FOOTER_ITEMS} socialMedia={FOOTER_SOCIAL} isCompact />
    </>
  );
};
