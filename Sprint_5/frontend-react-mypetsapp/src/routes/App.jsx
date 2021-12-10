import '../App.css';
import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Home from '../components/pages/Home';
import Contact from '../components/pages/Contact';

import Pets from '../components/pages/Pets';
import Layout from '../containers/Layout';
import Owners from '../components/pages/Owners';
import NotFound from '../components/pages/NotFound';


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/contacto" component = {Contact}/>
          <Route exact path="/pets" component = {Pets}/>
          <Route exact path="/owners" component = {Owners}/>
          <Route exact path="/" component = {Home}/>
          <Route exact path="*" component = {NotFound}/>
        </Switch>
        </Layout>
    </BrowserRouter>
  );
}

export default App;
