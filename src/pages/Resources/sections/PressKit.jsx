import { useId, useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import Container from '../../../ui/components/container/Container';
import { Typography } from '../../../ui/design-system/typography/Typography';
import { PRESS_KIT_INFO } from '../datas/dataPressKit';

const PressKit = () => {
  const [openAccordionId, setOpenAccordionId] = useState(null);

  const handleAccordionToggle = (newId) => {
    setOpenAccordionId((prevOpenAccordionId) => (prevOpenAccordionId === newId ? null : newId));
  };

  return (
    <section className='mb-40' id='pressKit'>
      <Container>
        <Typography variant='h2' component='h2' className='mb-20'>
          Press Kit
        </Typography>

        {PRESS_KIT_INFO.map((item, index) => {
          const id = useId() + index;
          return (
            <div key={id} className='bg-gray-200 rounded-[10px] mb-4 '>
              <button
                className='w-full flex justify-between bg-gray-200 rounded-[10px] items-center mb-2 px-4'
                onClick={() => handleAccordionToggle(id)}>
                <div className='flex justify-center items-center gap-4 translate-y-1'>
                  <img src={item.image} alt='' className='w-[4rem] h-[6rem] object-cover rounded-[10px] mb-2' />
                  <div>
                    <Typography variant='h5' component='h5'>
                      {item.mane}
                    </Typography>
                    <Typography variant='body-base' component='p' className='text-justify'>
                      {/* {item.poste} */}
                    </Typography>
                  </div>
                </div>
                <Typography variant='h3' className='translate-y-5'>
                  <BsThreeDots />
                </Typography>
              </button>
              {openAccordionId === id && (
                <div className='grid overflow-x-hidden transition-all duration-300 ease-in-out grid-rows-[1fr] opacity-100 px-4'></div>
              )}
            </div>
          );
        })}
      </Container>
    </section>
  );
};

export default PressKit;
