import React from "react";

const Item = (a) => {
    return (
        <>
            <div className="items">
                <div className="item-inner">
                    <img src="product4_43.jpg" alt="" />
                    <div className="text">
                        {a.name}
                        {a.price}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Item;