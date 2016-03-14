import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchMessages, setActiveMessage} from 'actions/index';

import MessageItem from 'components/App/MessageItem/MessageItem';
import MessageBlock from 'components/App/MessageBlock/MessageBlock';

import s from './MessageList.css';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchMessages();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.messages.perform == "redirect") {
      this.context.router.push('/app/login');
    }
  }

  renderMessages(messages) {
    return(
      messages.map( (message) => {
        if(message.message) {
          return (
            <MessageItem message={message.message._data} key={message.message._data.id} onClick={ () => { this.props.setActiveMessage(message.message._data)} } activeMessage={this.props.activeMessage} />
          )
        }
      })
    )
  }

  handleClick() {
    this.props.fetchMessages();
  }

  render() {
    const {messages, activeMessage} = this.props;
    console.log("RENDER ACTIVE MESSAGE:", activeMessage);
    return (
      <div className={s.root}>
        <div className={s.sidebar}>
          <h2 className={s.inboxHeader}>Your Messages</h2>
          {messages && messages.length > 0 ?
              <div>
                {this.renderMessages(messages)}
              </div>
            :
              "No messages"
          }
        </div>

        <div className={s.message}>
          {
            activeMessage.id ?
              <MessageBlock message={activeMessage} />
            :
              null
          }
        </div>
      </div>
    );
  }
}

MessageList.contextTypes = {
  router: React.PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    activeMessage: state.activeMessage
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages: fetchMessages, setActiveMessage: setActiveMessage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
