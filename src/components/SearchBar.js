import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const baseURL = "http://localhost:3001/files/";

export default function SearchBar(props) {

    const [searchKey, setSearchKey] = useState();
    const [results, setResults] = useState([]);

    let history = useHistory();

    function onSearchKeyChanged(e) {
        setSearchKey(e.target.value);
    }

    async function searchFiles(e) {
        e.preventDefault();
        e.stopPropagation();
        try {
            const url = baseURL + "/search/" + searchKey;
            const response = await axios.get(url);
            //const response = await axios.get(url, {params: {fileName: searchKey}})
            history.push({pathname: "/files/search", state: {results: response.data}});
            setResults(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    return(
        <div>
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
        </div>
    )
}