import React from 'react';
import FollowUpRecent from "./FollowUpRecent";

export default function Responses(props) {

    props.setPath("/responses");

        return (
            <div className="container">
                <h3 className="mt-3">Responses</h3>
                <div>
                    <h5 className="mt-3">Pain Responses</h5>

                </div>
                <div>
                    <h5 className="mt-3">Follow-up Responses</h5>
                    <div className="col-9" style={{padding: "0px 15px"}}>
                        <div className="form-card my-3" style={{margin: "0", width: "55vw"}}>
                        </div>
                    </div>
                    <div className="col-3">
                            <div className="form-card mt-3">
                            <b>Last Uploaded:</b>
                            <FollowUpRecent/>
                            </div>
                    </div>
                </div>
                <div>
                    <h5 className="mt-3">End-of-day Responses</h5>
                    <div className="col-9" style={{padding: "0px 15px"}}>
                        <div className="form-card my-3" style={{margin: "0", width: "55vw"}}>
                        </div>
                    </div>
                    <div className="col-3">
                            <div className="form-card mt-3">
                            <b>Last Uploaded:</b>
                            
                            </div>
                    </div>
                </div>
            </div>
        )
    
}