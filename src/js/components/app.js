import React from 'react';
import { Tatami, Drawer, Overlay, Toolbar, Container } from './tatami/tatami';
import './app.css';
import './palette-indigo.css';

const App = () => (
  <div>
    <Tatami>
      <Drawer>drawer</Drawer>
      <Container><div>container</div></Container>
      <Toolbar>toolbar</Toolbar>
      <Overlay>xxx</Overlay>
    </Tatami>
  </div>
);

export default App;
