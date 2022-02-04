import { useEffect, useState } from 'react';
// import AWS from "aws-sdk";
import axios from "axios";

import FileTable from "./FileTable";

const baseURL = "https://api.remote.besic.org/files/";

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
      console.log(url);
      const response = await axios.get(url);
      console.log(response);
    }

    return (
        <div>
            <FileTable type={props.type} files = {listFiles} />
        </div>
    );
}
