import React from 'react';
import { Tatami, Drawer, Overlay, Toolbar, Container }  from './tatami/tatami';
import './app.css';
import './palette-indigo.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Tatami>
          <Drawer>drawer</Drawer>
          <Container><div>container</div></Container>
          <Toolbar>toolbar</Toolbar>
          <Overlay>xxx</Overlay>
        </Tatami>
        <div className="loader">
          <svg viewBox="0 0 32 32" width="32" height="32">
            <circle id="spinner" cx="16" cy="16" r="14" fill="none"></circle>
          </svg>
        </div>
      </div>
    );
  }
}

export default App;
