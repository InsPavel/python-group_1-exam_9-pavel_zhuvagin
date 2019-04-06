import React, {Fragment} from 'react'
import ProductCategories from "../../ProductCategories/ProductCategories";
import ProductPhoto from "../../ProductPhoto/ProductPhoto";
import {NavLink} from "react-router-dom";

const Card = props => {
    const {name, description, categories, product_photo} = props.product;
    return <Fragment>
        <div className='card text-center'>
            <ProductPhoto photo={product_photo}/>
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