import React, { useEffect, useState, useReducer } from "react";

import axios from "axios";
import { MDBContainer } from "mdbreact";
import { Bar } from "react-chartjs-2";
require("dotenv").config();
const endPoint = process.env.REACT_APP_URL +"/responses/pain/counts";

const dataset = {
    labels: [],
    datasets: [
      {
        label: 'Pain Responses',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [],
      }
    ]
  }

export default function EndOfDayQ1Chart() {
    const [recent, setRecent] = useState(null);
    const [state, dispatch] = useReducer(reducer, dataset)
  
    function reducer(state, {key, value}) {
      return Object.assign({}, state, {[key]: value});
  }
  
    useEffect(() => {
      try {
        getEndOfDayQ1();
      } catch (err) {
        console.log(err);
      }
    }, []);
  
    async function getEndOfDayQ1() {
      const response = await axios.get(endPoint);
      console.log(response.data);
      const xAxis = [];
      const yAxis = [];
      response.data.forEach(element => {
          if(element.questionOneAnswer != null){
              xAxis.push(element.questionOneAnswer);
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
        Question 1 from End-of-day Responses
        <Bar
          data={state}
          options={{ legend: { display: false } }}
          height={75}
        />
      </MDBContainer>
    );
  }