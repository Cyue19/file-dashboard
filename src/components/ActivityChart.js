import React, { useEffect, useState, useReducer } from "react";

import axios from "axios";
import { DateTime } from "luxon";
import { MDBContainer } from "mdbreact";
import { Line } from "react-chartjs-2";

const baseURL = "http://localhost:3001/files/byDate";

const dataset = {
    labels: [],
    datasets: [
      {
        fill: false,
        label: "Documents",
        lineTension: 0.3,
        borderColor: "#0d6efd",
        pointBackgroundColor: "#0d6efd",
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgb(0, 0, 0)",
        pointHoverBorderColor: "rgba(220, 220, 220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        pointHitRadius: 10,
        data: [],
      },
    ],
    options: {
      legend: { display: false },
    },
  }

export default function ActivityChart() {
  const [recent, setRecent] = useState(null);
  const [state, dispatch] = useReducer(reducer, dataset)

  function reducer(state, {key, value}) {
    return Object.assign({}, state, {[key]: value});
}

  useEffect(() => {
    try {
      getActivity();
    } catch (err) {
      console.log(err);
    }
  }, []);

  async function getActivity() {
    const response = await axios.get(baseURL);
    console.log(response.data);
    const xAxis = [];
    const yAxis = [];
    response.data.forEach(element => {
        if(element._id != null){
            xAxis.push(element._id);
            yAxis.push(element.count);
        }
    });
    xAxis.reverse();
    yAxis.reverse();
    dispatch({key: "labels", value: xAxis});
    dispatch({key: "datasets", value: [Object.assign({}, state.datasets[0] ?? {}, {data: yAxis})]});
}

  return (
    <MDBContainer>
      Upload Activity
      <Line
        data={state}
        options={{ legend: { display: false } }}
        height={75}
      />
    </MDBContainer>
  );
}
