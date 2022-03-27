import React, { useState } from "react";
import Pagination from "./Pagination";

import { DateTime } from "luxon";

export default function FileTable(props) {
  const [page, setPage] = useState(1);
  // console.log(props.files);
  console.log(page);

  //calculate total pages needed for table
  function getTotalPages() {
    var remainder = props.files.length % 10;
    var pages = Math.floor(props.files.length / 10);
    if (remainder > 0) {
      return pages + 1;
    } else {
      return pages;
    }
  }

  function getAllFiles() {
    return (
      props.files.slice((page - 1) * 10, page * 10).map((file) => (
        <tr key={file._id}>
          <td>{file.fileName}</td>
          <td>{file.location}</td>
          <td>
            {DateTime.fromISO(file.lastModified).toLocaleString(
              DateTime.DATETIME_MED
            )}
          </td>
          <td>
            {file.size > 1000
              ? `${parseInt(file.size) / 1000} KB`
              : `${file.size} B`}
          </td>
          <td>{file.size === 0 ? "x" : ""}</td>
        </tr>
      ))
    );
  }

  function getRecentFiles() {
    return (
      props.files.slice(0, 10).map((file) => (
        <tr key={file._id}>
          <td>{file.fileName}</td>
          <td>{file.location}</td>
          <td>
            {DateTime.fromISO(file.lastModified).toLocaleString(
              DateTime.DATETIME_MED
            )}
          </td>
          <td>
            {file.size > 1000
              ? `${parseInt(file.size) / 1000} KB`
              : `${file.size} B`}
          </td>
          <td>{file.size === 0 ? "x" : ""}</td>
        </tr>
      ))
    );
  }

  function getResponseFiles() {
    switch (props.type) {
      case "pain":
        return (
          props.files.slice((page - 1) * 10, page * 10).map((file) => (
          <tr key={file.idPainResponses}>
            <td>{file.idPainResponses}</td>
            <td>{file.questionOneAnswer}</td>
            <td>
                {DateTime.fromISO(file.time).toLocaleString(
                  DateTime.DATETIME_MED
                )}
              </td>
          </tr>
          ))
        );
      case "eod":
        return (
          props.files.slice((page - 1) * 10, page * 10).map((file) => (
          <tr key={file.idEnd_Of_Day_Responses}>
            <td>{file.idEnd_Of_Day_Responses}</td>
            <td>{file.question1}</td>
            <td>
                {DateTime.fromISO(file.time).toLocaleString(
                  DateTime.DATETIME_MED
                )}
              </td>
          </tr>
          ))
        );
      case "followUp":
        return (
          props.files.slice((page - 1) * 10, page * 10).map((file) => (
          <tr key={file.idFollow_Up}>
            <td>{file.idFollow_Up}</td>
            <td>{file.question1}</td>
            <td>
                {DateTime.fromISO(file.time).toLocaleString(
                  DateTime.DATETIME_MED
                )}
              </td>
          </tr>
          ))
        );
      default:
        break;
    }
  }

  function getFiles() {
    switch (props.type) {
      case "recent":
        return getRecentFiles();
      case "files":
        return getAllFiles();
      case "pain":
        return getResponseFiles();
      case "eod":
        return getResponseFiles();
      case "followUp":
        return getResponseFiles();
      default:
        break;
    }
  }

  var lastPage = getTotalPages();

  return (
    <div>
      {props.files.length === 0 ? (
        <div>Loading</div>
      ) : (
        <div>
          <table className="table table-hover table-sm">
            <thead>
              {props.type==="recent" || props.type==="files" ?
                <tr>
                  <th scope="col">File Name</th>
                  <th scope="col">Location</th>
                  <th scope="col">Date Uploaded</th>
                  <th scope="col">Size</th>
                  <th scope="col"></th>
                </tr>
              :
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Answer</th>
                <th scope="col">Time</th>
              </tr>
              }
            </thead>
            <tbody>
              {getFiles()}
            </tbody>
          </table>
          {props.type==="recent" ?
          <div></div>
          :
          <Pagination totPages={lastPage} setPage={setPage} page={page}/>
          }
        </div>
      )}
    </div>
  );
}
