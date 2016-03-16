import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import s from './Nav.css';

class Nav extends Component {

  signOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    this.context.router.push('/');
  }
  render() {
    const {children} = this.props;
    return (
      <div className={s.root}>
        <div className={s.logo}>
        <Link to="/">HMU.<span className={s.emoji}>🕶</span></Link>
        </div>
        <div className={s.links}>
          <Link to="/app/messages">Messages</Link>
          <Link to="/app/settings">Settings</Link>
          <Link to="/docs">Docs</Link>
          <a onClick={() => this.signOut() }>Sign out</a>
        </div>
      </div>
    );
  }
}

Nav.contextTypes = {
  router: React.PropTypes.object.isRequired,
}

export default Nav;
