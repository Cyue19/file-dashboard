import { Component } from "react";

import "./Card.css";
import FileWrapper from "./FileWrapper";
import LastUpload from "./LastUpload";
import ActivityChart from "./ActivityChart";

export default function DashBoard(props) {

    props.setPath("/");

        return (
            <div className="container">
                <h3 className="mt-3">DashBoard:</h3>
                <div className="row">
                    <div className="col-md-9" style={{padding: "0px 15px"}}>
                        <div className="form-card" style={{margin: "0"}}>
                            <ActivityChart />
                        </div>
                    </div>
                    <div className="col-md-3">
                            <div className="form-card mt-3">
                            Last Uploaded:
                            <LastUpload type="files" endPoint="/files/last" deployment="" />
                            </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="form-card my-3" style={{backgroundColor: "white", width: "100%"}}>
                            Recent Uploads
                            <FileWrapper type="recent"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    
}