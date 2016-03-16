import React, {Component} from 'react';
import {Link} from 'react-router';
import s from './Nav.css';

export default class Nav extends Component {
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
        </div>
      </div>
    );
  }
}
