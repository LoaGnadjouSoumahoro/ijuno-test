import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';

export const ActiveLink = ({ href, children }) => {
  const location = useLocation();
  const isActive = useMemo(() => {
    return location.pathname === href;
  }, [location.pathname, href]);

  return (
    <Link to={href} className={clsx(isActive && 'text-dark-turquoise decoration-solid')}>
      {children}
    </Link>
  );
};

ActiveLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
