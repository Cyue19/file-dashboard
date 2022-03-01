import FileWrapper from "./FileWrapper";
import SearchBar from "./SearchBar";
require("dotenv").config();

export default function Files(props) {

    props.setPath("/files");

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