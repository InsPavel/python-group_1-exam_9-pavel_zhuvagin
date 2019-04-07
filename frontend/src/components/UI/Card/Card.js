import React, {Fragment} from 'react'
import ProductCategories from "../../ProductCategories/ProductCategories";
import ProductPhoto from "../../ProductPhoto/ProductPhoto";
import {NavLink} from "react-router-dom";
import NoPhoto from './no_product.png'

const Card = props => {
    const {name, description, categories, product_photo} = props.product;
    const productPhoto = product_photo && product_photo.length > 0 ? [product_photo[0]] : [NoPhoto];
    return <Fragment>
        <div className='card text-center'>
            <ProductPhoto photo={productPhoto}/>
            <p>{name}</p>
            <p>{description}</p>
            <ProductCategories categories={categories}/>
            <NavLink to={'/products/' + props.id}>
                <p>Read more...</p>
            </NavLink>
        </div>
    </Fragment>
};

export default Card;