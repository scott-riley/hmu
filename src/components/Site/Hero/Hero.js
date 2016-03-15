import React, {Component} from 'react';
import s from './Hero.css';
import {Link} from 'react-router';

import Wrapper from 'components/Global/Wrapper/Wrapper';
import Btn from 'components/Global/Btn/Btn';

export default class Hero extends Component {
  render() {
    const {children} = this.props;
    return (
      <div className={s.root}>
        <Wrapper>
          <h1 className={[s.heading].join(' ')}>
            Hit me up, m8
          </h1>
          <p className={[s.copy].join(' ')}>
            Everyone hates mailto: links. No one likes monolithic CRMs except marketing weirdos. HMU is a data-agnostic API. It lets you receive and manage your enquiries without creating your own endpoint. And it’s free, you lucky thing.
          </p>
          <p className={s.linkContainer}>
            <Link to="/app/signup" className={s.link}>Get started for free</Link>
          </p>
          <img src="images/main-screen.png" className={s.image} />
        </Wrapper>
      </div>
    );
  }
}
