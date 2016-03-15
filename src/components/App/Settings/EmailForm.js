import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {fetchUser} from 'actions/index';
import {bindActionCreators} from 'redux';

import s from './Settings.css';

import Btn from 'components/Global/Btn/Btn';

class EmailForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
    }
  }

  componentDidMount() {
    this.props.fetchUser();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ email: nextProps.user.email });
  }

  render() {
    const {onSubmit, className, user} = this.props;
    const {email} = this.state;
    console.log(user);
    return (
      <div className={className}>
        <form className={s.form}>
          <h3>Your details</h3>
          <div className={s.formGroup}>
            <label for="email">Your email</label>
            <input type="email" name="email" placeholder="your@email.com" value={email} />
          </div>
          <div className={s.formGroup}>
            <Btn modifier="inverted">Save email</Btn>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchUser: fetchUser,
  }, dispatch)
}

export default reduxForm({
  form: "EmailForm",
  fields: ['email'],
}, mapStateToProps, mapDispatchToProps)(EmailForm);
