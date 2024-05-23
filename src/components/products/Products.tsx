import React, {FC} from "react";
import {ProductModel} from "../../models/ProductModel";
import Product from "../product/Product";

interface IProps {
    items: ProductModel[]
}

const Products:FC<IProps> = ({items: productsId}) => {

    return (
        <div>
            {
                productsId.map((id: ProductModel, index) => <Product key={index} id={id}/>)
            }
        </div>
    );
};

export default Products;