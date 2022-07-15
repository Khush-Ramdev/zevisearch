import React, { useEffect, useState } from "react";

function Search({ searchText, setSearchText, setTrendbox, setresults }) {
    const [empty, setEmpty] = useState(false);

    useEffect(() => {
        if (searchText !== "") {
            setEmpty(false);
        }
    }, [searchText]);

    const handleChange = (e) => {
        const { value } = e.target;
        setresults(false);
        setSearchText(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchText !== "") {
            setEmpty(false);
            setTrendbox(false);
            setresults(true);
        } else {
            setEmpty(true);
        }
    };

    return (
        <div className="searchwrapper">
            <form onSubmit={handleSubmit} className="search">
                <input
                    // ref={searchbarref}
                    className="searchbar"
                    placeholder="Search"
                    value={searchText}
                    onChange={handleChange}
                    onClick={() => {
                        setTrendbox(true);
                        setresults(false);
                    }}
                ></input>
            </form>
            {empty && <div className="">Searchbar cannot be empty</div>}
        </div>
    );
}

export default Search;
