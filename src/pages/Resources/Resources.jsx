import FAQs from './sections/FAQs';
import PressKit from './sections/PressKit';
import PrivacyTerms from './sections/PrivacyTerms';
import TermsConditions from './sections/TermsConditions';
import Container from '../../ui/components/container/Container';
import { Typography } from '../../ui/design-system/typography/Typography';

const Resources = () => {
  return (
    <main id='resources'>
      <Container>
        <Typography variant='h1' component='h1' className='font-bold text-center mt-20 mb-20'>
          RESOURCES
        </Typography>
        <div className='  lg:w-full'></div>
      </Container>

      <FAQs />
      <PressKit />
      <PrivacyTerms />
      <TermsConditions />
    </main>
  );
};
export default Resources;
