import React, { useEffect, useReducer } from "react";

import axios from "axios";
import { MDBContainer } from "mdbreact";
import { Bar } from "react-chartjs-2";
require("dotenv").config();

const dataset = {
    labels: [],
    datasets: [
      {
        label: 'Responses',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [],
      }
    ]
  }

export default function BarChart(props) {
    const [state, dispatch] = useReducer(reducer, dataset)
  
    function reducer(state, {key, value}) {
      return Object.assign({}, state, {[key]: value});
    }
  
    useEffect(() => {
      try {
        getCounts();
      } catch (err) {
        console.log(err);
      }
    }, [props.deployment]);
  
    async function getCounts() {
      var endPoint = process.env.REACT_APP_URL + props.endPoint + "/" + props.deployment;
      const response = await axios.get(endPoint);
      console.log(response.data);
      const xAxis = [];
      const yAxis = [];

      switch (props.type) {
        case "pain":
            response.data.forEach(element => {
                if(element.questionOneAnswer != null){
                    xAxis.push(element.questionOneAnswer);
                    yAxis.push(element.count);
                }
            });
            break;
        case "eod":
            response.data.forEach(element => {
                if(element.question1 != null){
                    xAxis.push(element.question1);
                    yAxis.push(element.count);
                }
            });
            break;
        case "followUp":
            response.data.forEach(element => {
                if(element.question1 != null){
                    xAxis.push(element.question1);
                    yAxis.push(element.count);
                }
            });
            break;
        default:
            break;
      }

      xAxis.reverse();
      yAxis.reverse();
      dispatch({key: "labels", value: xAxis});
      dispatch({key: "datasets", value: [Object.assign({}, state.datasets[0] ?? {}, {data: yAxis})]});
  }
  
    return (
      <MDBContainer>
        Question 1 Answers
        <Bar
          data={state}
          options={{ legend: { display: false } }}
          height={75}
        />
      </MDBContainer>
    );
  }