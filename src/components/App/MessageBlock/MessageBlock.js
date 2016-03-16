import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteMessage} from 'actions/index';

import moment from 'moment';

import s from './MessageBlock.css';

class MessageBlock extends Component {

  renderFields(message) {
    const fields = message.fields
    let shortJSX = [];
    let longJSX = [];
    for(var propt in fields) {
      if(propt != "name" && propt != "subject") {
        let className = "";
        if(propt.length < 20 && fields[propt].length < 45) {
          className = s.thinData;
          shortJSX.push (
            <div key={`${message.id}-${propt}-full`} className={className}>
              <h3 className={s.fieldHeader}>{propt.split('_').join(' ')}</h3>
              <span className={s.data}>{fields[propt]}</span>
            </div>
          );
        }
        else {
          className = s.longData;
          longJSX.push (
            <div key={`${message.id}-${propt}-full`} className={className}>
              <h3 className={s.fieldHeader}>{propt.split('_').join(' ')}</h3>
              <span className={s.data}>{fields[propt]}</span>
            </div>
          );
        }
      }
    }

    return shortJSX.concat(longJSX);
  }

  render() {
    const {message} = this.props;
    const rawDate = message.created_at;
    const dateObject = Date.parse(rawDate);
    const dateString = moment(rawDate).fromNow();
    return (
      <div className={s.root}>
        { message ?
            <div>

              <div className={s.header}>

                <div className={s.meta}>
                  {message.fields && message.fields.name}
                  <div className={s.email}>
                    <a href={`mailto:${message.email}`}>{message.email}</a>
                  </div>
                </div>

                <div className={s.delete}>
                  <span onClick={() => this.props.deleteMessage(message.id)}>Delete</span>
                </div>

                { message.fields && message.fields.subject ?
                    <div className={s.subject}>
                      {message.fields.subject}
                    </div>
                  :
                    null
                }

                <div className={s.meta}>
                  <span className={s.date}>
                    {dateString}
                  </span>
                </div>

              </div>

              <div className={s.body}>
                {this.renderFields(message)}
              </div>

            </div>
          :
            "Loading"
        }
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    deleteMessage: deleteMessage,
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(MessageBlock);
