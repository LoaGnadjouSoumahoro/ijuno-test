import logoIjuno from './images/logo ijuno.svg';
import logo from '../../../medias/svg/logo.svg';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import hamburger from './images/hamburger.svg';
import closs from './images/closs.svg';
import { Typography } from '../../design-system/typography/Typography';
import { HashLink } from 'react-router-hash-link';

const Nav = () => {
  return (
    <>
      <HashLink smooth to='/#features'>
        <Typography variant='lead' className='font-semibold'>
          Features
        </Typography>
      </HashLink>

      <NavLink to='pricing'>
        <Typography variant='lead' className='font-semibold'>
          Pricing
        </Typography>
      </NavLink>

      <Link to='/'>
        <Typography variant='lead' className='font-semibold'>
          EN / FR
        </Typography>
      </Link>

      <a href='https://airtable.com/appMTZr9idXPy9jtW/paggFgF1JX4DPLm62/form' target='_blank'>
        <button className='bg-turquoise text-white lg:text-lead uppercase   rounded-xl cursor-pointer hover:bg-turquoise/90 ease-in-out duration-200 shadow-2xl mt-3 justify-center -translate-y-1.5 font-semibold py-2 md:py-4 px-6'>
          Get Started
        </button>
      </a>
    </>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-white ' id='header'>
      <header className='lg:max-w-[1300px] m-auto py-1 min-[412px]:w-[90%] w-[75%]'>
        <nav className='flex justify-between gap-7 items-center'>
          <div>
            <Link to='/'>
              <img src={logo} alt='logo of' className='lg:hidden dm:hidden  block w-[60%]' />
              <img src={logoIjuno} alt='logo' className='w-[10rem] h-auto hidden lg:block ' />
            </Link>
          </div>
          <div className='hidden md:grid grid-flow-col gap-8  items-center  font-bold'>
            <Nav />
          </div>
          <div className='hidden '>
            <img src={hamburger} className='w-[50%]' />
          </div>
          <div className='md:hidden'>
            <button onClick={toggleNavbar}>
              {isOpen ? (
                <img src={closs} className='w-[50%] translate-x-10' />
              ) : (
                <img src={hamburger} className='w-[50%] translate-x-10' />
              )}
            </button>
          </div>
        </nav>
        {isOpen && (
          <div className='flex basis-full flex-col items-center gap-y-5 md:hidden mt-10'>
            <Nav />
          </div>
        )}
      </header>
    </div>
  );
};
export default Header;
