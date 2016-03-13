import React, {Component} from "react";

import Btn from 'components/Global/Btn/Btn';
import Wrapper from 'components/Global/Wrapper/Wrapper';

import Hero from 'components/Site/Hero/Hero';
import HowItWorks from 'components/Site/HowItWorks/HowItWorks';

import styles from './Homepage.css';
import m from 'global/modifiers';

export default class Homepage extends Component {
  render() {
    return(
      <div id="homepage">
        <Hero />
        <HowItWorks />
      </div>
    )
  }
}
