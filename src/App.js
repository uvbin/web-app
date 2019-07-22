import React from 'react';
import { Route, Switch } from "react-router-dom";
// import of components associated with a path
import Layout from './containers/Layout/Layout';
import AccountPage from './components/AccountPage/AccountPage';


function App() {
  return (
    // Switch controls which component is loaded based on the path
    <Switch>
      {/* Route defines the component associated with the path
      In this case we are defining the paths to be exact.
      If we were to leave off "exact" the first path that matches
      the address in the browser would be loaded. Order matters Ex. "/" 
      would always load since it is first character in every address.
      The way I set it up this won't happen. localhost:3000 always loads
      Layout. .../accountPage always loads AccountPage. I put / last 
      without exact so that anything not matching our exact routes will
      get picked up there and Layout will load: localhost:3000/asdfasd 
      will load Layout.*/}
      <Route exact path="/" component={Layout} />
      <Route exact path="/layout" component={Layout} />
      <Route exact path="/accountPage" component={AccountPage} />
      <Route path="/" component={Layout} />
    </Switch>
  );
}

export default App;
