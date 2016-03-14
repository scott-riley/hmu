import React, {Component} from 'react';
import moment from 'moment';

import s from './MessageItem.css';

export default class MessageItem extends Component {

  render() {
    const {children, message, onClick, activeMessage} = this.props;
    const classNames = [s.root];
    if(activeMessage && message) {
      if(activeMessage.id == message.id) {
        classNames.push(s.active)
      }
    }

    const rawDate = message.created_at;
    const dateObject = Date.parse(rawDate);
    const dateString = moment().startOf('day').fromNow();

    return (
      <div className={classNames.join(' ')} onClick={onClick}>
        <div className={s.col}>
          <div className={s.date}>
            {dateString}
          </div>
          <span className={s.data}>
            { message.fields.name ?
                message.fields.name
              :
                message.email
            }
          </span>
        </div>
      </div>
    );
  }
}
