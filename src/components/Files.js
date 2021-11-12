import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import FileWrapper from "./FileWrapper";
import FileTable from "./FileTable";

const baseURL = "http://localhost:3001/files/";

export default function Files(props) {

    const [searchKey, setSearchKey] = useState();
    const [type, setType] = useState("");
    const [results, setResults] = useState([]);

    props.setPath("/files");

    function onSearchKeyChanged(e) {
        setSearchKey(e.target.value);
    }

    function onTypeChanged(e) {
        setType(e.target.value);
    }

    async function searchFiles(e) {
        e.preventDefault();
        try {
            const url = baseURL + "/search/" + searchKey;
            const response = await axios.get(url);
            //const response = await axios.get(url, {params: {fileName: searchKey}})
            setResults(response.data);
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    }

        return(
            <div className="container">
                <h3 className="mt-3">Files:</h3>
                {/* <form className="search" action="/files/search" method="GET">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" name="fileName" onChange={(e) => onSearchKeyChanged(e)} placeholder="Search file name" />
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </div>
                </form> */}

                <form onSubmit={(e) =>searchFiles(e)}>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" name="fileName" onChange={(e) => onSearchKeyChanged(e)} placeholder="Search file name" />
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </div>
                </form>

                <div className="container mt-3 form-card">
                    {results ?
                    <div>
                        Search Results
                        <FileTable files={results}/>
                    </div>
                    :
                    <div> 
                        All Files
                        <FileWrapper />
                    </div>
                    }
                </div>
            </div>
        )
}