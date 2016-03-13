import React, {Component} from 'react';
import s from './Hero.css';

import Wrapper from 'components/Global/Wrapper/Wrapper';
import Btn from 'components/Global/Btn/Btn';

export default class Hero extends Component {
  render() {
    const {children} = this.props;
    return (
      <div className={s.root}>
        <Wrapper>
          <h1 className={[s.heading].join(' ')}>
            Hit me up
          </h1>
          <p className={[s.copy].join(' ')}>
            Building contact forms can suck. HMU aims to make this less sucky. Sign up for free and get a data-agnostic, super simple endpoint to start receiving messages online.
          </p>
          <Btn href="/app">
            Sign up for free
          </Btn>
        </Wrapper>
      </div>
    );
  }
}
