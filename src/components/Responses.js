import React from 'react';
import FollowUpRecent from "./FollowUpRecent";
import FollowUpQ1Chart from "./FollowUpQ1";
import EndOfDayRecent from "./EndOfDayRecent";
import EndOfDayQ1Chart from "./EndOfDayQ1";
import LastUpload from "./LastUpload";
import BarChart from "./BarChart";
export default function Responses(props) {

    props.setPath("/responses");

        return (
            <div className="container">
                <h3 className="mt-3">Responses</h3>
                <div>
                    <h5 className="mt-3">Pain Responses</h5>

                    <div className="row">
                        <div className="col-9 p-0">
                            <div className="form-card">
                                <BarChart type="pain" endPoint="/responses/pain/counts" />
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="form-card">
                                <b>Last Uploaded:</b>
                                <LastUpload type="pain" endPoint="/responses/pain/last"/>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <h5 className="mt-3">Follow-up Responses</h5>
                    <div className="col-9" style={{padding: "0px 15px"}}>
                        <div className="form-card my-3" style={{margin: "0", width: "55vw"}}>
                            {/* <FollowUpQ1Chart/> */}
                            <BarChart type="followUp" endPoint="/responses/follow_up/q1" />
                        </div>
                    </div>
                    <div className="col-3">
                            <div className="form-card mt-3">
                            <b>Last Uploaded:</b>
                            {/* <FollowUpRecent/> */}
                            <LastUpload type="followUp" endPoint="/responses/follow_up/last" />
                            </div>
                    </div>
                </div>
                <div>
                    <h5 className="mt-3">End-of-day Responses</h5>
                    <div className="col-9" style={{padding: "0px 15px"}}>
                        <div className="form-card my-3" style={{margin: "0", width: "55vw"}}>
                        {/* <EndOfDayQ1Chart/> */}
                            <BarChart type="eod" endPoint="/responses/end_of_day/q1" />
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="form-card mt-3">
                            <b>Last Uploaded:</b>
                            {/* <EndOfDayRecent/> */}
                            <LastUpload type="eod" endPoint="/responses/end_of_day/last" />
                        </div>
                    </div>
                </div>
            </div>
        )
    
}