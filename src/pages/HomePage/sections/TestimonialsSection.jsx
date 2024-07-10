import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Typography } from '../../../ui/design-system/typography/Typography';
import { TESTIMONIALS_DATA } from '../datas/dataTestimonials';
import Container from '../../../ui/components/container/Container';

const TestimonialsSection = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='mt-32 mb-20 md:mb-0 w-full '>
      <Container>
        <Typography variant='h2' component='h2' className='font-bold text-center '>
          Testimonials
        </Typography>
        <div className='w-full m-auto'></div>
        <div className='mt-20 px-8  '>
          <Slider {...settings}>
            {TESTIMONIALS_DATA.map((item, index) => (
              <div
                key={index}
                className='min-h-[15rem] rounded-2xl  border border-dark-turquoise my-10 grid place-content-center
                  relative shadow shadow-dark-turquoise/50 p-4 xs:bg-red 2xs:bg-green'>
                <span className='text-[50px] md:text-[100px] lg:text-[150px] absolute -top-[1.3rem]  md:-top-[2.4rem] lg:-top-[3.5rem] left-3'>
                  ❝
                </span>
                <div>
                  <Typography className='text-navy-blue text-center mt-5 '>{item.review}</Typography>

                  <div className='  mt-3 '>
                    <Typography variant='caption3' className='text-dark-turquoise font-semibold mb-2 text-center'>
                      {item.name}
                    </Typography>
                    <Typography variant='caption3' className='text-dark-turquoise  mb-2 text-center'>
                      {item.member}
                    </Typography>
                    <Typography variant='caption3' className='text-dark-turquoise  mb-5 text-center'>
                      {item.job}
                    </Typography>
                  </div>
                </div>
                <span className='text-[50px] md:text-[100px] lg:text-[150px] absolute  -bottom-[2.6rem] md:-bottom-[5rem] lg:-bottom-[7.5rem] right-3'>
                  ❞
                </span>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};
export default TestimonialsSection;
