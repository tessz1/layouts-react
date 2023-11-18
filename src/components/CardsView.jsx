import React from "react";
import "../styles/CardViewStyle.css"

function ListView(props) {
    const { items } = props;

    return(
        <div className="shop-items-container">
            {items.map((item, index) => (
                <ShopItem key = {index} itemsData = {item}/>
            ))}
        </div>
    )
}


function ShopItem(props) {
   const {itemsData} = props
   
   return(
        <div className="container-cards">
        <p className="name-products">{itemsData.name}</p>
        <p>{itemsData.color}</p>
        <img src={itemsData.img} alt={itemsData.name}/>
        <p>${itemsData.price}</p>
    </div>
   )
}

export default ListView