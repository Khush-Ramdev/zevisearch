import React from "react";

function Search({ searchText, setSearchText, setTrendbox }) {
    const handleChange = (e) => {
        const { value } = e.target;
        setSearchText(value);
    };

    return (
        <div className="search">
            <input
                className="searchbar"
                placeholder="Search"
                value={searchText}
                onChange={handleChange}
                onClick={() => {
                    setTrendbox(true);
                }}
            ></input>
        </div>
    );
}

export default Search;
