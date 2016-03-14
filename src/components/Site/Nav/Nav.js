import React, {Component} from "react";

import Btn from 'components/Global/Btn/Btn';
import Wrapper from 'components/Global/Wrapper/Wrapper';

import s from './Nav.css'

export default class Nav extends Component {
  render() {
    return (
      <nav className={s.root}>
        <Wrapper>
          <div className={s.logo}>
            HMU.<span className={s.emoji}>🕶</span>
          </div>
          <a href="/login" className={s.link}>
            Log in
          </a>
        </Wrapper>
      </nav>
    )
  }
}
