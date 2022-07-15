import React, { useState, useEffect } from "react";
import data from "./data";
import Resultcards from "./Resultcards";
import { uniquebrands } from "./unique";

function Results({ resultytpe }) {
    const [wishlist, setWishlist] = useState([]);
    const [results, setResults] = useState([]);
    const [alldepartments, setAllDepartments] = useState([]);
    const [filters, setFilters] = useState({
        departments: [],
        lowerprice: 0,
        upperprice: 5000,
        rating: 5,
    });

    useEffect(() => {
        setAllDepartments(uniquebrands(results));
    }, [results]);

    useEffect(() => {
        const count = 10;
        setResults(data(count, "searchresults", resultytpe));
    }, []);

    const departmentsdiv = alldepartments.map((brand, index) => {
        // console.log(brand);
        return (
            <div>
                <input type="checkbox" value={brand} key={index} className="brand"></input>
                <label htmlFor={index}> {brand}</label>
            </div>
        );
    });

    const pricediv = [];
    for (let price = filters.lowerprice; price <= filters.upperprice; price += 1000) {
        pricediv.push(
            <div key={price}>
                <input name={price} type="checkbox" value={price}></input>
                <label htmlFor={price}>
                    {price !== filters.upperprice ? price + "-" + (price + 1000) : price + "+"}
                </label>
            </div>,
        );
    }

    const ratingsdiv = [];
    for (let rating = 1; rating <= 5; rating++) {
        ratingsdiv.push(
            <div key={rating}>
                <input name={rating} type="checkbox" value={rating}></input>
                <label htmlFor={rating}>{rating + (rating !== 5 ? "+" : "")}</label>
            </div>,
        );
    }

    return (
        <div className="results">
            <div className="resultfilters">
                <div className="resultsheading">Search Results</div>
                <div>
                    <div className="filterheading">departments</div>
                    <div className="filtercontent">
                        <form>{departmentsdiv}</form>
                    </div>
                    <div className="filterheading">Price</div>
                    <div className="filtercontent">
                        <form>{pricediv}</form>
                    </div>
                    <div className="filterheading">Rating</div>
                    <div className="filtercontent">
                        <form>{ratingsdiv}</form>
                    </div>
                </div>
            </div>
            <div className="resultsgrid">
                <Resultcards results={results} wishlist={wishlist} setWishlist={setWishlist} />
            </div>
        </div>
    );
}

export default Results;
