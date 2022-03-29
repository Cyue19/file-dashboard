import { Component } from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export default function Header(props) {

    //render() {
        return(

            <nav className="navbar navbar-dark" style={{ backgroundColor: "lightblue", backgroundImage: "linear-gradient(to right, #414157 10%, #00d4ff 95%)"}}  >
                <div className="container-fluid">
                <h1 className="pt-3" style={{color: "white"}}>Besi-C</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav me-auto mb-2">
                    <li className="nav-item" >
                        <Link to="/" className={"nav-link link-light " + (props.path==="/" ? "active":"")}>
                        {/* <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"></use></svg> */}
                        Dashboard
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/files" className={"nav-link link-light " + (props.path==="/files" ? "active":"")}>
                        {/* <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg> */}
                        Files
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/relays" className={"nav-link link-light " + (props.path==="/relays" ? "active":"")}>
                        {/* <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg> */}
                        Relays Overview
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/responses" className={"nav-link link-light " + (props.path==="/responses" ? "active":"")}>
                        {/* <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg> */}
                        Responses
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
     
        )
    
}


