import React from 'react';
import './tatami.css';

const Drawer = (props) => {
  const drawerClass = props.drawer ? 'open' : '';
  return (
    <div className={`drawer animated shadow-right ${drawerClass}`}>
      <div className="content">
        {props.children}
      </div>
    </div>
  );
};

Drawer.propTypes = {
  drawer: React.PropTypes.bool,
  children: React.PropTypes.node,
};

const Overlay = (props) => {
  const overlayClass = props.drawer ? 'open drawer' : props.dialog ? 'open' : '';
  const dialogClass = props.dialog ? 'dialog open' : 'dialog';
  return (
    <div>
    <div className={`overlay center centred ${overlayClass}`} onClick={props.toggleOverlay}>
    </div>
    <div className={`${dialogClass}`}>
        {props.dialogContent}
    </div>
    </div>
  );
};

Overlay.propTypes = {
  toggleOverlay: React.PropTypes.func,
  drawer: React.PropTypes.bool,
  dialog: React.PropTypes.bool,
  dialogContent: React.PropTypes.bool,
};

const Container = (props) => {
  const passToggleDrawer = (child) =>
    React.cloneElement(child, { toggleDrawer: props.toggleDrawer, toggleDialog: props.toggleDialog });

  return (
    <div className="container animated">
      <div id="searchbar" />
      {React.Children.map(props.children, passToggleDrawer)}
    </div>
  );
};

Container.propTypes = {
  toggleDrawer: React.PropTypes.func,
  children: React.PropTypes.node,
};

const Toolbar = (props) => (
  <div className="toolbar animated">
    {props.children}
  </div>
);

Toolbar.propTypes = {
  children: React.PropTypes.node,
};

class Tatami extends React.Component {

  static propTypes = {
    children: React.PropTypes.node,
  }

  state = { drawer: false, dialog: false, dialogContent: null };

  toggleDrawer = (forced) => {
    const drawerState = forced != null ? forced : !this.state.drawer;
    this.setState({ drawer: drawerState });
  }

  toggleDialog = (dialog) => {
    this.setState({ dialog: !this.state.dialog , dialogContent: dialog});
  }

  toggleOverlay = () => {
    if (this.state.dialog) this.toggleDialog();
    if (this.state.drawer) this.toggleDrawer();
  }

  passTogglers = (child) =>
    React.cloneElement(child, {
      drawer: this.state.drawer,
      dialog: this.state.dialog,
      dialogContent: this.state.dialogContent,
      toggleDrawer: this.toggleDrawer,
      toggleDialog: this.toggleDialog,
      toggleOverlay: this.toggleOverlay,
    });

  render() {
    return (
      <div className="tatami">
        {React.Children.map(this.props.children, this.passTogglers)}
      </div>
    );
  }
}

export { Tatami, Drawer, Overlay, Toolbar, Container };
