import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {logInUser} from 'actions/index';
import Btn from 'components/Global/Btn/Btn';

import s from './LogIn.css';

class LogIn extends Component {

  render() {
    const { fields: { email, password }, handleSubmit, user} = this.props;
    // const logInStatus = this.props.logInUser.status;
    console.log(user);
    return (
      <div className={s.root}>
        <form onSubmit={handleSubmit(this.props.logInUser)}>
          { user.status ? user.status : null }
          <div className={s.formGroup}>
            <label>Email</label>
            <input type="email" name="email" placeholder="Your email" {...email} />
          </div>
          <div className={s.formGroup}>
            <label>Password</label>
            <input type="password" name="password" placeholder="Your password" {...password} />
          </div>
          <div className={s.formGroup}>
            <Btn modifier="blank">Log in</Btn>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default reduxForm({
  form: 'LogInForm',
  fields: ['email', 'password']
}, mapStateToProps, {logInUser})(LogIn);
