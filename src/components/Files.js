import { useState, useEffect } from "react";
import axios from "axios";

import FileWrapper from "./FileWrapper";

const baseURL = "http://localhost:3001/files/";

export default function Files() {

    const [searchKey, setSearchKey] = useState();
    const [type, setType] = useState("");
    const [results, setResults] = useState([]);

    function onSearchKeyChanged(e) {
        setSearchKey(e.target.value);
    }

    function onTypeChanged(e) {
        setType(e.target.value);
    }

    async function searchFiles(e) {
        e.preventDefault();
        try {
            const url = baseURL + searchKey;
            const response = await axios.get(url);
            //const response = await axios.get(url, {params: {fileName: searchKey}})
            setResults(response.data);
            console.log(results);
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    }

        return(
            <div className="container">
                <h3 className="mt-3">Files:</h3>
                <form onSubmit={(e) => searchFiles(e)}>
                    <div className="input-group mb-3">
                    {/* <div className="col-2 mb-3">
                        <select value={type} onChange={(e) => onTypeChanged(e)} name="type" className="form-select">
                            <option value="">Choose...</option>
                            <option value="eTag">eTag</option>
                            <option value="fileName">File Name</option>
                            <option value="location">Location</option>
                            <option value="lastModified">Upload Date</option>
                            <option value="size">Size</option>
                        </select>
                    </div> */}
                        <input type="text" className="form-control" onChange={(e) => onSearchKeyChanged(e)} placeholder="Search file name" />
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </div>
                </form>

                <div className="container mt-3 form-card">
                    All Files
                    <FileWrapper />
                </div>
            </div>
        )
}