import React, {Component} from 'react';

import s from './Settings.css';
import Btn from 'components/Global/Btn/Btn';

import EmailForm from './EmailForm.js'

export default class Settings extends Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>

          <h2>Your settings</h2>

          <div className={s.form}>
            <h3>Your endpoint</h3>
            <div className={s.formGroup}>
              <code className={s.key}>http://api.hmu.cool/messages/7f0c6d2de507ae96e8920202013b4116</code>
              <div className={s.helperText}>Use this endpoint to <code className={s.inlineCode}>POST</code> data to.</div>
            </div>
          </div>

          <EmailForm />


          <form className={s.form}>
            <h3>Change your password</h3>
            <div className={s.formGroup}>
              <label for="password">New password</label>
              <input type="password" name="password" placeholder="Make it safe, m8s" />
            </div>
            <div className={s.formGroup}>
              <label for="password-confirm">Confirm new password</label>
              <input type="password" name="password-confirm" placeholder="Make it safe and also the same as above, m8s" />
            </div>
            <div className={s.formGroup}>
              <Btn modifier="inverted">Save new password</Btn>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
