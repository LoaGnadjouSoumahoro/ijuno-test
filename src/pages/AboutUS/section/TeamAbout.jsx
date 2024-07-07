import { useId } from 'react';
import Section from '../../../ui/components/container/Section';
import { Typography } from '../../../ui/design-system/typography/Typography';
import { TEAM_ABOUT_SECTION_DATA } from '../datas/teamAboutSectionData';
import { FaLinkedin } from 'react-icons/fa';

const TeamAbout = () => {
  let id = useId();
  return (
    <Section title='Our Team' id='ourTeam'>
      <Typography variant='body-base' component='h5' className='w-[75%] lg:w-[60%] text-center m-auto mb-20 mt-10'>
        Inspiring a lot of people, iJuno’s project has gathered a team of enthusiastic collaborators who want to make
        the world a better place with AI.
      </Typography>
      <ul className='flex flex-wrap justify-center md:justify-between lg:justify-center gap-y-16 p-10 '>
        {TEAM_ABOUT_SECTION_DATA.map((item, index) => (
          <li
            key={id + index}
            className='flex flex-col md:flex-none justify-center  items-center w-[70%] md:w-[50%] lg:w-[30%] '>
            <img
              src={item.image}
              alt=''
              className='rounded-full lg:w-40 lg:h-40 mb-4 w-[10rem] h-[10rem] object-cover shadow-md '
            />
            <div>
              <Typography variant='h5' component='h5' className=' flex justify-center'>
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
export default TeamAbout;
