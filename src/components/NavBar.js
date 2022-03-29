import { Link } from "react-router-dom";
import "./Card.css";
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
        <nav id="sidebarMenu" class="col-md-12 d-md-block sidebar collapse mt-3 pt-3 ms-3" style={{borderRadius: "3px", backgroundColor:"#414157"}}>
        <div class="sidebar-sticky pt-2" >
        <hr className="bg-light"/>
          <ul class="nav flex-column nav-pills flex-column mb-auto">
          <li className="nav-item mt-1" >
                        <Link to="/" className={"nav-link " + (props.path==="/" ? "active":"")}>
                        {/* <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"></use></svg> */}
                        Dashboard
                        </Link>
                    </li>

                    <li className="nav-item mt-2">
                        <Link to="/files" className={"nav-link " + (props.path==="/files" ? "active":"")}>
                        {/* <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg> */}
                        Files
                        </Link>
                    </li>
                    <li className="nav-item mt-2">
                        <Link to="/relays" className={"nav-link " + (props.path==="/relays" ? "active":"")}>
                        {/* <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg> */}
                        Relays Overview
                        </Link>
                    </li>

                    <li className="nav-item mt-2">
                        <Link to="/responses" className={"nav-link " + (props.path==="/responses" ? "active":"")}>
                        {/* <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg> */}
                        Responses
                        </Link>
                    </li>
          </ul>
          <hr className="bg-light mt-3"/>
        </div>
      </nav>
    )
    // }
}