import React, { useState } from "react";
import Pagination from "./Pagination";

import { DateTime } from "luxon";

export default function FileTable(props) {
  const [page, setPage] = useState(1);
  // console.log(props.files);

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

  var lastPage = getTotalPages();

  return (
    <div>
      {props.files.length === 0 ? (
        <div>Loading</div>
      ) : (
        <div>
          <table className="table table-hover table-sm">
            <thead>
              <tr>
                <th scope="col">File Name</th>
                <th scope="col">Location</th>
                <th scope="col">Date Uploaded</th>
                <th scope="col">Size</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {props.files.slice((page - 1) * 10, page * 10).map((file) => (
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
              ))}
            </tbody>
          </table>
          <Pagination totPages={lastPage} setPage={setPage} page={page}/>
        </div>
      )}
    </div>
  );
}
