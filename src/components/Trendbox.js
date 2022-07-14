import React, { useEffect, useState } from "react";
import data from "./data";

function Trendbox({ setTrendbox }) {
    const [trends, setTrends] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    useEffect(() => {
        const count = 5;
        setTrends(data(count, "trend"));
        setSuggestions(data(count, "suggest"));
        console.log(suggestions);
        window.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                setTrendbox(false);
            }
        });
    }, [setTrendbox]);

    const trendsdiv = trends.map((trend, index) => {
        return (
            <div key={index}>
                <img src={trend.image} alt={trend.type} className="trendsimage"></img>
                <div>{trend.name}</div>
            </div>
        );
    });

    const suggestionsdiv = suggestions.map((suggestion, index) => {
        return (
            <div key={index}>
                <div className="suggestionname">{suggestion.name}</div>
            </div>
        );
    });
    return (
        <div className="trendbox">
            <div
                className="closebutton"
                onClick={() => {
                    console.log("close");
                    setTrendbox(false);
                }}
            >
                X
            </div>
            <div className="latestheading">Latest Trends</div>
            <div className="latesttrends">{trendsdiv}</div>
            <div className="suggestionsheading">Popular Suggestions</div>
            <div className="suggestions">{suggestionsdiv}</div>
        </div>
    );
}

export default Trendbox;
