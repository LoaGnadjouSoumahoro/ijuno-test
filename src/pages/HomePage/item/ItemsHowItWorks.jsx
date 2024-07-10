import { Typography } from '../../../ui/design-system/typography/Typography';

const ItemsHowItWorks = ({ image, title, text }) => {
  return (
    <div>
      <div>
        <img src={image} alt='' />
        <div>
          <Typography variant='lead' component='h4' className='font-semibold leading-tight mt-6 mb-4 '>
            {title}
          </Typography>
          <Typography variant='body-base' component='p'>
            {text}
          </Typography>
        </div>
      </div>
    </div>
  );
};
export default ItemsHowItWorks;
