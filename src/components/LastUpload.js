import React, { useEffect, useState } from "react";

import axios from "axios";
import { DateTime } from "luxon";

const baseURL = "https://api.remote.besic.org/files/last";

export default function LastUpload() {
    const [recent, setRecent] = useState(null);

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
    const formatted = DateTime
    .fromISO(recent.lastModified)
    .toLocaleString(DateTime.DATETIME_MED);

      return(
        <div>
        <div>File: {recent.fileName}</div>
        <div>Time: {formatted}</div>
        <div>Deployment: {recent.deployment}</div>
        </div>
        
      );
  }

  return <div>
     {recent != null ? showRecent(): "loading"}
  </div>;
}
