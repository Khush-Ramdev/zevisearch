import { useState, useEffect } from "react";

import "./App.scss";
import Search from "./components/Search";
import Trendbox from "./components/Trendbox";
import Results from "./components/Results";

function App() {
    const [searchText, setSearchText] = useState("");
    const [trendbox, setTrendbox] = useState(false);
    const [results, setresults] = useState(false);

    useEffect(() => {}, [searchText]);

    return (
        <div className="App Appbackground">
            <Search
                searchText={searchText}
                setSearchText={setSearchText}
                setTrendbox={setTrendbox}
                trendbox={trendbox}
                setresults={setresults}
            />
            {trendbox && <Trendbox setTrendbox={setTrendbox} />}
            {results && <Results resultytpe={searchText}></Results>}
        </div>
    );
}

export default App;
