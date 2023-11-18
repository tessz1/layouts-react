import React, { useState } from "react";
import CardsView from './ListViews'; 
import ListView from './CardsView'; 
import IconSwitch from "./IconSwitch";
import "../styles/App.css"
import "../styles/ListViewStyle.css"
import "../styles/CardViewStyle.css"

function Store() {
    const products = [
        {
            name: "Nike Metcon 2",
            price: "130",
            color: "red",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
        },
        {
            name: "Nike Metcon 2",
            price: "130",
            color: "green",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
        },
        {
            name: "Nike Metcon 2",
            price: "130",
            color: "blue",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
        },
        {
            name: "Nike Metcon 2",
            price: "130",
            color: "black",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
        },
        {
            name: "Nike free run",
            price: "170",
            color: "black",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
        },
        {
            name: "Nike Metcon 3",
            price: "150",
            color: "green",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
        }
    ];

    const [displayType, setDisplayType] = useState('view_list');

    const handleIconSwitch = () => {
        setDisplayType((prevType) => (prevType === 'view_list' ? 'view_module' : 'view_list'));
    };

    return (
        <div>
            <IconSwitch icon={displayType} onSwitch={handleIconSwitch} />
            {displayType === 'view_module' ? <CardsView products={products} /> : <ListView items={products} />}

        </div>
    );
}

export default Store;

