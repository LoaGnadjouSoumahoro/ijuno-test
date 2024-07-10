import Section from '../../../ui/components/container/Section';
import Container from '../../../ui/components/container/Container';
import { Typography } from '../../../ui/design-system/typography/Typography';
import mail from '../images/mail.svg';
import mobile from '../images/mobile.svg';
import Button from '../../../ui/design-system/elements/Button';

const ContactUsAbout = () => {
  return (
    <Section title='Contact Us' className='mb-20 text-center'>
      <Container className='mb-32 '>
        <div className=''>
          <div className='flex items-center gap-x-4 mb-4'>
            <img src={mobile} alt='' className='w-8 h-8' />
            <Typography>+ 1 555 505 07</Typography>
          </div>
          <div className='flex items-center gap-x-4 mb-4'>
            <img src={mail} alt='' className='w-8 h-8' />
            <a href='mailto:ijuno@gmail.com'>
              <Typography>ijuno@gmail.com</Typography>
            </a>
          </div>
          <div className='flex justify-center mt-20'>
            <Button className=' mt-6 text-center'>
              <a href='https://airtable.com/appMTZr9idXPy9jtW/paggFgF1JX4DPLm62/form' target='_blank'>
                JOIN THE WAITING LIST
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};
export default ContactUsAbout;
