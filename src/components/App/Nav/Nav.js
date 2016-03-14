import React, {Component} from 'react';
import s from './Nav.css';

export default class Nav extends Component {
  render() {
    const {children} = this.props;
    return (
      <div className={s.root}>
        <div className={s.logo}>
          HMU.<span className={s.emoji}>🕶</span>
        </div>
      </div>
    );
  }
}
