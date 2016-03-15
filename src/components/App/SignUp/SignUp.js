import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {signUpUser} from 'actions/index';
import Btn from 'components/Global/Btn/Btn';

import s from './SignUp.css';

class SignUp extends Component {

  componentWillReceiveProps(nextProps) {
    if(nextProps.signUp.status == "success") {
      this.context.router.push('/app/welcome');
    }
  };

  render() {
    const { fields: { email, password }, handleSubmit, signUp} = this.props;
    return (
      <div className={s.root}>
        <form onSubmit={handleSubmit(this.props.signUpUser)} >
          { signUp.status ?
            <div className={s.error}>{signUp.status}</div>
          :
            null }
          <div className={s.formGroup}>
            <label>Email</label>
            <input type="text" name="email" placeholder="Your email" {...email} />
          </div>
          <div className={s.formGroup}>
            <label>Password</label>
            <input type="password" name="password" placeholder="Your password" {...password} />
          </div>
          <div className={s.formGroup}>
            <Btn modifier="full">Create Your Account</Btn>
          </div>
        </form>
      </div>
    );
  }
}

SignUp.contextTypes = {
  router: React.PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  return {
    signUp: state.signUp
  }
}

export default reduxForm({
  form: 'SignUpForm',
  fields: ['email', 'password', 'accept']
}, mapStateToProps, {signUpUser})(SignUp);
