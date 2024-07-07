import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { FAQS_INFOS } from '../datas/dataFAQs';
import Container from '../../../ui/components/container/Container';
import { Typography } from '../../../ui/design-system/typography/Typography';

const FAQs = () => {
  const [openAccordionId, setOpenAccordionId] = useState(null);

  const handleAccordionToggle = (id) => {
    setOpenAccordionId(openAccordionId === id ? null : id);
  };

  return (
    <section className='mb-52' id='faqs'>
      <Container>
        <Typography variant='h2' component='h2' className=' mb-20 '>
          FAQs
        </Typography>
        {/* Section accordion */}
        {FAQS_INFOS.map((item, index) => (
          <div key={index} className='   border-t border-turquoise  border-x-none'>
            <button
              className='flex justify-between items-center w-full mt-5 '
              onClick={() => handleAccordionToggle(index)}>
              <Typography variant='h4' component='span'>
                {item.title}
              </Typography>
              {openAccordionId === index ? (
                <Typography variant='h4'>
                  <IoIosArrowDown />
                </Typography>
              ) : (
                <Typography variant='h4'>
                  <IoIosArrowForward />
                </Typography>
              )}
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                openAccordionId === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}>
              <Typography className='overflow-hidden mt-4 mb-4'>{item.description}</Typography>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default FAQs;
