import React from "react";

export default function Pagination(props) {
    const { page, totPages } = props;

    //create array of buttons
    function getPageButtons(pages) {
      const buttons = [];
      if (totPages<5) {
        for (let i=page; i<=totPages; i++) {
          buttons.push(<li className={"page-item" + (page===i ? " active":"")}><button onClick={() => props.setPage(i)} className="page-link">{i}</button></li>);
        }
      } else if (page===totPages || page===totPages-1) {
        buttons.push(<li className="page-item"><button onClick={() => props.setPage(1)} className="page-link">1</button></li>)
        buttons.push(<li className="page-item"><button onClick={() => props.setPage(2)} className="page-link">2</button></li>)
        buttons.push(<li className="page-item"><button onClick={() => props.setPage(3)} className="page-link">3</button></li>)
      } else {
        buttons.push(<li className="page-item active"><button onClick={() => props.setPage(page)} className="page-link">{page}</button></li>)
      
        for (let i=page+1; i<=page+2; i++) {
          buttons.push(<li className="page-item"><button onClick={() => props.setPage(i)} className="page-link">{i}</button></li>);
        }
      }

      return buttons;
    } 


    return(
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <button disabled={(page===1)} onClick={() => props.setPage(1)} className={"page-link" + (page===1 ? " disabled": "")}>
              <span>&laquo;</span>
            </button>
          </li>
          <li className="page-item">
            <button disabled={(page===1)} onClick={() => props.setPage(page-1)} className={"page-link" + (page===1 ? " disabled": "")}>
              <span>&lsaquo;</span>
            </button>
          </li>

          {getPageButtons(totPages)}
          
          {totPages<5 ?
          ""
          :
          <li className="page-item">...</li>
          }
          {totPages<5 ?
          ""
          :
          <li className={"page-item" + (page===totPages-1 ? " active" : "") }><button onClick={() => props.setPage(totPages-1)} className="page-link">{totPages-1}</button></li>
          }
          {totPages<5 ?
          ""
          :
          <li className={"page-item" + (page===totPages ? " active" : "") }><button onClick={() => props.setPage(totPages)} className="page-link">{totPages}</button></li>
          }

          <li className="page-item">
            <button disabled={(page===totPages)} onClick={() => props.setPage(page+1)} className={"page-link" + (page===totPages ? " disabled": "")}>
              <span aria-hidden="true">&rsaquo;</span>
            </button>
          </li>
          <li className="page-item">
            <button disabled={(page===totPages)} onClick={() => props.setPage(totPages)} className={"page-link" + (page===totPages ? " disabled": "")}>
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </nav>
    );
}