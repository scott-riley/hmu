import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchMessages} from 'actions/index';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchMessages();
  }

  renderMessages(messages) {
    return(
      messages.map( (message) => {
        if(message.message) {
          return (
            <div key={message.id}>{message.message._data.email}</div>
          )
        }
      })
    )
  }

  handleClick() {
    console.log("Fetching in click");
    this.props.fetchMessages();
  }

  render() {
    const {messages} = this.props;
    return (
      <div>
        <h2>Your Messages</h2>
        <span onClick={() => { this.handleClick() } }>Load</span>
        {messages && messages.length > 0 ?
            this.renderMessages(messages)
          :
            "No messages"
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages: fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
