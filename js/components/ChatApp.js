import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

class ChatApp extends React.Component {
  render() {
    return (
      <div className='nav'>
        <Link to='app'>Home</Link>
        <Link to='login'>Login</Link>

        <RouteHandler />
      </div>
    );
  }
}

export default ChatApp;
