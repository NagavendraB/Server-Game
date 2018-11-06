import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// Constants
import {APPS} from '../../helpers/configurations';

const AppOperations = (props) => (
  <div className="apps-container">
    <div className="avilable-apps-heading">Avilable Apps</div>
    { APPS.map((app, index) => (
      <div className={`app app${index + 1}`}>
        {app} 
        <div className="app-icons">
          <span className={classnames("add-icon icon-small", app)} onClick={() => props.onAddApp(app)}>+</span>
          <span className="remove-icon icon-small" onClick={() => props.onRemoveApp(app)}>-</span>
        </div>
      </div>
    ))}
  </div>
);

export default AppOperations;

AppOperations.propTypes = {
  onAddApp: PropTypes.func,
  onRemoveApp: PropTypes.func
};