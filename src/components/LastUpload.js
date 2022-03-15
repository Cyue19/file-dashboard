import React, { useEffect, useState } from "react";

import axios from "axios";
import { DateTime } from "luxon";
require("dotenv").config();

export default function LastUpload(props) {
  const [recent, setRecent] = useState(null);
  const baseURL = process.env.REACT_APP_URL + props.endPoint;

  useEffect(() => {
    try {
      getRecent();
    } catch (err) {
      console.log(err);
    }
  }, []);

  async function getRecent() {
    const response = await axios.get(baseURL);
    console.log(response.data);
    setRecent(response.data);
  }

  function getCard(formatted) {
    switch(props.type) {
      case "pain":
        return (
          <div>
            <div>Question 1: {recent.questionOneAnswer}</div>
            <div>Time: {formatted}</div>
            <div>Deployment: {recent.painResponseDeployment}</div>
        </div>
        );
      case "eod":
        return(
          <div>
            <div>Filetype: {recent.surveyType}</div>
            <div>Time: {formatted}</div>
            <div>Deployment: {recent.eodrDeployment}</div>
          </div>
        );
      case "followUp":
        return(
          <div>
            <div>Filetype: {recent.surveyType}</div>
            <div>Time: {formatted}</div>
            <div>Deployment: {recent.furDeployment}</div>
          </div>
        );
      case "files":
        return(
          <div>
          <div>File: {recent.fileName}</div>
          <div>Time: {formatted}</div>
          <div>Deployment: {recent.deployment}</div>
        </div>
        );
      default:
        break;
    }
  }

  function showRecent(){
    var formatted = "";

    if (props.type==="pain" ||
     props.type==="eod" || props.type === "followUp") {
      formatted = DateTime
      .fromISO(recent.time)
      .toLocaleString(DateTime.DATETIME_MED);
    } else {
      formatted = DateTime
      .fromISO(recent.lastModified)
      .toLocaleString(DateTime.DATETIME_MED);
    }


      return(
        <div>
          {getCard(formatted)}
        </div>
        // <div>
        //   {props.type==="pain" ?
        //   (
        //     <div>
        //       <div>File: {recent.questionOneAnswer}</div>
        //       <div>Time: {formatted}</div>
        //       <div>Deployment: {recent.painResponseDeployment}</div>
        //     </div>
        //   )
        //   :
        //   (
        //     <div>
        //       <div>File: {recent.fileName}</div>
        //       <div>Time: {formatted}</div>
        //       <div>Deployment: {recent.deployment}</div>
        //     </div>
        //   )}
        // </div>
        
      );
  }

  return <div>
     {recent != null ? showRecent(): "loading"}
  </div>;
}
