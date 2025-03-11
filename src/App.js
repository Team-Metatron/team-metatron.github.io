import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Index from "views/Index.js";
// import LandingPage from "views/examples/LandingPage.js";
// import RegisterPage from "views/examples/RegisterPage.js";
// import ProfilePage from "views/examples/ProfilePage.js";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" render={(props) => <Index {...props} />} />
        {/* <Route path="/landing" render={(props) => <LandingPage {...props} />} /> */}
        {/* <Route
        path="/register"
        render={(props) => <RegisterPage {...props} />}
      />
      <Route
        path="/profile"
        render={(props) => <ProfilePage {...props} />}
      /> */}
        <Redirect from="/" to="/home" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
