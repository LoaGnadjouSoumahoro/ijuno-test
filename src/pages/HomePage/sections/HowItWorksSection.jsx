import Container from '../../../ui/components/container/Container';
import { Typography } from '../../../ui/design-system/typography/Typography';
import { HOW_IT_WORKS_INFOS } from '../datas/dataHowItWorks';
import Button from '../../../ui/design-system/elements/Button';

const HowItWorksSection = () => {
  return (
    <div className='mb-40'>
      <Container>
        <Typography variant='h2' component='h2' className='font-bold text-center mb-20 '>
          How it works
        </Typography>
        <Typography variant='lead' component='h4' className='text-center lg:w-2/3 w-[90%] m-auto mb-24 text-navy-blue'>
          iJuno starts working for your family team right now!
        </Typography>
        <div className='flex flex-wrap justify-center md:justify-between gap-10'>
          {HOW_IT_WORKS_INFOS.map((item, index) => (
            <div key={index} className='justify-start lg:w-[25%] md:w-[40%] w-[75%]'>
              <Typography variant='h5' component='h5' className='text-left mb-4'>
                {item.step}
              </Typography>
              <Typography variant='h5' component='h5' className='text-left mb-4'>
                {item.title}
              </Typography>
              <Typography variant='h5' component='h5' className='text-left mb-10'>
                assistant
              </Typography>

              <img src={item.image} className='rounded-2xl shadow-md' />
              <Typography className='mt-10'>{item.text}</Typography>
            </div>
          ))}
        </div>

        <Typography variant='lead' className='text-navy-blue  text-center mt-32 mb-4'>
          Become a pioneer in transforming family management. ‍
        </Typography>
        <Typography variant='lead' className='text-navy-blue  text-center mb-4'>
          ‍ Sign up now for exclusive access and be the first to embrace a more organized life. ‍
        </Typography>
        <Typography variant='lead' className='text-navy-blue  text-center'>
          ‍ Smart, Simple, and Secure Family Management.
        </Typography>
        <div className='flex justify-center mt-20'>
          <Button className='mt-6 text-center'>
            <a href='https://airtable.com/appMTZr9idXPy9jtW/paggFgF1JX4DPLm62/form' target='_blank'>
              JOIN THE WAITING LIST
            </a>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default HowItWorksSection;
