import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {logInUser} from 'actions/index';
import Btn from 'components/Global/Btn/Btn';

import s from './LogIn.css';

class LogIn extends Component {

  componentWillReceiveProps(nextProps) {
    if(nextProps.user.status == "success") {
      this.context.router.push('/app/messages');
    }
  };

  render() {
    const { fields: { email, password }, handleSubmit, user} = this.props;
    return (
      <div className={s.root}>
        <form onSubmit={handleSubmit(this.props.logInUser)}>
          { user.status ?
            <div className={s.error}>{user.status}</div>
          :
            null }
          <div className={s.formGroup}>
            <label>Email</label>
            <input type="email" name="email" placeholder="Your email" {...email} />
          </div>
          <div className={s.formGroup}>
            <label>Password</label>
            <input type="password" name="password" placeholder="Your password" {...password} />
          </div>
          <div className={s.formGroup}>
            <Btn modifier="full">Log in</Btn>
          </div>
        </form>
      </div>
    );
  }
}

LogIn.contextTypes = {
  router: React.PropTypes.object.isRequired,
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
