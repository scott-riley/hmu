import React, {Component} from 'react';
import moment from 'moment';

import s from './MessageBlock.css';

export default class MessageBlock extends Component {

  renderFields(message) {
    const fields = message.fields
    let fieldsJSX = [];
    for(var propt in fields) {
      if(propt != "name" && propt != "subject") {
        let className = "";
        if(propt.length < 100 && fields[propt].length < 100) {
          className = s.thinData;
        }
        fieldsJSX.push (
          <div key={`${message.id}-${propt}-full`} className={className}>
            <h3 className={s.fieldHeader}>{propt.replace('_', ' ')}</h3>
            <span className={s.data}>{fields[propt]}</span>
          </div>
        );
      }
    }
    return fieldsJSX;
  }

  render() {
    const {message} = this.props;
    const rawDate = message.created_at;
    const dateObject = Date.parse(rawDate);
    const dateString = moment().startOf('day').fromNow();
    return (
      <div className={s.root}>
        { message ?
            <div>

              <div className={s.header}>
                {message.fields.name}
                <span className={s.date}>
                  {dateString}
                </span>
                <div className={s.email}>
                  <a href={`mailto:${message.email}`}>{message.email}</a>
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
