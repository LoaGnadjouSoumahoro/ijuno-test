import { useId } from 'react';
import Section from '../../../ui/components/container/Section';
import { Typography } from '../../../ui/design-system/typography/Typography';
import { HERO_SECTION_ABOUT_DATA } from '../datas/heroSectionAboutData';

const HeroAboutUs = () => {
  let id = useId();
  return (
    <Section title='About Us ' variant='h1' component='h1' id='ourValeur'>
      <Typography variant='body-base' component='h4' className='lg:w-2/3 w-[75%] m-auto text-center mb-10'>
        As we are dealing with family sensitive information, at iJuno, we will build the app integrating these values by
        design.
      </Typography>
      <Typography variant='h2' component='h2' className='text-center mt-10 mb-10'>
        Our Values
      </Typography>
      <ul
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center md:gap-y-8
      '>
        {HERO_SECTION_ABOUT_DATA.map((item, index) => (
          <div
            key={id + index}
            className='mb-10 justify-between xl:w-[20rem] lg:w-[16rem] md:w-[17rem]  w-[18rem] md:gap-x-4'>
            <img src={item.image} alt='' className='h-[886]  mb-4 items-center rounded-xl shadow-md' />
            <div>
              <Typography variant='h5' component='h5' className='mb-4 text-start'>
                {item.title}
              </Typography>
              <Typography variant='body-base' component='p' className='text-start'>
                {item.description}
              </Typography>
            </div>
          </div>
        ))}
      </ul>
    </Section>
  );
};
export default HeroAboutUs;
