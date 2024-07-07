import { useId } from 'react';
import Section from '../../../ui/components/container/Section';
import { Typography } from '../../../ui/design-system/typography/Typography';
import { ADVISORY_BOARD_SECTION_DATA } from '../datas/advisoryBoard';
import { FaLinkedin } from 'react-icons/fa';

const AdvisoryBoard = () => {
  let id = useId();
  return (
    <Section title='Advisory Board' id='advisoryBoard'>
      <Typography variant='body-base' component='h5' className='w-[75%] lg:w-[60%] text-center m-auto mb-20 mt-10'>
        As we are dealing with family sensitive information, at iJuno, we will build the app integrating these values by
        design. .
      </Typography>
      <ul className='flex flex-wrap justify-center md:justify-between lg:justify-center gap-y-16 p-10 '>
        {ADVISORY_BOARD_SECTION_DATA.map((item, index) => (
          <li
            key={id + index}
            className='flex flex-col md:flex-none justify-center  items-center w-[70%] md:w-[50%] lg:w-[30%] '>
            <img
              src={item.image}
              alt=''
              className='rounded-full lg:w-40 lg:h-40 mb-4 w-[10rem] h-[10rem] object-cover shadow-md'
            />
            <div>
              <Typography variant='h5' component='h5' className=' text-center flex justify-center items-center '>
                {item.name}

                <a href={item.linkedin} className='ml-4' target='_blank'>
                  <FaLinkedin />
                </a>
              </Typography>
              <Typography variant='body-base' component='p' className=' text-center'>
                {item.poste}
              </Typography>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
};
export default AdvisoryBoard;
