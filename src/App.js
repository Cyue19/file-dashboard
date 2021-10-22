import './App.css';

import { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import PropsRoute from "./components/PropsRoute";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import DashBoard from "./components/DashBoard";
import Files from "./components/Files";
import Relays from "./components/Relays";

class App extends Component {

  render() {
    return(
      <BrowserRouter>
        <Header/>
        <div className="row">
          <div className="col-2">
            <NavBar/>
          </div>
          <div className="col-10" style={{padding: "0"}}>
            <PropsRoute path="/" exact component={DashBoard}/>
            <PropsRoute path="/files" exact component={Files}/>
            <PropsRoute path="/relays" exact component={Relays} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
