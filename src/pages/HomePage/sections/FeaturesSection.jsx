import { useId } from 'react';
import { ASSISTANT_TOOLBOX, FEATURES_INFOS } from '../datas/dataFeatures';
import Container from '../../../ui/components/container/Container';
import { Typography } from '../../../ui/design-system/typography/Typography';
import Button from '../../../ui/design-system/elements/Button';

const FeaturesSection = () => {
  const id = useId();

  return (
    <div id='features' className='mt-40 mb-40'>
      <Container>
        <Typography variant='h2' component='h2' className='text-center mb-10'>
          FEATURES
        </Typography>
        <Typography variant='h4' component='h4' className='text-navy-blue text-center lg:w-2/3 w-full m-auto mb-6'>
          All-in-one multi-roles Assistant
        </Typography>
        <Typography variant='lead' component='h4' className='text-center lg:w-2/3 w-full m-auto mb-2 text-navy-blue'>
          Every role is powered with AI and automation to make your assistant more efficient.
        </Typography>
        <div>
          <Typography variant='lead' component='h4' className='text-center lg:w-2/3 w-full m-auto mb-2 text-navy-blue'>
            The assistant will work with this toolbox:
          </Typography>
          <div className='grid place-content-center text-center mt-10 mb-20'>
            {ASSISTANT_TOOLBOX.map((item, index) => (
              <Typography key={index} className='mb-4 '>
                {item.text}
              </Typography>
            ))}
          </div>
          <div>
            <div className=' flex flex-wrap justify-center gap-x-10 gap-y-20'>
              {FEATURES_INFOS.map((item, index) => (
                <div key={id + index} className=' justify-self-center lg:w-[30%] md:w-[40%] w-[75%]'>
                  <div>
                    <img src={item.image} alt='' className='object-cover rounded-2xl shadow-md' />
                  </div>
                  <div className='flex flex-col justify-center'>
                    <Typography
                      variant='lead'
                      component='h4'
                      className='font-semibold text-dark-turquoise leading-8 mb-4 mt-6 '>
                      {item.title}
                    </Typography>
                    <Typography variant='body-lg' component='p'>
                      {item.text}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='flex justify-center mt-20'>
            <Button className='mt-6 text-center'>
              <a href='https://airtable.com/appMTZr9idXPy9jtW/paggFgF1JX4DPLm62/form' target='_blank'>
                JOIN THE WAITING LIST
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default FeaturesSection;
