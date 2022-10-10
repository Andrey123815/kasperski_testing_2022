import React from 'react';

function Button(props) {
  return (
    <React.Fragment>
      <button onClick={props.onClick} className="button-86" role="button">{props.children}</button>
    </React.Fragment>
  );
}
