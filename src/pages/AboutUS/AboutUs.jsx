import AdvisoryBoard from './section/AdvisoryBoard';
import HeroAboutUs from './section/HeroAboutUs';
import OurHistory from './section/OurHistory';
import TeamAbout from './section/TeamAbout';

const AboutUs = () => {
  return (
    <main id='aboutUs'>
      <HeroAboutUs />
      <TeamAbout />
      <AdvisoryBoard />
      <OurHistory />
    </main>
  );
};
export default AboutUs;
