import React, {Component} from 'react';
import moment from 'moment';

import s from './MessageItem.css';

export default class MessageItem extends Component {

  render() {
    const {children, message, onClick, activeMessage} = this.props;
    const classNames = [s.root];

    if(activeMessage && message) {
      if(activeMessage.id == message.id) {
        classNames.push(s.active);
      }
      else if(!message.status) {
        classNames.push(s.new);
      }
    }

    const rawDate = message.created_at;
    const dateObject = Date.parse(rawDate);
    const dateString = moment(rawDate).fromNow();

    return (
      <div className={classNames.join(' ')} onClick={onClick}>
        <div className={s.col}>
          { message.fields && message.fields.subject ?
              <div className={s.subject}>
                {message.fields.subject}
              </div>
            :
              null
          }
          <span className={s.from}>
            { message.fields && message.fields.name ?
                message.fields.name
              :
                message.email
            }
          </span>
          <div className={s.date}>
            {dateString}
          </div>
          { message.fields && message.fields.budget ?
              <div className={s.budget}>
                {message.fields.budget}
              </div>
            :
              null
          }
        </div>
      </div>
    );
  }
}
