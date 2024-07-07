import PropTypes from 'prop-types';
import clsx from 'clsx';

const Button = ({
  size = 'medium',
  variant = 'accent',
  icon,
  iconTheme = 'accent',
  iconPosition = 'right',
  disabled,
  isLoading,
  children,
}) => {
  let variantStyles = '';
  let sizeStyles = '';

  switch (variant) {
    case 'accent':
      variantStyles = 'bg-turquoise hover:opacity-70 text-white rounded-[10px]';
      break;
    case 'secondary':
      variantStyles = 'bg-turquoise/20 hover:opacity-70 text-dark-turquoise rounded-[10px]';
      break;
    case 'outline':
      variantStyles = 'bg-white-lilas hover:bg-gray/50 text-gray-900 border border-gray rounded-[10px]';
      break;
    case 'disabled':
      variantStyles = 'bg-gray-400 border border-gray-500 text-gray-600 rounded-[10px] cursor-not-allowed';
      break;
    case 'ico':
      if (iconTheme === 'accent') {
        variantStyles = 'bg-turquoise hover:opacity-70 text-white rounded-full';
      } else if (iconTheme === 'secondary') {
        variantStyles = 'bg-turquoise/20 hover:opacity-70 text-dark-turquoise rounded-full';
      } else if (iconTheme === 'gray') {
        variantStyles = 'bg-gray-700 hover:bg-gray-600 text-dark-turquoise rounded-full';
      }
      break;
    default:
      break;
  }

  switch (size) {
    case 'small':
      sizeStyles = 'text-caption3 font-medium lg:px-[14px] py-[12px] px-[8px]';
      break;
    case 'medium': // Default
      sizeStyles = 'text-caption2 font-medium lg:px-[18px] py-[15px] px-[10px]';
      break;
    case 'large':
      sizeStyles = 'text-caption1 font-medium lg:px-[22px] py-[18px]';
      break;
    default:
      break;
  }

  return (
    <button
      type='button'
      className={clsx(variantStyles, sizeStyles)}
      onClick={() => console.log('click')}
      disabled={disabled}>
      {icon && iconPosition === 'left' && <span className='mr-2'>{icon}</span>}
      {variant === 'ico' ? icon : children}
      {icon && iconPosition === 'right' && <span className='ml-2'>{icon}</span>}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['accent', 'secondary', 'outline', 'disabled', 'ico']),
  icon: PropTypes.any,
  iconTheme: PropTypes.oneOf(['accent', 'secondary', 'gray']),
  iconPosition: PropTypes.oneOf(['left', 'right']),
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Button;
