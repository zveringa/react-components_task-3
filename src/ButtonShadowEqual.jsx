import React from 'react';
import styles from './app.module.css';

import PropTypes from 'prop-types';

export const ButtonShadowEqual = ({ number, onClick, disabled}) => {
    
  const handleMouseDown = (event) => {
    event.target.classList.add(styles['button-shadow']);
  };

  const handleMouseUp = (event) => {
    event.target.classList.remove(styles['button-shadow']);
  };

  const handleMouseLeave = (event) => {
    event.target.classList.remove(styles['button-shadow']);
  };

  const buttonClassNames = `${styles.calculatorEqual} ${disabled ? styles.disabled : ''} `;

  return (
    <button
      className={buttonClassNames}
      onClick={() => onClick(number)}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      disabled={disabled}
    >
      {number}
    </button>
  );
};
ButtonShadowEqual.propTypes = {
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};
