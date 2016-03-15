import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {fetchUser, editEmail} from 'actions/index';
import {bindActionCreators} from 'redux';

import s from './Settings.css';

import Btn from 'components/Global/Btn/Btn';

class EmailForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      emailValue: "",
    }

    this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState( { emailValue: e.target.value } );
  }

  componentDidMount() {
    this.props.fetchUser();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ emailValue: nextProps.user.email });
  }

  render() {
    const {onSubmit, className, user, handleSubmit, fields: {email} } = this.props;
    const {emailValue} = this.state;
    return (
      <div className={className}>
        <form className={s.form} onSubmit={handleSubmit(this.props.editEmail)}>
          <h3>Your details</h3>
          <div className={s.formGroup}>
            <label for="email">Your email</label>
            <input type="email" name="email" placeholder="your@email.com" value={emailValue} onChange={ (e) => { this.handleChange(e) } } {...email} />
          </div>
          <div className={s.formGroup}>
            <Btn modifier="inverted">Save email</Btn>
          </div>
          { user.status == "save-success" ?
              <div className={s.successMessage}>Changes saved</div>
            : user.status ?
              <div className={s.errorMessage}>Oops! We couldn’t save your email, please try again.</div>
            : null
          }


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
    editEmail: editEmail,
  }, dispatch)
}

export default reduxForm({
  form: "EmailForm",
  fields: ['email'],
}, mapStateToProps, mapDispatchToProps)(EmailForm);
