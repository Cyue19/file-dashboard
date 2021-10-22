import React, { useState } from "react";

export default function FileTable(props) {
    const [page, setPage] = useState(1);
    // console.log(props.files);

    //calculate total pages needed for table
    function getTotalPages() {
      var remainder = props.files.length%10;
      var pages = Math.floor(props.files.length/10);
      if (remainder>0) {
        return pages + 1;
      } else {
        return pages;
      }
    }

    //create array of buttons
    function getPageButtons(pages) {
      const buttons = [];
      
      for (let i=1; i<=pages; i++) {
        buttons.push(<li className="page-item"><button onClick={() => setPage(i)} className="page-link">{i}</button></li>);
      }

      return buttons;
    } 

    return(
      <div>
        {(props.files.length===0) ? 

          <div>Loading</div>
        :
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
                  {
                  props.files.slice((page-1)*10, page*10).map( file =>
                      <tr key={file._id}>
                          <td>{file.fileName}</td>
                          <td>{file.location}</td>
                          <td>{file.lastModified}</td>
                          <td>{file.size > 1000 ? `${(parseInt(file.size)/1000)} KB` : `${file.size} B`}</td>
                          <td>{file.size === 0 ? "x":""}</td>
                      </tr>
                  )}
              </tbody>
            </table>
            <nav>
              <ul className="pagination">
                <li className="page-item">
                  <button onClick={() => setPage(page-1)} className="page-link">
                    <span aria-hidden="true">&laquo;</span>
                  </button>
                </li>
                {getPageButtons(getTotalPages())}
                <li className="page-item">
                  <button onClick={() => setPage(page + 1)} className="page-link">
                    <span aria-hidden="true">&raquo;</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        }
      </div>
    );
}