import React from 'react';

import '../css/button.css';


export const Button = (props) => {
  return (
    <button
      className={ props.light ? 'light-button' : 'dark-button' }
      onClick={props.onClick}>
        Refresh color
    </button>
  );
};
