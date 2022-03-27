import FileWrapper from "./FileWrapper";
import SearchBar from "./SearchBar";
require("dotenv").config();

export default function Files(props) {

    props.setPath("/files");

        return(
            <div className="ps-4 pe-5 m-0">
                <h3 className="mt-3">Files:</h3>

                <SearchBar />

                <div className="container mt-3 form-card">
                    All Files
                    <FileWrapper type="files"/>
                </div>
            </div>
        )
}