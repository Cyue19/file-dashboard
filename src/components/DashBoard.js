import { Component } from "react";

import "./Card.css";
import FileWrapper from "./FileWrapper";
import LastUpload from "./LastUpload";
import ActivityChart from "./ActivityChart";

export default class DashBoard extends Component {

    render() {
        return (
            <div className="container">
                <h3 className="mt-3">DashBoard:</h3>
                <div className="row">
                    <div className="col-9" style={{padding: "0px 15px"}}>
                        <div className="form-card my-3" style={{margin: "0", width: "55vw"}}>
                            <ActivityChart />
                        </div>
                    </div>
                    <div className="col-3">
                            <div className="form-card mt-3">
                            Last Uploaded:
                            <LastUpload />
                            </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="form-card my-3" style={{backgroundColor: "white", width: "100%", position: "relative"}}>
                            Recent Uploads
                            <FileWrapper />
                        </div>
                    </div>
                    {/* <div className="col-3">
                            <div className="form-card mt-3">

                            </div>
                    </div> */}
                </div>
            </div>
        )
    }
}