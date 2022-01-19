import { useState, useEffect } from "react";
import axios from "axios";

import FileWrapper from "./FileWrapper";
import SearchBar from "./SearchBar";

const baseURL = "https://api.remote.besic.org/files/";

export default function Files(props) {

    // const [searchKey, setSearchKey] = useState();
    // const [type, setType] = useState("");
    // const [results, setResults] = useState([]);

    props.setPath("/files");

    // function onSearchKeyChanged(e) {
    //     setSearchKey(e.target.value);
    // }

    // function onTypeChanged(e) {
    //     setType(e.target.value);
    // }

    // async function searchFiles(e) {
    //     e.preventDefault();
    //     try {
    //         const url = baseURL + "/search/" + searchKey;
    //         const response = await axios.get(url);
    //         //const response = await axios.get(url, {params: {fileName: searchKey}})
    //         setResults(response.data);
    //         console.log(response.data);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

        return(
            <div className="container">
                <h3 className="mt-3">Files:</h3>

                <SearchBar />

                <div className="container mt-3 form-card">
                    All Files
                    <FileWrapper />
                </div>
            </div>
        )
}