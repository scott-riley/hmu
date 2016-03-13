import React, {Component} from 'react';

import s from './HowItWorks.css'

export default class HowItWorks extends Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.smallWrap}>
          <h2 className={s.subhead}>How it works</h2>
        </div>
        <div className={s.smallWrap}>
          <p>When you sign up, you get your own special URL that you can use to start receiving messages.</p>
          <p>You create a form, or an app, or whatever you like, that sends data to this URL.</p>
          <p>Any messages you receive will be shown on your dashboard, any fields you send from your form will determine how your message data is structure</p>
        </div>
      </div>
    );
  }
}
