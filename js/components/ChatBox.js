import React from 'react';

class ChatBox extends React.Component {
  render() {
    return (
      <div>
        <p>Your foo is {this.props.foo}</p>
        <p>Your bar is {this.props.bar}</p>
        <textarea></textarea>
      </div>
    );
  }
}

export default ChatBox;
