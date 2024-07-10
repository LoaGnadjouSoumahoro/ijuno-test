import { useId } from 'react';
import { BENEFITS_INFOS } from '../datas/dataBenefits';
import { Typography } from '../../../ui/design-system/typography/Typography';
import Section from '../../../ui/components/container/Section';
import Button from '../../../ui/design-system/elements/Button';

const BenefitsSection = () => {
  const id = useId();

  return (
    <div>
      {/* Title */}
      <Section title=' Benefits'>
        <div className='flex flex-col justify-center'>
          <div className='text-center w-full'>
            {/* Subtitle */}
            <div className='mb-20 lg:mb-32 '>
              <Typography variant='h4' component='h4' className='text-center lg:w-2/3 m-auto mt-10 text-navy-blue'>
                iJuno is the best app for organizing family tasks.
              </Typography>
            </div>
          </div>
        </div>
        <div>
          {/* Map of title, text and foto */}
          <ul className='lg:px-32 '>
            {BENEFITS_INFOS.map((item, index) => (
              <li key={id} className=' md:mb-32  w-[75%] m-auto md:w-full'>
                <div
                  className={
                    index % 2 !== 0
                      ? ' grid grid-cols-1 lg:grid-cols-2 md:gap-x-8 md:grid-cols-2 lg:gap-x-2 justify-items-center'
                      : ' grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 md:justify-items-end lg:justify-items-end md:gap-x-8 lg:gap-x-1 justify-items-center '
                  }>
                  {/* Foto position on small screens */}
                  <div className='lg:hidden md:hidden mb-8'>
                    <img src={item.image} alt='' className='w-full  rounded-lg object-cover shadow-md' />
                  </div>
                  {/* Odd foto position on large and medium screens */}
                  {index % 2 !== 0 && (
                    <div className='hidden lg:block md:block   '>
                      <div className='w-[70%] lg:w-full md:w-full'>
                        <img
                          src={item.image}
                          alt={item.imgDescription}
                          className='lg:w-[30rem]  h-full md:h-[26rem]  object-cover rounded-lg lg:translate-y-4 shadow-md '
                        />
                      </div>
                    </div>
                  )}
                  {/* Title and text position */}
                  <div>
                    <Typography variant='h3' component='h3' className='font-semibold mb-8 '>
                      {item.title}
                    </Typography>
                    <Typography variant='body-lg' component='p' className=' mt-4 mb-10'>
                      {item.text}
                    </Typography>
                  </div>
                  {/* Even foto position on large and medium screens */}
                  {index % 2 === 0 && (
                    <div className='hidden lg:block md:block mr-42 md:mr-15 lg:w-full w-[70%] md:w-full '>
                      <img
                        src={item.image}
                        alt={item.imgDescription}
                        className='lg:w-[30rem]  h-full  object-cover rounded-lg lg:h-[26rem] shadow-md'
                      />
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
          {/* Button */}
          <div className='flex justify-center mt-10'>
            <Button className='mt-6 text-center'>
              <a href='https://airtable.com/appMTZr9idXPy9jtW/paggFgF1JX4DPLm62/form' target='_blank'>
                JOIN THE WAITING LIST
              </a>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};
export default BenefitsSection;
