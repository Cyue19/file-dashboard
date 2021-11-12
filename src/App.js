import './App.css';

import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import PropsRoute from "./components/PropsRoute";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import DashBoard from "./components/DashBoard";
import Files from "./components/Files";
import Relays from "./components/Relays";
import SearchResults from "./components/SearchResults";

function App() {


  const [path, setPath] = useState("/");

    return(
      <BrowserRouter>
        <Header/>
        <div className="row">
          <div className="col-2 me-3">
            <NavBar path={path}/>
          </div>
          <div className="col-9" style={{padding: "0"}}>
            <PropsRoute path="/" exact component={DashBoard} setPath={setPath}/>
            <PropsRoute path="/files" exact component={Files} setPath={setPath}/>
            <PropsRoute path="/relays" exact component={Relays} setPath={setPath}/>
            <PropsRoute path="/files/search" exact component={SearchResults} />
          </div>
        </div>
      </BrowserRouter>
    );
}

export default App;
