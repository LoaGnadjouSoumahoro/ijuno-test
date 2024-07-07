import { Outlet } from 'react-router-dom';
import Header from './ui/components/navigation/Header';
import Footer from './ui/components/navigation/footer/Footer';
import ScrollToTop from './ui/components/ScrollToTop';

const Layout = () => {
  return (
    <div>
      <Header />

      {/* Start buttom scroll Bottom  */}
      <div className='w-15 h-20   flex justify-center align-middle  top-[50%] right-2 fixed z-50 scroll-smooth'>
        {/* End buttom scroll Bottom  */}

        {/* Top scroll Bottom  */}
        <ScrollToTop />
      </div>
      <Outlet />

      <Footer />
    </div>
  );
};
export default Layout;
