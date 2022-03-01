import { useEffect, useState } from 'react';
// import AWS from "aws-sdk";
import axios from "axios";

import FileTable from "./FileTable";
// require("dotenv").config({path: "../../.env"});
//console.log(require("dotenv").config());
require("dotenv").config()

//const baseURL = process.env.REACT_APP_URL +"/files/";
const baseURL = "http://localhost:3001/files/";
console.log(process.env.REACT_APP_URL);

export default function FileWrapper(props){

    const [listFiles, setListFiles] = useState([]);

    useEffect(() => {
      try {
        getFiles();
        getCount();
      } catch(err) {
        console.log(err);
      }
    }, []);

    async function getFiles() {
      const response = await axios.get(baseURL);
      setListFiles(response.data);
    }

    async function getCount() {
      var url = baseURL + "count";
      //console.log(url);
      const response = await axios.get(url);
      //console.log(response);
    }

    return (
        <div>
            <FileTable type={props.type} files = {listFiles} />
        </div>
    );
}
