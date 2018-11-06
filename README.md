# Server Game

### Description

It will allows a user to ceate server in cluster and add/remove apps on avilable servers.

- Each gray block under “Server Canvas” represents a server in the cluster. The cluster should start with 4 servers initially.
- Clicking “Add Server” will create a new server and a new gray block in the Server Canvas.
- Clicking “Destroy” will remove the last server and its gray block from the Server Canvas.
- Clicking “+” for one of the Available Apps will start an instance of that app in the cluster.
- Clicking “-” for one of the Available Apps will kill the newest instance of that app in the cluster.
- Each server can run a maximum of two apps at once.
- When a new app is launched, it should be started following this algorithm:
    - Run on the first server running 0 apps.
    - If all servers are running at least 1 app, the new app should be started on the first server running only 1 app.
    - If all servers are running two apps, the app should not be started.
- When a server is destroyed, each app running on it should be restarted elsewhere in the cluster following the algorithm above. If there is no capacity for the apps, they should be killed.


### Get it running

- Install the dependences -  ``` npm install ```
- Run the application - ``` npm start ```
- Run the tests - ``` npm test ```

