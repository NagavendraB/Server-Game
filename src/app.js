import React, { Component } from 'react';

// Components
import { UserOperations, Servers } from './components';

// Helpers
import { getIntialServers, checkForFreeServers } from './helpers/utils';

// Css
import './assets/css/mesosphere.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      servers: getIntialServers()
    };
  }

  // It adds new server on screen
  onAddServer = () => {
    this.setState(prevState => ({
      servers: [...prevState.servers, {runningApps: []}]
    }));
  }

  // It removes recently added Server on screen
  onRemoveServer = () => {
    let servers = [...this.state.servers]; 
    
    if (servers.length > 0) {
      const appsOnServer = servers[servers.length-1].runningApps;

      // Check for running Apps before killing the server
      // Add them in some where with same function/algoritham   
      if (appsOnServer.length !== 0) {
        appsOnServer.map(app => this.onAddApp(app)); 
      }
      servers.splice(-1,1);
    }
    this.setState({servers});
  }

  // It adds new App on avilable server
  onAddApp = (appName) => {
    let servers = [...this.state.servers];
    let avilableServers = checkForFreeServers(servers, appName, 0);
    
    // If no free servers are avilable, then check for server which running atleast one App 
    if (avilableServers.length === 0) {
      avilableServers = checkForFreeServers(servers, appName, 1);
    }
    this.setState({servers: avilableServers});
  }

  // It removes the recently added App on servers
  onRemoveApp = (appName) => {
     let servers = [...this.state.servers];

     //Check for recently added App on servers
     for (let i = servers.length - 1; i >= 0; i--) {
      if (servers[i].runningApps.includes(appName)) {
        const index = servers[i].runningApps.indexOf(appName);
        
        if (index > -1) {
          servers[i].runningApps.splice(index, 1);
        }
        break;
      } 
     }
     this.setState({servers});
  }
  
  render() {
    const {servers} = this.state;

    return (
      <div className="app-container">
        <UserOperations 
          onAddServer={this.onAddServer}
          onRemoveServer={this.onRemoveServer}
          onAddApp={this.onAddApp}
          onRemoveApp={this.onRemoveApp} />
        <Servers servers={servers} />
      </div>
    );
  }
}

export default App;
