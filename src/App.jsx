import './css/style.css';
import { Outlet } from 'react-router-dom';
import { Header } from './components/organisms/Header/Header';
import { Footer } from './components/organisms/Footer/Footer';

const footerContent = [
  {
    links: [{ text: 'Atoms', url: '/atoms' }],
  },
  {
    links: [{ text: 'Molecules', url: '/molecules' }],
  },
  {
    links: [{ text: 'Organisms', url: '/organisms' }],
  },
  {
    links: [{ text: 'Grid', url: '/grid' }],
  },
];

/* TODO - when repo goes public, modify this URL */
const footerSocial = [{ url: '/', iconHref: '/assets/icons/github.svg', ariaLabel: 'GitHub' }];

export const App = () => {
  return (
    <>
      <Header />
      <main role="main" className="main">
        <Outlet />
      </main>
      <Footer items={footerContent} socialMedia={footerSocial} isCompact />
    </>
  );
};
