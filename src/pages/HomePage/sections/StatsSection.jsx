import { useId } from 'react';
import Container from '../../../ui/components/container/Container';
import { STATS_INFOS } from '../datas/dataStats';

const StatsSection = () => {
  let id = useId();
  return (
    <Container className='lg:mb-40  lg:mt-[20rem]   max-[820px]:mt-[30rem]   md:mt-80'>
      <ul className='flex flex-wrap lg:justify-between justify-center  md:gap-x-10 mb-20  gap-y-16 lg:mt-40  lg:gap-x-0 '>
        {STATS_INFOS.map((item, index) => (
          <li key={id + index} className='justify-sel '>
            <img
              src={item.image}
              className='2xl:w-[20rem] xl:w-[18rem] lg:w-[14rem] lg:min-[912px]:mt-1 md:w-[20rem] w-[17rem] h-[20rem] min-[390px]:w-[18rem] object-cover rounded-2xl shadow-md '
            />
          </li>
        ))}
      </ul>
    </Container>
  );
};
export default StatsSection;
