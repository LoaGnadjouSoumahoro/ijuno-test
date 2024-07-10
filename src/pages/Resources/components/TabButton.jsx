import { Typography } from '../../../ui/design-system/typography/Typography';

export default function TabButton({ image, title }) {
  return (
    <div>
      <div className=' 2xl:py-4 hover:border hover:rounded-t-lg  border border-turquoise h-[6rem] 2xl:w-[18.5rem] xl:w-[15.5rem] lg:w-[12.5rem] md:w-[9.5rem]  w-[5rem] sm:w-[7.7rem] rounded-t-lg flex  justify-center items-center '>
        <img src={image} alt='' className='md:w-[25%] w-[20%] lg:block hidden ' />

        <Typography variant='h5' component='h2' className=' text-sm md:text-base'>
          {title}
        </Typography>
      </div>
    </div>
  );
}
