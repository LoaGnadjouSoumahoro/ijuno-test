import Container from '../../../ui/components/container/Container';
import { Typography } from '../../../ui/design-system/typography/Typography';

const DescriptionSection = () => {
  return (
    <Container className='sm:mt-52 lg:mb-36 mb-26'>
      <div>
        <Typography variant='h2' component='h2' className='text-center font-bold w-full mt-[-10rem] mb-20'>
          Add an extra brain to your family to stay on top of family's needs and teach kids collaboration around family
          projects and chores.
        </Typography>
      </div>
      <div className='description-text'>
        <Typography variant='body-base' component='p' className=' mb-20 text-ju'>
          Life's a wild ride — manage it like a boss! Running a family is no small feat—it's basically like being the
          unpaid CEO of your very own quirky startup. From juggling soccer practices to remembering vet appointments and
          making sure everyone's fed, it's downright exhausting. But don't sweat it, we've got your back! Introducing
          iJuno, your new digital sidekick! Powered by AI, it's more than just an app; it's your personal family wizard.
          Imagine having a smart assistant who knows you’re out of milk before you even open the fridge, or reminds you
          to renew passports without you breaking a sweat. Store everything from vaccination records to that
          super-important boiler maintenance guide. We'll ping you with handy reminders for passport renewals, upcoming
          vaccinations, and even when it's time to service the boiler. Get the whole gang involved! Our shared to-do
          lists, reminders, and calendars mean everyone knows what's up, from family game nights to grandma’s big
          birthday bash. And with our chore planner, everyone chips in. Timmy takes out the dog, Dad handles the dishes,
          and you? You’re already winning at life. Planning dinner? Leave it to us. Our AI-powered meal planner
          considers allergies, likes, and dislikes, spinning up meals that are sure to please the pickiest of eaters.
          Ready to make family management a breeze? Let iJuno take the wheel. Your family’s new adventure starts now! ‍
        </Typography>
      </div>
    </Container>
  );
};
export default DescriptionSection;
