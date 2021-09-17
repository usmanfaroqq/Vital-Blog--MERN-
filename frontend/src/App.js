import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Navbar from "./components/common/Navbar/MainNavbar";
import NotFound from "./components/common/Notfound/NotFound";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import "./scss/main.scss";
import PrivateRoutes from "./Private/PrivateRoutes";
import RouteLinks from "./Private/RouteLinks";
import CreatePost from "./components/Create/CreatePost";
import UpperNavbar from "./components/common/Navbar/UpperNavbar";
import EditPost from "./components/Create/EditPost";
import UnderConstruction from "./components/common/UnderConstruction/UnderConstruction";


// under construction routes
// import ProfileSetting from "./components/Setting/ProfileSetting/ProfileSetting";



const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Navbar />
          <Home />
        </Route>
        <RouteLinks path="/register" exact component={props => <> <Navbar/> <Register/></> } />
        <RouteLinks path="/login" exact component={props => <> <Navbar/> <Login/></> } />
        <PrivateRoutes path="/dashboard/:page?" exact  component={ props => <> <UpperNavbar/> <Dashboard/></> }/>
        <PrivateRoutes path="/new-post" exact  component={props => <> <UpperNavbar/> <CreatePost/></> }/>
        <PrivateRoutes path="/me/setting" exact  component={props => <> <UpperNavbar/> <UnderConstruction/></> }/>
        <PrivateRoutes path="/edit/:id" exact  component={props => <> <UpperNavbar/> <EditPost/></> }/>
        <Route path="*" exact component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
