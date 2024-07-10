import { FooterLinksInfos } from './datas/dataFooterLink';
import logoIjuno from '../images/logo ijuno.svg';
import { FaFacebook } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';
import { Typography } from '../../../design-system/typography/Typography';
import { FaLinkedin } from 'react-icons/fa';
import mail from '../images/mail.svg';
import mobile from '../images/mobile.svg';
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const sections = FooterLinksInfos;
  const currentYear = new Date().getFullYear();

  return (
    <div className='w-full  bg-[#1E4569]' id='footer'>
      <div>
        <div className='lg:max-w-[1440px] lg:w-[80%] sm:w-[80%] w-[90%] md:w-[75%] mx-auto grid grid-cols-2 lg:grid-cols-4 py-8 border-b-2 border-turquoise  md:gap-y-4 '>
          <div className='lg:block hidden flex '>
            <div className='md:col-span-1 w-[1/3] '>
              <div className=' lg:translate-y-2 lg:-translate-x-3'>
                <a href='/' target='_blank' className='flex items-center gap-4 '>
                  <img src={logoIjuno} alt='logo ijuno' className='xl:w-6/12 w-[8rem] h-auto object-cover ' />
                </a>
              </div>
              <div className='gap-4 flex  lg:mt-6 mt-2 xl:translate-x-6  lg:translate-y-6'>
                <div style={{ fontSize: '30px', color: 'white' }}>
                  <a href='https://www.facebook.com/iJuno.io' target='_blank'>
                    <button>
                      <FaFacebook />
                    </button>
                  </a>
                </div>
                <div style={{ fontSize: '30px', color: 'white' }}>
                  <a href='https://www.instagram.com/ijuno.io' target='_blank'>
                    <button>
                      <FaSquareInstagram />
                    </button>
                  </a>
                </div>
                <div style={{ fontSize: '30px', color: 'white' }}>
                  <a href='https://www.linkedin.com/company/ijuno.io' target='_blank'>
                    <button>
                      <FaLinkedin />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Listes */}
          {sections.map((section) => (
            <div key={section.title} className='md:mr-10'>
              <Typography variant='h5' component='h5' className='font-semibold pt-2 hover:opacity-40 ease-in-out 200s'>
                <NavLink to={`${section.url}`}>{section.title}</NavLink>
              </Typography>
              <ul>
                {section.items &&
                  section.items.map((item) => (
                    <li key={item.label}>
                      <Typography
                        variant='body-base'
                        component='h4'
                        className='hover:opacity-70 cursor-pointer text-white'>
                        <HashLink smooth to={`${section.url}/#${item.baseUrl}`}>
                          {item.label}
                        </HashLink>
                      </Typography>
                    </li>
                  ))}
              </ul>
            </div>
          ))}

          {/* List Newsletter */}
          <div className='col-span-1 pt-8 md:pt-2 w-[1/3] lg:w-[5/12]'>
            <Typography variant='h5' component='h5' className='font-semibold'>
              Contact Us
            </Typography>
            <div className='flex items-center md:gap-x-1 gap-x-1 mb-2 mt-2'>
              <img src={mobile} alt='' className='w-6 h-6 -translate-x-1' />
              <Typography className=''>+32 477 250 293 </Typography>
            </div>
            <div className='flex items-center md:gap-x-2 gap-x-1 mb-2'>
              <img src={mail} alt='' className='w-6 h-6' />
              <a href='mailto:info@ijuno.io'>
                <Typography>info@ijuno.io</Typography>
              </a>
            </div>
            <button className='bg-turquoise text-white text-sm uppercase md:w-[180px] w-[150px] py-2 rounded-xl cursor-pointer hover:bg-turquoise/90 ease-in-out duration-200 shadow-2lg '>
              <a
                href='https://airtable.com/appMTZr9idXPy9jtW/paggFgF1JX4DPLm62/form'
                target='_blank'
                className='md:text-[0.8rem] text-[0.7rem]'>
                JOIN THE WAITING LIST
              </a>
            </button>
          </div>
          <div className='block lg:hidden flex md:translate-y-2 translate-y-8 '>
            <div className='md:col-span-1 w-[1/3] '>
              <div className=''>
                <a href='/' target='_blank' className='flex items-center gap-4 '>
                  <img
                    src={logoIjuno}
                    alt='logo ijuno'
                    className='lg:w-6/12 md:w-[12rem] w-[8rem] h-auto object-cover '
                  />
                </a>
              </div>
              <div className='gap-4 flex  lg:mt-6 mt-10 md:mt-20 translate-x-6 translate-y-3 '>
                <div style={{ fontSize: '30px', color: 'white' }}>
                  <a href='https://www.facebook.com/iJuno.io' target='_blank'>
                    <button>
                      <FaFacebook />
                    </button>
                  </a>
                </div>
                <div style={{ fontSize: '30px', color: 'white' }}>
                  <a href='https://www.instagram.com/ijuno.io' target='_blank'>
                    <button>
                      <FaSquareInstagram />
                    </button>
                  </a>
                </div>
                <div style={{ fontSize: '30px', color: 'white' }}>
                  <a href='https://www.linkedin.com/company/ijuno.io' target='_blank'>
                    <button>
                      <FaLinkedin />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-center h-full p-4 space-x-11'>
          <Typography
            variant='caption3'
            component='p'
            className='text-center'>{`Copyright © ${currentYear}  iJuno - P. Janta  -  All rights reserved`}</Typography>
        </div>
      </div>
    </div>
  );
};

export default Footer;
