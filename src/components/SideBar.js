import { Link } from "react-router-dom";
import "./Card.css";
export default function NavBar(props) {

    // return (
    //     <div>
            
    //         <div className="p-3 bg-dark mt-3" style={{height:"100vh", borderRadius: "3px"}}>
    //             {/* <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg> */}
    //             <span style={{color: "white"}} className="fs-5">Navigation</span>
    //             <hr className="bg-light mt-1"/>
    //             <ul className="nav nav-pills flex-column mb-auto">
    //             <li className="nav-item" >
    //                 <Link to="/" className={"nav-link link-light " + (props.path==="/" ? "active":"")}>
    //                 {/* <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"></use></svg> */}
    //                 Dashboard
    //                 </Link>
    //             </li>
    //             <li className="nav-item">
    //                 <Link to="/files" className={"nav-link link-light " + (props.path==="/files" ? "active":"")}>
    //                 {/* <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg> */}
    //                 Files
    //                 </Link>
    //             </li>
    //             <li className="nav-item">
    //                 <Link to="/relays" className={"nav-link link-light " + (props.path==="/relays" ? "active":"")}>
    //                 {/* <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg> */}
    //                 Relays Overview
    //                 </Link>
    //             </li>

    //             <li className="nav-item">
    //                 <Link to="/responses" className={"nav-link link-light " + (props.path==="/responses" ? "active":"")}>
    //                 {/* <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg> */}
    //                 Responses
    //                 </Link>
    //             </li>
    //             </ul>
    //         </div>

    //     </div>
    // )
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
        <nav id="sidebarMenu" class="col-md-12 d-md-block sidebar bg-dark collapse mt-3 pt-3 ms-3 sideNavBar" style={{borderRadius: "3px"}}>
        <div class="sidebar-sticky pt-2" >
                     <span style={{color: "white"}} className="fs-5">Navigation</span>
        <hr className="bg-light mt-1"/>
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
}