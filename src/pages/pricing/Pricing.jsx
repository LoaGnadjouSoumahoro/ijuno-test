import { useId, useState } from 'react';
import { Typography } from '../../ui/design-system/typography/Typography';
import { PACKAGES } from './datas/dataPricing';
import turquoiseCheck from './images/circle turquoise check.svg';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  let id = useId();

  return (
    <>
      <div className=' w-[92%] md-[75%] m-auto' id='pricing'>
        <Typography variant='h1' component='h1' className='text-center lg:mt-10'>
          PRICING
        </Typography>

        {/* Start Button toggle  */}
        <div className='mt-16 flex flex-row justify-center'>
          <label htmlFor='toggle' className='inline-flex items-center cursor-pointer'>
            <Typography variant='lead' component='span' className='mr-8 font-semibold'>
              Monthly
            </Typography>
            <div className='w-14 h-6 bg-gray-300 rounded-full transition duration-200 ease-in-out relative'>
              <div
                className={`w-8 h-8 -translate-y-1 rounded-full transition duration-200 ease-in-out ${
                  isYearly ? 'bg-turquoise ml-8' : 'bg-turquoise'
                }`}></div>
              <div></div>
              {isYearly && <div className='absolute top-1 left-8 w-2 h-2 bg-primary rounded-full'></div>}
            </div>
            <Typography variant='lead' component='span' className='ml-8 font-semibold'>
              Yearly
            </Typography>
          </label>
          <input
            type='checkbox'
            id='toggle'
            className='hidden'
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
          />
        </div>
        {/* End Button toggle  */}

        {/* Start Package card */}
        <div
          className='flex flex-wrap justify-center lg:gap-x-10 gap-y-6  lg:p-10 w-full m-auto mb-40 md:gap-x-10
      '>
          {PACKAGES.map((pkg, indexCol) => (
            <div
              key={indexCol}
              className=' flex flex-col min-h-[728px] w-[92%] md:[50%] border rounded-2xl shadow-lg border-t-8 border-turquoise  xl:w-[30%]  sm:w-[65%] md:w-[45%] lg:w-[40%] lg:px-4 mt-10  shadow-turquoise '>
              <div className=' h-[20rem]'>
                <Typography variant='h3' component='h3' className='text-center lg:mt-4 mt-8'>
                  {pkg.name}
                </Typography>
                <Typography variant='h3' component='h3' className=' text-center mt-4'>
                  Assistant iJuno
                </Typography>

                {/* Start Old Price */}
                <Typography className='text-center line-through mt-2'>
                  {isYearly ? `${pkg.oldYearlyPrice}` : `${pkg.oldMonthlyPrice}`}
                </Typography>
                {/* End Old Price */}

                <Typography variant='lead' className='text-center mt-2'>
                  {pkg.specialOffertText}
                </Typography>

                {/* Start New Price */}
                <Typography variant='h3' className='text-center capitalize mt-2 mb-4'>
                  {isYearly ? `${pkg.yearlyPrice}` : `${pkg.monthlyPrice}`}

                  {/*Button Contact us */}
                  {!pkg.yearlyPrice && (
                    <a href='mailto:info@ijuno.io'>
                      <button className='bg-turquoise text-white uppercase w-[180px] py-4 rounded-xl cursor-pointer hover:bg-turquoise/90 ease-in-out duration-200 shadow-2lg text-lg lg:mt-16 mt-10'>
                        Contact us
                      </button>
                    </a>
                  )}
                </Typography>
                {/* End New Price */}

                <Typography variant='lead' className='text-center'>
                  {pkg.validSpecialData}
                </Typography>
              </div>
              <div>
                <ul className='flex items-center lg:mt-10 mb-10 mt-0'>
                  <Typography variant='h4' component='h4' className='mt-5  '>
                    {pkg.description.map((item, indexRow) => (
                      <li key={`${id}-${indexRow}`} className='md:mb-4 '>
                        <div className='flex  mx-8'>
                          <div>
                            <img src={turquoiseCheck} alt='' className='w-6 mr-2 translate-y-1' />
                          </div>
                          <Typography variant='body-lg' component='p' className='font-normal'>
                            {item.label}
                          </Typography>
                        </div>
                      </li>
                    ))}
                  </Typography>
                </ul>
              </div>
              {/* Start Button */}
              <div className='flex justify-center m-10 mt-auto'>
                <a
                  href={
                    pkg.buttonText === 'pre-order'
                      ? 'https://airtable.com/appMTZr9idXPy9jtW/paggFgF1JX4DPLm62/form'
                      : 'mailto:info@ijuno.io'
                  }
                  target='_blank'>
                  <button className='bg-turquoise text-white uppercase w-[180px] py-4 rounded-xl cursor-pointer hover:bg-turquoise/90 ease-in-out duration-200 shadow-2lg'>
                    {pkg.buttonText}
                  </button>
                </a>
              </div>
              {/* End Button */}
            </div>
          ))}
        </div>
        {/* End Package card */}
      </div>
    </>
  );
};

export default Pricing;
