import React, { useEffect, useState } from "react";

import axios from "axios";
import { DateTime } from "luxon";
require("dotenv").config();
const FollowUpURL = process.env.REACT_APP_URL +"/responses/follow_up/last";

export default function FollowUpRecent() {
    const [recent, setRecent] = useState(null);

  useEffect(() => {
    try {
      getFollowUpRecent();
    } catch (err) {
      console.log(err);
    }
  }, []);

  async function getFollowUpRecent() {
    const response = await axios.get(FollowUpURL);
    console.log(response.data);
    setRecent(response.data);
  }
  function showFollowUpRecent(){
    //console.log(recent);
    const formatted = DateTime
    .fromISO(recent.time)
    .toLocaleString(DateTime.DATETIME_MED);

      return(
        <div>
        <div>Filetype: {recent.surveyType}</div>
        <div>Time: {formatted}</div>
        <div>Deployment: {recent.furDeployment}</div>
        </div>
        
      );
  }

  return <div>
     {recent != null ? showFollowUpRecent(): "loading"}
  </div>;
}
