import React from "react";
import Header from "./Header";
import Item from "./Item";


const Homee = () => {
    return (
        <>
            <div className="main">
                <div className="container">
                    <div className="main-inner">
                        <Item name="Kids" price="100"/>
                        <Item name="Kids1"/>
                        <Item name="Kids2"/>
                        <Item name="Kids3"/>
                        <Item name="Kids4"/>

                    </div>
                </div>
            </div>
        </>
    );
}


export { Homee };