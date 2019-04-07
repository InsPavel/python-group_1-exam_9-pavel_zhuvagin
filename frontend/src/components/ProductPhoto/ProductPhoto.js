import React from 'react'
import './ProductPhoto.css'

const ProductPhoto = (props) => {
    const {photo} = props;
        return <div className='photo'>
            {photo.map(photo => <span key={photo.id}>
                <img src={photo.photo} alt=''/>
        </span>
    )}</div>
};

export default ProductPhoto;