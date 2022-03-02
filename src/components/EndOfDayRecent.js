import React, { useEffect, useState } from "react";

import axios from "axios";
import { DateTime } from "luxon";
require("dotenv").config();
const EODURL = process.env.REACT_APP_URL +"/responses/end_of_day/last";

export default function EndOfDayRecent() {
    const [recent, setRecent] = useState(null);

  useEffect(() => {
    try {
      getEndOfDayRecent();
    } catch (err) {
      console.log(err);
    }
  }, []);

  async function getEndOfDayRecent() {
    const response = await axios.get(EODURL);
    console.log(response.data);
    setRecent(response.data);
  }
  function showEndOfDayRecent(){
    //console.log(recent);
    const formatted = DateTime
    .fromISO(recent.time)
    .toLocaleString(DateTime.DATETIME_MED);

      return(
        <div>
        <div>Filetype: {recent.surveyType}</div>
        <div>Time: {formatted}</div>
        <div>Deployment: {recent.eodrDeployment}</div>
        </div>
        
      );
  }

  return <div>
     {recent != null ? showEndOfDayRecent(): "loading"}
  </div>;
}
