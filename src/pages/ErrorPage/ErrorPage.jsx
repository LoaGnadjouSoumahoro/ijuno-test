import { Link } from 'react-router-dom';
import { Typography } from '../../ui/design-system/typography/Typography';
import Container from '../../ui/components/container/Container';
import { IoIosArrowBack } from 'react-icons/io';

const ErrorPage = () => {
  return (
    <Container>
      <Typography variant='h2' component='h2'>
        Page Not Found
      </Typography>
      <Typography>
        Looks like you've followed a broken link or entered a URL that doesn't exist on this site.
        <Link to='/'>
          <IoIosArrowBack />
          <span className='text-navy-blue font-semibold decoration-navy-blue'> Back to our site</span>
        </Link>
      </Typography>
    </Container>
  );
};
export default ErrorPage;
