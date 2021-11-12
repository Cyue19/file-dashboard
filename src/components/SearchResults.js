import { useLocation } from "react-router-dom";

import SearchBar from "./SearchBar";
import FileTable from "./FileTable";

export default function SearchResults(props) {
    let location = useLocation();

    return (
        <div>
            <div className="container">
                <h3 className="mt-3">Files:</h3>

                <SearchBar />

                <div className="container mt-3 form-card">
                    All Files
                    <FileTable files={location.state.results}/>
                </div>
            </div>
        </div>
    )
}