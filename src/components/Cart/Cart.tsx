import React, {FC} from "react";
import {CartModel} from "../../models/CartModel";
import {ProductModel} from "../../models/ProductModel";

type IProps = {item:CartModel, getProductsFromCart: (products: ProductModel[]) => void}

const Cart: FC<IProps> = ({item,getProductsFromCart}) => {

    const onClickHandlerCallback = () => {
        getProductsFromCart(item.products);
    };

    return (
        <div>
            cart № {item.id}. Total - {item.total}
            <button onClick={onClickHandlerCallback}>details</button>
        </div>
    );
};

export default Cart;