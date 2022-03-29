import './App.css';

import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import PropsRoute from "./components/PropsRoute";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import DashBoard from "./components/DashBoard";
import Files from "./components/Files";
import Relays from "./components/Relays";
import SearchResults from "./components/SearchResults";
import Responses from "./components/Responses";

function App() {


  const [path, setPath] = useState("/");

    return(
      <BrowserRouter>
        <Header/>
        <div className="row m-0">
          <div className="col-2 sideBarRow">
            <SideBar path={path}/>
          </div>
          <div className="col-lg-10 m-0" style={{padding: "0px"}}>
            <PropsRoute path="/" exact component={DashBoard} setPath={setPath}/>
            <PropsRoute path="/files" exact component={Files} setPath={setPath}/>
            <PropsRoute path="/relays" exact component={Relays} setPath={setPath}/>
            <PropsRoute path="/files/search" exact component={SearchResults} />
            <PropsRoute path="/responses" exact component={Responses} setPath={setPath}/>
          </div>
        </div>
      </BrowserRouter>
    );
}

export default App;
