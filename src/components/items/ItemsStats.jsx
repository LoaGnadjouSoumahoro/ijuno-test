import { Typography } from '../../ui/design-system/typography/Typography';

const ItemsStats = ({ title, text }) => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center border border-turquoise py-8 px-2 rounded-xl'>
      <Typography variant='h4' component='h4' className='mb-4'>
        {title}
      </Typography>
      <Typography variant='body-base' component='p' className='w-10/12 text-center h-[7rem]  rounded-lg'>
        {text}
      </Typography>
    </div>
  );
};
export default ItemsStats;
