import PropTypes from 'prop-types';
import Container from './Container';
import { Typography } from '../../design-system/typography/Typography';

const Section = ({ title, children, variant = 'h2', component = 'h2', className = 'text-center', ...props }) => {
  return (
    <section className='mt-20 mb-30' {...props}>
      <Container>
        <Typography variant={variant} component={component} className={className}>
          {title}
        </Typography>
        {children}
      </Container>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  variant: PropTypes.string,
  component: PropTypes.string,
  className: PropTypes.string,
};

export default Section;

// import { Typography } from '../../ui/design-system/typography/Typography';
// import Container from './Container';
// export default function Section({
//   title,
//   children,
//   variant = 'h2',
//   component = 'h2',
//   className = 'text-center ',
//   ...props
// }) {
//   return (
//     <section className='mt-20 mb-30'>
//       <Container>
//         <Typography variant={variant} component={component} className={className}>
//           {title}
//         </Typography>
//         {children}
//       </Container>
//     </section>
//   );
// }
