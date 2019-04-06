import React, {Fragment} from 'react'
import ProductCategories from "../../ProductCategories/ProductCategories";
import ProductPhoto from "../../ProductPhoto/ProductPhoto";

const Card = props => {
    const {name, description, categories, product_photo} = props.product;
    return <Fragment>
        <div className='card text-center'>

            <ProductPhoto photo={product_photo}/>
            <p>{name}</p>
            <p>{description}</p>
            <ProductCategories categories={categories}/>
        </div>
    </Fragment>
};

export default Card;