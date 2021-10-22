import { Component } from "react";
import { MDBContainer } from "mdbreact";
import { Line } from "react-chartjs-2";

import "./Card.css";
import FileWrapper from "./FileWrapper";

export default class DashBoard extends Component {
    constructor(props) {
        super(props);

        this.state={
            dataLine: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                  {
                    fill: false,
                    lineTension: 0.3,
                    borderColor: "#0d6efd",
                    pointBackgroundColor: "#0d6efd",
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgb(0, 0, 0)",
                    pointHoverBorderColor: "rgba(220, 220, 220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 5,
                    pointHitRadius: 10,
                    data: [65, 59, 80, 81, 56, 55, 52]
                  },
                ]
              },
            options: {
                legend: {display: false},
            }
          
        }
    }

    render() {
        return (
            <div className="container">
                <h3 className="mt-3">DashBoard:</h3>
                <div className="row">
                    <div className="col-9" style={{padding: "0px 15px"}}>
                        <div className="form-card my-3" style={{margin: "0", width: "55vw"}}>
                            <MDBContainer>
                                Upload Activity
                                <Line data={this.state.dataLine} options={{legend: {display: false}}} height={75}/>
                            </MDBContainer>
                        </div>
                    </div>
                    <div className="col-3">
                            <div className="form-card mt-3">

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