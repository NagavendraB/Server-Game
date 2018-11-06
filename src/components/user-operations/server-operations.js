import React from 'react';
import PropTypes from 'prop-types';

const ServerOperations = (props) => (
  <div className="server-operations">
    <div className="server-icons">
      <div className="server-operation">
        <span className="add-icon icon-large" onClick={props.onAddServer}>+</span>
        <div>Add Server</div>
      </div>
      <div className="server-operation">
        <span className="remove-icon icon-large" onClick={props.onRemoveServer}>-</span>
        <div>Destory</div>
      </div>
    </div>
  </div>
);

export default ServerOperations;

ServerOperations.propTypes = {
  onAddServer: PropTypes.func,
  onRemoveServer: PropTypes.func
};