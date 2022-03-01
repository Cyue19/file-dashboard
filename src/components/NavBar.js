import { Link } from "react-router-dom";

export default function NavBar(props) {
    // constructor(props) {
    //     super(props);

    //     this.state={
    //         activePage: 1
    //     }
    // }

    // changeActivePage(activePage) {
    //     this.setState({
    //         activePage
    //     });
    // }

    // render() {
        return (
            <div>

                <div className="p-3 bg-dark mt-3 ms-3" style={{width: "100%", height:"100vh", borderRadius: "3px"}}>
                    {/* <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg> */}
                    <span className=""></span>
                    <hr className="bg-light"/>
                    <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item" >
                        <Link to="/" className={"nav-link link-light " + (props.path==="/" ? "active":"")}>
                        {/* <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"></use></svg> */}
                        Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/files" className={"nav-link link-light " + (props.path==="/files" ? "active":"")}>
                        {/* <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg> */}
                        Files
                        </Link>
                    </li>
                    <li>
                        <Link to="/relays" className={"nav-link link-light " + (props.path==="/relays" ? "active":"")}>
                        {/* <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg> */}
                        Relays Overview
                        </Link>
                    </li>

                    <li>
                        <Link to="/responses" className={"nav-link link-light " + (props.path==="/responses" ? "active":"")}>
                        {/* <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg> */}
                        Responses
                        </Link>
                    </li>
                    </ul>
                </div>

            </div>
        )
    // }
}