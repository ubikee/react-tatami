import React from 'react';
import './grid.css';

const TileInfo = (props) => (
  <div className="info">
    <h3 style={{lineHeight:'1.4'}}>{props.text1}</h3>
    <h5 style={{lineHeight:'1.4'}}>{props.text2}</h5>
  </div>
);

const Tile = (props) => {
  const renderHeader = () => props.text1 ? (<TileInfo text1={props.text1} text2={props.text2} />) : (<div className="expand" />);
  const renderFooter = () => props.text3 ? (<TileInfo text1={props.text3} text2={props.text4} />) : (<div className="expand" />);
  return (
    <div className="tile">
      {renderHeader()}
      <div className="media">
        <img src={props.img} width="100%"/>
      </div>
      {renderFooter()}
    </div>
  );
};

const Grid = (props) => {
  const wrap = (item) => (<div className="griditem">{item}</div>);
  const items = React.Children.map(props.children, wrap);
  return (
    <div className="grid">
      {items}
    </div>
  );
};

Grid.propTypes = {
  children: React.PropTypes.node,
};

export { Grid, Tile };
