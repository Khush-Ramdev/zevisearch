import React, { useState } from "react";

const Resultsdiv = ({ results, wishlist, setWishlist }) => {
    const showproduct = (index) => {
        document.querySelector(`.view${index}`).classList.add("showproduct");
    };

    const hideproduct = (index) => {
        document.querySelector(`.view${index}`).classList.remove("showproduct");
    };

    const resultsdiv = results.map((result, index) => {
        const handlewishlist = (index) => {
            document.querySelector(`.card${index}`).classList.toggle("wishlisted");
            if (wishlist.indexOf(result) !== -1) {
                setWishlist(wishlist.filter((item) => item.name !== result.name));
            } else {
                setWishlist([...wishlist, result]);
            }
        };

        return (
            <div
                key={index}
                className="resultcard"
                onMouseEnter={() => showproduct(index)}
                onMouseLeave={() => {
                    hideproduct(index);
                }}
            >
                <i
                    className={`fas fa-heart card${index}`}
                    onClick={() => handlewishlist(index)}
                ></i>
                <div className={`viewproduct view${index}`}>View Product</div>
                <img src={result.image} alt={result.type} className="cardimage"></img>
                <div className="info">
                    <div className="cardname">{result.name}</div>
                    <div className="cardprice">₹{result.price}</div>
                    <div className="cardrating">
                        {result.rating} <span className="cardreviews">({result.reviews})</span>
                    </div>
                </div>
            </div>
        );
    });
    return resultsdiv;
};

export default Resultsdiv;
