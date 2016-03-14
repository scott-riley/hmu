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
          <p><span className={s.emoji}>🕶</span> When you sign up, you get your own super cool special URL that you can use to start receiving messages</p>
          <p><span className={s.emoji}>💌</span> You create a form, or an app, or whatever you like, that sends data to this URL</p>
          <p><span className={s.emoji}>💬</span> Any messages you receive will be shown on your dashboard, any fields you send from your form will determine how your message data is structured</p>
          <p><Link to="/docs" className={s.link}>Detailed instructions</Link></p>
        </div>
      </div>
    );
  }
}
