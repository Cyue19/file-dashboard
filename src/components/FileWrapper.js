import { useEffect, useState } from 'react';
// import AWS from "aws-sdk";
import axios from "axios";

import FileTable from "./FileTable";

const baseURL = "http://localhost:3001/files/";

// const S3_BUCKET = "besi-c";

// AWS.config.update({
//   accessKeyId:"keyid",
//   secretAccessKey: "accesskey"
// });

// const myBucket = new AWS.S3();

// var params = {
//   Bucket: S3_BUCKET,
//   Prefix: "public/"
// }


export default function FileWrapper(){

    const [listFiles, setListFiles] = useState([]);

    // const [count, setCount] = useState({January: 0, February: 0, March: 0, April: 0, May: 0, June: 0, July: 0, 
    //   August: 0, September: 0, October: 0, November: 0, December: 0});
    // var list = [];
    // axios.get(baseURL).then((response) => {
    //   list = response.data;
    //   console.log(response.data);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });

    useEffect(() => {
      try {
        getPost();
      } catch(err) {
        console.log(err);
      }
    }, []);

    async function getPost() {
      const response = await axios.get(baseURL);
      setListFiles(response.data);
    }

    // useEffect(() => {
    //   axios.get(baseURL).then((response) => {
    //     setListFiles(response.data);
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // })
    // useEffect(() => {
    // myBucket.listObjectsV2(params, (err, data) => {
    //   if (err) {
    //     console.log(err, err.stack);
    //   } else {
    //     setListFiles(data.Contents);
    //     // data.Contents.forEach(function(file) {
    //     //   listFiles.push(file);
    //     // });

    //   //   if (!data.isTruncated) {
    //   //     params.ContinuationToken = data.NextContinuationToken;
    //   //     console.log("fetching...");
    //   //     FileWrapper();
    //   //   }
    //   //   console.log(listFiles);
    //   }
    // }); 
    // }, []);

    return (
        <div>
            <FileTable files = {listFiles} />
        </div>
    );
}
