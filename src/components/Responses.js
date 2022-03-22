import { useState, useEffect } from "react";
import React from 'react';
import axios from "axios";
import LastUpload from "./LastUpload";
import BarChart from "./BarChart";

const endPoint = process.env.REACT_APP_URL +"/responses/deployments";

export default function Responses(props) {

    props.setPath("/responses");
    const [selDeployment, setSelDeployment] = useState(0);
    const [deployments, setDeployments] = useState([]);

    useEffect(() => {
        try {
          getDeployments();
        } catch(err) {
          console.log(err);
        }
      }, []);

    async function getDeployments() {
        const response = await axios.get(endPoint);
        setDeployments(response.data);
        console.log(response.data);
    }

    function onDeploymentChanged(e) {
        setSelDeployment(e.target.value);
        console.log(selDeployment);
    }

        return (
            <div className="container">
                <h3 className="mt-3">Responses</h3>
                <select class="form-select" onChange={(e) => onDeploymentChanged(e)} aria-label="Default select example">
                    {deployments.map((deployment) => (
                        <option value={deployment.painResponseDeployment} className={selDeployment===deployment.painResponseDeployment ? "selected":""}>{deployment.painResponseDeployment}</option>
                    ))}
                </select>
                {selDeployment}

                <div>
                    <h5 className="mt-3">Pain Responses</h5>

                    <div className="row">
                        <div className="col-md-9" style={{padding: "0px 15px"}}>
                            <div className="form-card" style={{margin: "0", width: "55vw"}}>
                                <BarChart type="pain" endPoint="/responses/pain/counts" deployment = {selDeployment} />
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="form-card">
                                <b>Last Uploaded:</b>
                                <LastUpload type="pain" endPoint="/responses/pain/last" deployment = {selDeployment} />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h5 className="mt-3">Follow-up Responses</h5>

                    <div className="row">
                        <div className="col-9" style={{padding: "0px 15px"}}>
                            <div className="form-card" style={{margin: "0", width: "55vw"}}>
                                <BarChart type="followUp" endPoint="/responses/follow_up/q1" deployment=""/>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="form-card mt-3">
                                <b>Last Uploaded:</b>
                                <LastUpload type="followUp" endPoint="/responses/follow_up/last" deployment=""/>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h5 className="mt-3">End-of-day Responses</h5>

                    <div className="row mb-4">
                        <div className="col-9" style={{padding: "0px 15px"}}>
                            <div className="form-card" style={{margin: "0", width: "55vw"}}>
                                <BarChart type="eod" endPoint="/responses/end_of_day/q1" deployment=""/>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="form-card mt-3">
                                <b>Last Uploaded:</b>
                                <LastUpload type="eod" endPoint="/responses/end_of_day/last" deployment=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    
}