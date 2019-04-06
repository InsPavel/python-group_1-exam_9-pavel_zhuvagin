import React, {Component} from 'react'
import {loadProduct} from "../../store/actions/product-detail";
import connect from "react-redux/es/connect/connect";
import ProductCategories from "../../components/ProductCategories/ProductCategories";
import ProductPhoto from "../../components/ProductPhoto/ProductPhoto";


class ProductDetail extends Component {
    componentDidMount() {
        this.props.loadProduct(this.props.match.params.id)
    }

    render() {
        if (!this.props.product) return null;
        const {name, description, categories, product_photo} = this.props.product;
        return <div>
            {product_photo ? <div className='text-center'>
                <ProductPhoto photo={product_photo}/>
            </div> : null}
            <h1>{name}</h1>
            {categories.length > 0 ? <ProductCategories categories={categories}/> : null}
            {description ? <p>{description}</p> : null}
        </div>;
    }
}

const mapStateToProps = state => state.productDetail;
const mapDispatchToProps = dispatch => ({
    loadProduct: (id) => dispatch(loadProduct(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);