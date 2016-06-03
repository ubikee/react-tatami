import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Tatami, Drawer, Overlay, Toolbar, Container } from './tatami/tatami';
import './app.css';
import './palette-indigo.css';

const Cover = () => (
  <div className="dark-primary-color">
    <h1>React-Tatami</h1>
  </div>
);

const Layout = (props) => (
  <Tatami>
    <Drawer>drawer</Drawer>
    <Container>{props.children}</Container>
    <Toolbar>toolbar</Toolbar>
    <Overlay>xxx</Overlay>
  </Tatami>
);

Layout.propTypes = {
  children: React.PropTypes.node,
};

const App = () => (
  <Router>
    <Route path="/" component={Layout}>
      <IndexRoute component={Cover} />
    </Route>
  </Router>
);

export default App;
