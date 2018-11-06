import { INITIAL_SERVERS } from "./configurations";

// It servers initially
export const getIntialServers = () => {
  let servers = [];
  servers.length = INITIAL_SERVERS;
  
  for(let i = 0; i < INITIAL_SERVERS; i++){
    servers[i] = {runningApps: []};
  }
  return servers;
};

// It checks for free servers to run the triggered App
export const checkForFreeServers = (
  servers, 
  appName, 
  runningApps
) => {
  let index = 0;
  while(index < servers.length) {
    const isServerAvilable = runningApps === 0 ? servers[index].runningApps.length === 0 : servers[index].runningApps.length < 2;
    if (isServerAvilable) {
      servers[index].runningApps = [...servers[index].runningApps, appName];
      return servers;
    }
    index = index + 1;
  }
  return runningApps === 0 ? [] : servers;
};
