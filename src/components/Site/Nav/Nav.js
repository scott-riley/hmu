import React, {Component} from "react";
import {Link} from 'react-router';
import Btn from 'components/Global/Btn/Btn';
import Wrapper from 'components/Global/Wrapper/Wrapper';

import s from './Nav.css'

export default class Nav extends Component {
  render() {
    // const token = localStorage ? localStorage.getItem('token') : null;
    return (
      <nav className={s.root}>
        <Wrapper>
          <div className={s.logo}>
            HMU.<span className={s.emoji}>🕶</span>
          </div>
          <Link to="app/login" className={s.link}>
            Log in
          </Link>
        </Wrapper>
      </nav>
    )
  }
}
