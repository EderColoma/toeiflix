import React from 'react';
import PropTypes from 'prop-types';

function ButtonLink({
  className, to, as, children,
}) {
  return (
    <a className={className} href={to} as={as}>
      {children}
    </a>
  );
}

ButtonLink.defaultProps = {
  children: '',
};

ButtonLink.propTypes = {
  className: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  as: PropTypes.string.isRequired,
  children: PropTypes.string,
};

export default ButtonLink;
