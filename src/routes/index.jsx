import { Switch, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";
import { Dashboard } from "../pages/Dashboard";
import { Favorites } from "../pages/Favorites";
import { Phrases } from "../pages/Phrases";
import { Comments } from "../pages/Comments";

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={SignUp} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/phrases" component={Phrases} />
    <Route path="/favorites" component={Favorites} />
    <Route path="/comments" component={Comments} />
  </Switch>
);
