import React from 'react';
import './split.css';

const Split = (props) => {
  return (
    <div className="split horizontal">
      {props.children}
    </div>
  );
};

Split.propTypes = {
  children: React.PropTypes.node,
};

export default Split;
