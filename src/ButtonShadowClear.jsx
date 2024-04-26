import React from 'react';
import styles from './app.module.css';

export const ButtonShadowClear = ({ number, onClick }) => {
    
  const handleMouseDown = (event) => {
    event.target.classList.add(styles['button-shadow']);
  };

  const handleMouseUp = (event) => {
    event.target.classList.remove(styles['button-shadow']);
  };

  const handleMouseLeave = (event) => {
    event.target.classList.remove(styles['button-shadow']);
  };

  return (
    <button
      className={`${styles.calculatorClear}`}
      onClick={() => onClick(number)}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      {number}
    </button>
  );
};