import React, { useState, useEffect } from "react";
import data from "./data";
import Resultcards from "./Resultcards";
import { uniquebrands } from "./unique";

function Results({ resultytpe }) {
    const [wishlist, setWishlist] = useState([]);
    const [results, setResults] = useState([]);
    const [visibleresults, setvisibleresults] = useState([]);
    const [alldepartments, setAllDepartments] = useState([]);
    const [filters, setFilters] = useState({
        departments: [],
        lowerprice: 0,
        upperprice: 5000,
        rating: 1,
    });

    useEffect(() => {
        console.log(filters);
        let newresults = results;
        if (filters.departments.length !== 0) {
            newresults = newresults.filter((item) => {
                return filters.departments.indexOf(item.department) !== -1;
            });
        }
        newresults = newresults.filter((item) => {
            console.log(item.price);
            return (
                parseInt(item.price) >= parseInt(filters.lowerprice) &&
                parseInt(item.price) <= parseInt(filters.upperprice)
            );
        });
        newresults = newresults.filter((item) => {
            console.log(item.price);
            return parseInt(item.rating) >= parseInt(filters.rating);
        });
        setvisibleresults(newresults);
        console.log(newresults);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filters]);

    useEffect(() => {
        setAllDepartments(uniquebrands(results));
        setvisibleresults(results);
    }, [results]);

    useEffect(() => {
        const count = 100;
        setResults(data(count, "searchresults", resultytpe));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const departmentsdiv = alldepartments.map((brand, index) => {
        // console.log(brand);
        return (
            <div>
                <input
                    type="checkbox"
                    value={brand}
                    key={index}
                    className="brand"
                    data-id="department"
                ></input>
                <label htmlFor={index}> {brand}</label>
            </div>
        );
    });

    const pricediv = [];
    for (let price = 0; price <= 5000; price += 1000) {
        pricediv.push(
            <div key={price}>
                <input
                    className="price"
                    name="price"
                    type="radio"
                    value={`${price}-${price + 1000}`}
                    data-id="price"
                ></input>
                <label htmlFor={price}>
                    {price !== 5000 ? price + "-" + (price + 1000) : price + "+"}
                </label>
            </div>,
        );
    }

    const ratingsdiv = [];
    for (let rating = 1; rating <= 5; rating++) {
        ratingsdiv.push(
            <div key={rating}>
                <input name="rating" type="radio" value={rating} data-id="rating"></input>
                <label htmlFor={rating}>{rating + (rating !== 5 ? " and above" : "")}</label>
            </div>,
        );
    }

    const handlefilters = (e) => {
        const id = e.target.getAttribute("data-id");
        const { value } = e.target;
        if (id === "department") {
            if (filters.departments.indexOf(value) === -1) {
                setFilters((prev) => ({ ...filters, departments: [...prev.departments, value] }));
            } else {
                const newdepartments = filters.departments.filter(
                    (department) => department !== value,
                );
                setFilters({ ...filters, departments: newdepartments });
            }
        } else if (id === "price") {
            setFilters({
                ...filters,
                lowerprice: parseInt(value.split("-")[0]),
                upperprice: parseInt(value.split("-")[1]),
            });
        } else if (id === "rating") {
            setFilters({
                ...filters,
                rating: parseInt(value),
            });
        }
    };
    return (
        <div className="results">
            <div className="resultfilters">
                <div className="resultsheading">Search Results</div>
                <div className="filtersscroll">
                    <div className="filterheading">departments</div>
                    <div className="filtercontent">
                        <form onChange={handlefilters} id="department">
                            <div
                                className="reset"
                                onClick={() => {
                                    document.getElementById("department").reset();
                                    setFilters({ ...filters, departments: [] });
                                }}
                            >
                                reset
                            </div>
                            {departmentsdiv}
                        </form>
                    </div>
                    <div className="filterheading">Price</div>
                    <div className="filtercontent">
                        <form onChange={handlefilters} id="price">
                            <div
                                className="reset"
                                onClick={() => {
                                    document.getElementById("price").reset();
                                    setFilters({ ...filters, lowerprice: 0, upperprice: 5000 });
                                }}
                            >
                                reset
                            </div>
                            {pricediv}
                        </form>
                    </div>
                    <div className="filterheading">Rating</div>
                    <div className="filtercontent">
                        <form onChange={handlefilters} id="ratings">
                            <div
                                className="reset"
                                onClick={() => {
                                    document.getElementById("ratings").reset();
                                    setFilters({ ...filters, rating: 1 });
                                }}
                            >
                                reset
                            </div>
                            {ratingsdiv}
                        </form>
                    </div>
                </div>
            </div>
            <div className="resultsgrid">
                <Resultcards
                    results={visibleresults}
                    wishlist={wishlist}
                    setWishlist={setWishlist}
                />
            </div>
        </div>
    );
}

export default Results;
