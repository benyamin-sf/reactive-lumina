import { ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';

export default function MainLayout() {
  return (
    <>
      <Header />
      <main id='main'>
        <Hero />
        <Outlet />
        <ToastContainer position='bottom-right' />
      </main>
      <Footer />
    </>
  );
}
