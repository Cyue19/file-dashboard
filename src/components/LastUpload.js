import React, { useEffect, useState } from "react";

import axios from "axios";
import { DateTime } from "luxon";
require("dotenv").config();
var baseURL = process.env.REACT_APP_URL +"/files/last";

export default function LastUpload(props) {
    const [recent, setRecent] = useState(null);
  if (props.type === "pain") {
    baseURL = process.env.REACT_APP_URL + props.endPoint;
  }

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
  
  function showRecent(){
    var formatted = "";

    if (props.type==="pain") {
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
          {props.type==="pain" ?
          (
            <div>
              <div>File: {recent.questionOneAnswer}</div>
              <div>Time: {formatted}</div>
              <div>Deployment: {recent.painResponseDeployment}</div>
            </div>
          )
          :
          (
            <div>
              <div>File: {recent.fileName}</div>
              <div>Time: {formatted}</div>
              <div>Deployment: {recent.deployment}</div>
            </div>
          )}
        </div>
        
      );
  }

  return <div>
     {recent != null ? showRecent(): "loading"}
  </div>;
}
