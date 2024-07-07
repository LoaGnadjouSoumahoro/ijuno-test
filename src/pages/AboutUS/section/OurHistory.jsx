import Button from '../../../ui/design-system/elements/Button';
import { Typography } from '../../../ui/design-system/typography/Typography';
import { OUR_HISTORY } from '../datas/ourHistoryData';
import founder from '../images/foto-founder.png';

const OurHistory = () => {
  return (
    <section id='ourHistory'>
      <div className='md:mt-40 mt-20 mb-20 md:mb-40 w-[85%] m-auto'>
        <Typography variant='h2' component='h2' className='text-center mb-10'>
          Our History
        </Typography>
        <Typography className='mb-20  m-auto text-center w-2/3'>
          We are relentlessly working on making the society a better lace with the cutting-edge technologies.
        </Typography>
        <section className='grid lg:grid-cols-5 grid-col-1 justify-items-center gap-6  '>
          <div className='lg:col-span-2 xl:col-span-3 flex flex-col '>
            {OUR_HISTORY.map((item, index) => (
              <div key={index} className='md:mb-4 mb-8'>
                <Typography variant='h5' component='h5' className='mb-2'>
                  {item.title}
                </Typography>
                <Typography variant='body-base' className='text-justify'>
                  {item.description}
                </Typography>
              </div>
            ))}
          </div>
          <div className='lg:col-span-2  w-full'>
            <img
              src={founder}
              alt='the Founders Customer Night by Benjamin Zwarts'
              className='object-cover rounded-xl h-full w-[90%] md:w-full m-auto mt-8 md:mt-0 shadow-md'
            />
          </div>
        </section>
        <div className='mt-20 text-center w-[75%] m-auto'>
          <Typography>If you want to be part of the Beta Group or join the waiting list.</Typography>
        </div>
        <div className='flex justify-center mt-20'>
          <Button className=' mt-6 text-center'>
            <a href='https://airtable.com/appMTZr9idXPy9jtW/paggFgF1JX4DPLm62/form' target='_blank'>
              JOIN THE WAITING LIST
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
export default OurHistory;
