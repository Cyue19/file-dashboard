import React, { useState } from "react";

export default function Pagination(props) {
    const { page, totPages } = props;

    //create array of buttons
    function getPageButtons(pages) {
      const buttons = [];

      buttons.push(<li className="page-item active"><button onClick={() => props.setPage(page)} className="page-link">{page}</button></li>)
      
      for (let i=page+1; i<=page+2; i++) {
        buttons.push(<li className="page-item"><button onClick={() => props.setPage(i)} className="page-link">{i}</button></li>);
      }

      return buttons;
    } 

    return(
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <button onClick={() => props.setPage(1)} className="page-link">
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>
          <li className="page-item">
            <button onClick={() => props.setPage(page-1)} className="page-link">
              <span aria-hidden="true">&lsaquo;</span>
            </button>
          </li>
          {getPageButtons(totPages)}
          <li className="page-item">...</li>
          <li className="page-item"><button onClick={() => props.setPage(totPages-1)} className="page-link">{totPages-1}</button></li>
          <li className="page-item"><button onClick={() => props.setPage(totPages)} className="page-link">{totPages}</button></li>
          <li className="page-item">
            <button onClick={() => props.setPage(page+1)} className="page-link">
              <span aria-hidden="true">&rsaquo;</span>
            </button>
          </li>
          <li className="page-item">
            <button onClick={() => props.setPage(totPages)} className="page-link">
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </nav>
    );
}