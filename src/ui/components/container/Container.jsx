import clsx from 'clsx';

const Container = ({ children, className }) => {
  return (
    <div
      className={clsx(
        'h-full',
        'm-auto',
        'mb-20',
        '2xl:w-[80%]',
        'lg:max-w-[88%]',
        'md:w-[80%]',
        'sm:w-[90%]',
        'min-[412px]:w-[90%]',
        'w-[90%]',

        className
      )}>
      {children}
    </div>
  );
};

export default Container;
