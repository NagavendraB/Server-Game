import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Servers = (props) => (
  <div className="right-box">
    <h2>Server Canvas</h2>
    <div className="server-container">
      {props.servers && props.servers.map(server => (
        <div className="server">
          {server.runningApps.length > 0 && server.runningApps.map(app => (
            <span className={classnames('app-running', app, {
              'one-app' : server.runningApps.length === 1,
              'two-apps' : server.runningApps.length === 2,
            })}>{app}</span>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default Servers;

Servers.propTypes = {
  servers: PropTypes.array
};