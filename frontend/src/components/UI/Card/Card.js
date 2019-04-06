import React, {Fragment} from 'react'
import ProductCategories from "../../ProductCategories/ProductCategories";

const Card = props => {
    console.log(props);
    const {name, description, categories} = props.product;
    return <Fragment>
        <div className='card'>
            <p>{name}</p>
            <p>{description}</p>
            <ProductCategories categories={categories}/>
        </div>
    </Fragment>
};

export default Card;