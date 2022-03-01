import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import Button from "react-bootstrap/Button";
require("dotenv").config();

const searchURL = "http://localhost:3001/files/search/";
const baseURL = process.env.REACT_APP_URL+"/files/";

export default function SearchBar(props) {

    const [searchKey, setSearchKey] = useState();
    const [results, setResults] = useState([]);
    const [searchType, setSearchType] = useState("fileName");

    let history = useHistory();

    function onSearchKeyChanged(e) {
        setSearchKey(e.target.value);
    }

    function onSearchTypeChanged(e) {
        setSearchType(e.target.value);
    }

    async function searchFiles(e) {
        e.preventDefault();
        e.stopPropagation();
        try {
            // const url = searchURL + searchKey;
            // const response = await axios.get(url);
            const response = await axios.get(searchURL, {
                params: {
                    [searchType]: searchKey
                }
            });
            history.push({pathname: "/files/search", state: {results: response.data}});
            setResults(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    return(
        <div>

            <form action="/files/search" onSubmit={(e) =>searchFiles(e)}>
                <div className="input-group mb-3">
                    <select value={searchType} onChange={(e) => onSearchTypeChanged(e)} name="type" className="form-select col-2">
                        <option value="fileName">File Name</option>
                        <option value="location">File Path</option>
                        <option value="size">Size</option>
                    </select>
                    <input type="text" className="input-group form-control" name="fileName" onChange={(e) => onSearchKeyChanged(e)} placeholder="" />
                    <Button variant="primary" type="submit">Search</Button>
                </div>
            </form>
        </div>
    )
}