import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export const Typography = ({
  variant = 'body-base',
  component = 'p',
  theme = 'turquoise',
  weight = 'regular',
  className,
  children,
}) => {
  let variantStyles = '';
  let themeStyles = '';

  switch (variant) {
    case 'display':
      variantStyles =
        'text-6xl lg:text-8xl leading-[2.5rem] font-heavitas text-dark-turquoise leading-normal tracking-normal font-bold  uppercase';
      break;
    case 'h1':
      variantStyles =
        'text-4xl lg:leading-[4.2rem] md:text-6xl lg:text-5xl font-heavitas text-dark-turquoise lg:leading-normal tracking-normal font-bold mb-10 uppercase';
      break;
    case 'h2':
      variantStyles =
        'text-3xl leading-[2.25rem] md:text-4xl md:leading-[3.7rem] lg:text-5xl lg:leading-tight  font-poppins  text-dark-turquoise leading-normal  font-bold  uppercase';
      break;
    case 'h3':
      variantStyles =
        'text-2xl md:4xl lg:text-3xl  font-poppins  text-dark-turquoise lg:leading-normal tracking-normal font-bold normal-case';
      break;
    case 'h4':
      variantStyles =
        'text-xl md:text-3xl lg:text-2xl font-poppins  text-dark-turquoise leading-tight tracking-normal font-semibold normal-case ';
      break;
    case 'h5':
      variantStyles =
        'text-lg md:text-2xl lg:text-xl font-poppins  text-dark-turquoise leading-tight tracking-normal font-semibold normal-case';
      break;
    case 'lead':
      variantStyles = 'text-lg lg:text-xl md:text-xl  font-poppins text-[#5bbfc2]  tracking-normal lg:leading-[2.2] ';
      break;
    case 'body-lg':
      variantStyles = 'text-base md:text-lg font-poppins text-navy-blue leading-loose tracking-normal';
      break;
    case 'body-base':
      variantStyles = 'text-base lg:text-lg font-poppins text-navy-blue lg:leading-[2.1rem] tracking-normal';
      break;
    case 'body-sm':
      variantStyles = 'text-sm font-poppins text-navy-blue leading-loose tracking-normal';
      break;
    case 'caption1':
      variantStyles = 'text-caption1 font-poppins text-navy-blue leading-loose';
      break;
    case 'caption2':
      variantStyles = 'text-caption2 font-poppins text-navy-blue leading-loose tracking-normal';
      break;
    case 'caption3':
      variantStyles = 'text-caption3 font-poppins text-dark-turquoise leading-snug tracking-normal';
      break;
    case 'caption4':
      variantStyles = 'text-caption4 font-poppins text-navy-blue leading-normal tracking-normal';
      break;
    default:
      variantStyles = 'text-base font-poppins text-navy-blue leading-loose tracking-normal'; // Fallback to body-base styles
      break;
  }

  switch (theme) {
    case 'turquoise':
      themeStyles = 'text-[#5bbfc2]';
      break;
    case 'dark-turquoise':
      themeStyles = 'text-[#3b9a9e]';
      break;
    case 'navy-blue':
      themeStyles = 'text-[#386fa4]';
      break;
    case 'white':
      themeStyles = 'text-[#ffffff]';
      break;
    case 'white-lilas':
      themeStyles = 'text-[#fefcf1]';
      break;
    case 'black':
      themeStyles = 'text-[#1D1D1D]';
      break;
    default:
      themeStyles = 'text-navy-blue'; // Fallback to turquoise theme
      break;
  }

  return React.createElement(component, { className: clsx(variantStyles, themeStyles, weight, className) }, children);
};

Typography.propTypes = {
  variant: PropTypes.oneOf([
    'display',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'lead',
    'body-lg',
    'body-base',
    'body-sm',
    'caption1',
    'caption2',
    'caption3',
    'caption4',
  ]),
  component: PropTypes.string,
  theme: PropTypes.oneOf(['turquoise', 'dark-turquoise', 'navy-blue', 'white', 'white-lilas', 'black']),
  weight: PropTypes.oneOf(['regular', 'medium', 'bold', 'semibold']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

// import React from 'react';
// import PropTypes from 'prop-types';
// import clsx from 'clsx';

// export const Typography = ({ variant = 'h3', component = 'div', className, children }) => {
//   // Ajout de className ici
//   let variantStyles = '';

//   switch (variant) {
//     case 'display':
//       variantStyles = 'text-8xl uppercase font-heavitas text-[#386fa4]';
//       break;
//     case 'h1':
//       variantStyles = 'text-7xl font-heavitas  text-[#386fa4]';
//       break;
//     case 'h2':
//       variantStyles = 'text-6xl  font-heavitas  text-[#386fa4]';
//       break;
//     case 'h3':
//       variantStyles = 'text-5xl  font-heavitas text-[#386fa4]';
//       break;
//     case 'h4':
//       variantStyles = 'text-4xl  font-heavitas text-[#386fa4]';
//       break;
//     case 'h5':
//       variantStyles = 'text-3xl  font-heavitas text-[#386fa4]';
//       break;
//     case 'lead':
//       variantStyles = 'text-2xl font-poppins text-[#5bbfc2]';
//       break;
//     case 'body-lg':
//       variantStyles = 'text-lg font-poppins  text-[#5bbfc2]';
//       break;
//     case 'body-base':
//       variantStyles = 'text-base font-poppins  text-[#5bbfc2]';
//       break;
//     case 'body-sm':
//       variantStyles = 'text-sm font-poppins  text-[#5bbfc2]';
//       break;
//     case 'caption1':
//       variantStyles = 'text-caption1 font-poppins text-[#5bbfc2]';
//       break;
//     case 'caption2':
//       variantStyles = 'text-caption2 font-poppins text-[#5bbfc2]';
//       break;
//     case 'caption3':
//       variantStyles = 'text-caption3 font-poppins text-[#5bbfc2]';
//       break;
//     case 'caption4':
//       variantStyles = 'text-caption4 font-poppins text-[#5bbfc2]';
//       break;

//     // Autres cas omis pour la brièveté...
//     default:
//       variantStyles = 'text-5xl font-heavitas text-[#386fa4]'; // Fallback to h3 styles
//       break;
//   }

//   return React.createElement(component, { className: clsx(variantStyles, theme, weight, className) }, children);
// };

// Typography.propTypes = {
//   variant: PropTypes.oneOf([
//     'display',
//     'h1',
//     'h2',
//     'h3',
//     'h4',
//     'h5',
//     'lead',
//     'body-lg',
//     'body-base',
//     'body-sm',
//     'caption1',
//     'caption2',
//     'caption3',
//     'caption4',
//   ]),
//   component: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'div', 'p', 'span']),
//   theme: PropTypes.oneOf(['turquoise', 'dark-turquoise', 'navy-blue', 'white', 'lilas-white', 'black']),
//   weight: PropTypes.oneOf(['regular', 'medium', 'bold', 'semibold']),
//   className: PropTypes.string, // Déclaration de la prop className
//   children: PropTypes.node.isRequired,
// };
