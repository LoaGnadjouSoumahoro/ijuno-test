import phone from '../images/phone.svg';
import { Typography } from '../../../ui/design-system/typography/Typography';
import Container from '../../../ui/components/container/Container';
import Button from '../../../ui/design-system/elements/Button';

const HeroSection = () => {
  return (
    <div className='bg-width w-full  h-[96rem] lg:h-[74rem] pt-16 xl:mb-[10rem] lg:mb-[10rem]    m-auto  max-[359px]:mt-[60px] '>
      <Container>
        <Typography variant='h1' component='h1' className='mt-10 uppercase   text-center mb-20 md:mb-20 '>
          Sharing the Mental Load is an act of love!
        </Typography>
        <div className='flex flex-wrap justify-center gap-y-16 '>
          <div className=' lg:w-1/2  '>
            <img src={phone} alt='' className='lg:w-72 md:w-52 sm:w-50' />
          </div>
          <div className='lg:w-1/2'>
            <Typography variant='h4' className='text-center  mt-8 text-navy-blue font-normal normal-case '>
              Ever dreamed of an assistant to help you running your household?
            </Typography>
            <Typography variant='h4' className='text-center  mt-20 text-navy-blue font-normal normal-case'>
              iJuno is a family management app helping you to stay on top of care and maintenance needs.
            </Typography>
            <Typography variant='h4' className='text-center  mt-20 text-navy-blue font-normal normal-case'>
              Run a happy and healthy household thanks to AI and automation.
            </Typography>
            <div className='flex justify-center mt-20'>
              <Button className=' mt-6 text-center'>
                <a href='https://airtable.com/appMTZr9idXPy9jtW/paggFgF1JX4DPLm62/form' target='_blank'>
                  JOIN THE WAITING LIST
                </a>
              </Button>
            </div>
          </div>
        </div>

        <Typography variant='lead' className='lg:mt-20 mt-12 text-navy-blue text-justify'>
          iJuno is a family organization software designed to reduce the mental burden related to family and household
          management.
        </Typography>
        <Typography variant='lead' className='mt-10 text-navy-blue text-justify '>
          Powered with automation and artificial intelligence, the iJuno digital family organizer stores important
          family data, creates appropriate reminders and offers a series of tools ready to use for the whole family to
          collaborate (shared calendar, to-do lists, grocery list, project management section, etc.)
        </Typography>
      </Container>
    </div>
  );
};
export default HeroSection;
