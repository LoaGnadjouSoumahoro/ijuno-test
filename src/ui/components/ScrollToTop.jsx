import arrowTop from '../../medias/svg/arrowTop.svg';

const ScrollToTop = () => {
  return (
    <div>
      <a href='#'>
        <img
          src={arrowTop}
          alt=''
          className='-translate-y- -translate-x-5 hover:bg-dark-turquoise/25 hover:rounded-full '
        />
      </a>
    </div>
  );
};
export default ScrollToTop;
