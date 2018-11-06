import React from 'react';
import PropTypes from 'prop-types';

// Components
import { AppOperations, ServerOperations } from './index';

const UserOperations = (props) => (
  <div className="left-box"> 
    <ServerOperations
      onAddServer={props.onAddServer}
      onRemoveServer={props.onRemoveServer} />
    <AppOperations
      onAddApp={props.onAddApp}
      onRemoveApp={props.onRemoveApp} />
  </div>
);

export default UserOperations;

UserOperations.propTypes = {
  onAddServer: PropTypes.func,
  onRemoveServer: PropTypes.func,
  onAddApp: PropTypes.func,
  onRemoveApp: PropTypes.func
};