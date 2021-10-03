import React from 'react';

const RevewItem = (props) => {
    const{name,price,quantity,img,key}=props.product;
    const{handelRemove}=props;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
            <h4 className="product-name">{name}</h4>
            <p>price:{price}</p>
            <p>Quantity:{quantity}</p>
            <button onClick={()=>handelRemove(key)} className="btn-regular">Remove</button>
            </div>

        </div>
    );
};

export default RevewItem;