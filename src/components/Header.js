import { Component } from "react";

export default class Header extends Component {

    render() {
        return(
            <div style={{width: "100%", height: "8vh", backgroundColor: "lightblue", backgroundImage: "linear-gradient(to right, #414157 10%, #00d4ff 95%)" , position: "relative"}}>
                <h1 className="m-3" style={{color: "white"}}>Besi-C</h1>
            </div>
        )
    }
}