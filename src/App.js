import "./App.scss";
import Search from "./components/Search";
import Trendbox from "./components/Trendbox";
import { useState, useEffect } from "react";

function App() {
    const [searchText, setSearchText] = useState("");
    const [trendbox, setTrendbox] = useState(false);

    useEffect(() => {
        console.log(searchText);
    }, [searchText]);

    return (
        <div className="App">
            <Search
                searchText={searchText}
                setSearchText={setSearchText}
                setTrendbox={setTrendbox}
            />
            {trendbox && <Trendbox setTrendbox={setTrendbox} />}
        </div>
    );
}

export default App;
