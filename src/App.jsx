import './css/style.css';
import { Outlet } from 'react-router-dom';
import { Header } from './components/organisms/Header/Header';
import { Footer } from './components/organisms/Footer/Footer';

export const App = () => {
  return (
    <>
      <Header />
      <main role="main" className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
