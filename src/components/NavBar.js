import { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state={
            activePage: 1
        }
    }

    changeActivePage(activePage) {
        this.setState({
            activePage
        });
    }

    render() {
        return (
            <div>

                <div className="p-3 bg-dark mt-3 ms-3" style={{width: "250px", height:"100vh", borderRadius: "3px"}}>
                    <Link className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-light text-decoration-none">
                    {/* <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg> */}
                    <span className="">NAVIGATION</span>
                    </Link>
                    <hr className="bg-light"/>
                    <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item" onClick={() => this.changeActivePage(1)}>
                        <Link to="/" className={"nav-link link-light " + (this.state.activePage===1 ? "active":"")} aria-current="page">
                        {/* <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"></use></svg> */}
                        Dashboard
                        </Link>
                    </li>
                    <li onClick={() => this.changeActivePage(2)}>
                        <Link to="/files" className={"nav-link link-light " + (this.state.activePage===2 ? "active":"")}>
                        {/* <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg> */}
                        Files
                        </Link>
                    </li>
                    <li onClick={() => this.changeActivePage(3)}>
                        <Link to="/relays" className={"nav-link link-light" + (this.state.activePage===3 ? "active":"")}>
                        {/* <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg> */}
                        Relays
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link link-light">
                        {/* <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg> */}
                        content
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link link-light">
                        {/* <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg> */}
                        content
                        </Link>
                    </li>
                    </ul>
                </div>

            </div>
        )
    }
}