import { Component } from "react";

import "./Card.css";
import FileWrapper from "./FileWrapper";
import LastUpload from "./LastUpload";
import ActivityChart from "./ActivityChart";

export default function DashBoard(props) {

    props.setPath("/");

        return (
            <div className="ps-4 pe-5 m-0">
                <h3 className="mt-3">DashBoard:</h3>
                <div className="row">
                    <div className="col-md-9">
                        <div className="form-card mb-3" style={{margin: "0"}}>
                            <ActivityChart />
                        </div>
                    </div>
                    <div className="col-md-3">
                            <div className="form-card">
                            <b>Last Uploaded:</b>
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