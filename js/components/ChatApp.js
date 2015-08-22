import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

// import dependencies
import ChatBox from './ChatBox';

class ChatApp extends React.Component {

  render() {
    let props = {};
    props.foo = 'x';
    props.bar = 'y';

    return (
      <div className='nav'>
        <Link to='app'>Home</Link>
        <br />

        <Link to='login'>Login</Link>
        <h1>Hello world!</h1>
        <ChatBox {...props} />

        <RouteHandler />
      </div>
    );
  }
}

export default ChatApp;
