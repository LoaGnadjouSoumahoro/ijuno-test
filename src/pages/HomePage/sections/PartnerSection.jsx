import { useId } from 'react';
import Container from '../../../ui/components/container/Container';
import { Typography } from '../../../ui/design-system/typography/Typography';
import { PARTNER_INFOS } from '../datas/dataPartner';

const PartnerSection = () => {
  let id = useId();
  return (
    <Container className='lg:mb-52 mt-[12rem] md:mt-[10rem] md:mb-20'>
      <Typography variant='h2' component='h2' className='text-center font-bold w-full lg:mt-10 lg:mb-10 md:mt-20'>
        Supported by
      </Typography>
      <ul className=' grid grid-cols-1 lg:grid-cols-3 md: justify-items-center md:grid-cols-2 gap-1 mb-20  gap-y-16 mt-20 lg:mt-40 md:mt-20 '>
        {PARTNER_INFOS.map((item, index) => (
          <li key={id + index}>
            <img src={item.image} className='shadow-md rounded-2xl' />
          </li>
        ))}
      </ul>
    </Container>
  );
};
export default PartnerSection;
