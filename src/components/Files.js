import FileWrapper from "./FileWrapper";
import SearchBar from "./SearchBar";

// const baseURL = "https://api.remote.besic.org/files/";
const baseURL = "http://localhost:3001/files";

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