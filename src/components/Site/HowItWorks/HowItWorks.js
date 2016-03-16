import React, {Component} from 'react';
import {Link} from 'react-router';

import s from './HowItWorks.css'

export default class HowItWorks extends Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.smallWrap}>
          <h2 className={s.subhead}>How it works</h2>
        </div>
        <div className={s.smallWrap}>
          <p><span className={s.emoji}>🕶</span> Sign up and get your own super cool URL.</p>
          <p><span className={s.emoji}>💌</span> Create a form, or an app, or whatever you like, that sends data to this URL.</p>
          <p><span className={s.emoji}>💬</span> Start receiving messages. They’ll be shown on your dashboard, and any fields you send from your form will determine how your message data is structured.</p>
          <p><Link to="/docs" className={s.link}>Detailed instructions</Link></p>
        </div>
      </div>
    );
  }
}
