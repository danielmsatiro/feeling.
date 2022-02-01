import { Switch } from "react-router-dom";
import { Route } from "./Route";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";
import { Dashboard } from "../pages/Dashboard";
import { Favorites } from "../pages/Favorites";
import { Phrases } from "../pages/Phrases";
import { Comments } from "../pages/Comments";
import { MyComments } from "../pages/MyComments";

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={SignUp} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/phrases" component={Phrases} isPrivate />
    <Route path="/favorites" component={Favorites} isPrivate />
    <Route path="/comments" component={Comments} isPrivate />
    <Route path="/mycomments" component={MyComments} isPrivate />
  </Switch>
);
