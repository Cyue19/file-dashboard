import React from "react";
import { useEffect, useState } from 'react';
import axios from "axios";

import FileTable from "./FileTable";

require("dotenv").config()


export default function ResponseModal(props) {
    const [files, setFiles] = useState([]);

    async function getFiles() {
        const endPoint = process.env.REACT_APP_URL + props.endPoint;
        const response = axios.get(endPoint);
        setFiles(response);
    }

    return (
        <div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <FileTable type={props.type} files={files} />
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
