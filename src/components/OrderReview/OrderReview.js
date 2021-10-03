import React from 'react';
import useProducts from '../../hooks/useProduct';
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart';
import RevewItem from '../RevewItem/RevewItem';
import { removeFromDb } from '../../utilities/fakedb';

const OrderReview = () => {
    const[products]=useProducts();
    const [cart,setCart]=useCart(products);
    const handelRemove=key=>{
        const newCart=cart.filter(product=>product.key!==key);
        setCart(newCart)
        removeFromDb(key);
        
        
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product=><RevewItem
                         product={product}
                         key={product.key}
                         handelRemove={handelRemove}
                         ></RevewItem>)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default OrderReview;