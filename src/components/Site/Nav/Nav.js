import React, {Component} from "react";

import Btn from 'components/Global/Btn/Btn';
import Wrapper from 'components/Global/Wrapper/Wrapper';

import s from './Nav.css'
import m from 'global/modifiers.css'

export default class Nav extends Component {
  render() {
    return (
      <nav className={s.root}>
        <Wrapper>
          <h1 className={s.logo}>👋 HMU</h1>
          <div className={s.cta}>
            <a href="/login" className={s.link}>
              Log in
            </a>
          </div>
        </Wrapper>
      </nav>
    )
  }
}
