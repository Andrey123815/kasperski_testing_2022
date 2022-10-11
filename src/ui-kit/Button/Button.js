import React from 'react';
import './Button.css';

function Button(props) {
  return (
    <React.Fragment>
      <button onClick={props.onClick} className="button-86" role="button">{props.children}</button>
    </React.Fragment>
  );
}

export default Button;
