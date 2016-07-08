import React from 'react';
import './split.css';

const SplitPanel = (props) => {
  const closed = props.closed ? 'closed' : '';
  const classes = props.className ? props.className : '';
  return (
    <div className={`split-panel ${closed} ${classes} animated-fast`}>{props.children}</div>
  );
};

SplitPanel.propTypes = {
  children: React.PropTypes.node,
  closed: React.PropTypes.bool,
  className: React.PropTypes.string,
};

const Split = (props) => {
  const direction = 'horizontal';
  return (
    <div className={`split ${direction}`}>
        {props.children}
    </div>
  );
};

Split.propTypes = {
  children: React.PropTypes.node,
  direction: React.PropTypes.string,
};

export { Split, SplitPanel };
