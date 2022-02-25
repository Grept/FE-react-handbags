import React from "react";

function Product({promo, img, name, price}) {
    return (
        <article>
            <span>{promo}</span>
            <img src={img} alt={name}/>
            <p>{name}</p>
            <h4>€{price}</h4>
        </article>
    );
}

export default Product;