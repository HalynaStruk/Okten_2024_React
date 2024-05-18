import React, {FC} from "react";
import classes from "./Product.module.css";

export interface IProductProps {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[]
}

const Product: FC<IProductProps> = ({
                                        id,
                                        title,
                                        description,
                                        price,
                                        discountPercentage,
                                        rating,
                                        stock,
                                        brand,
                                        category,
                                        thumbnail,
                                        images
                                    }) => {

    return (
        <div className={classes.divContainer}>
            <h2>{id}. {title}</h2>
            <img className={classes.img} src={thumbnail} alt={title}/>
            <p>{description}</p>
            <h4>discount: {discountPercentage}%</h4>
            <h4>price: {price}$</h4>
            <h5>rating: {rating}</h5>
            <div className={classes.productImage}>
                {
                images.map((image, index) => <img key = {index} src={image} alt={title}/>)
               }
            </div>
        </div>
    );
};

export default Product;